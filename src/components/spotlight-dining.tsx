import { useEffect, useState, type FormEvent } from "react";
import { ArrowDown, ArrowRight, Check, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import heroImage from "@/assets/spotlight-hero.jpg";
import conceptImage from "@/assets/spotlight-concept.jpg";
import birthdayImage from "@/assets/spotlight-birthday.jpg";
import ceremonyImage from "@/assets/spotlight-ceremony.jpg";

const occasions = [
  ["Романтический ужин", "Мягкий свет, акцент на столе и спокойная атмосфера для свидания."],
  ["День рождения", "Световой момент в нужное время, акцент на поздравлении и праздничной подаче."],
  ["Семейный вечер", "Тёплый световой сценарий, который превращает обычный ужин в общее событие."],
  ["Встреча с друзьями", "Более динамичный сценарий, который создаёт момент, которым хочется поделиться."],
  ["Деловой ужин", "Сдержанная атмосфера и аккуратный акцент на важных моментах встречи."],
  ["Церемониальная подача", "Блюдо появляется в световом фокусе как маленькая гастрономическая церемония."],
];

const scenarios = [
  { label: "ROMANTIC", title: "Тихий свет для двоих", text: "Тёплый сфокусированный луч оставляет весь ресторан за пределами вашего момента.", image: heroImage },
  { label: "BIRTHDAY", title: "Свет точно в нужный момент", text: "Сценарий мягко меняется к подаче десерта и собирает внимание гостей за столом.", image: birthdayImage },
  { label: "FAMILY", title: "Общий тёплый круг", text: "Мягкий широкий свет объединяет всех за столом, не отвлекая от общения.", image: conceptImage },
  { label: "FRIENDS", title: "Энергия общего вечера", text: "Чуть более динамичный ритм света подчёркивает тосты и живые моменты.", image: birthdayImage },
  { label: "CEREMONY", title: "Блюдо выходит на сцену", text: "Луч встречает подачу и превращает несколько секунд в гастрономический ритуал.", image: ceremonyImage },
];

const navItems = [["Концепция", "concept"], ["Сценарии", "scenarios"], ["Как это работает", "process"], ["Для ресторанов", "restaurants"], ["Бронирование", "booking"]];

function scrollTo(id: string) { document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); }

export function SpotlightDining() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll(); window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return <main className="bg-background text-foreground">
    <nav aria-label="Основная навигация" className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-500 ${scrolled ? "border-border bg-background/90 backdrop-blur-xl" : "border-transparent bg-transparent"}`}>
      <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-5 lg:px-10">
        <a href="#top" className="text-sm font-medium tracking-[0.16em]">SPOTLIGHT <span className="text-primary">DINING</span></a>
        <div className="hidden items-center gap-7 lg:flex">
          {navItems.map(([label,id]) => <a key={id} href={`#${id}`} className="text-[11px] text-muted-foreground transition-colors hover:text-foreground">{label}</a>)}
          <Button variant="spotlight" size="lg" onClick={() => scrollTo("booking")}>Забронировать</Button>
        </div>
        <button className="grid size-11 place-items-center lg:hidden" aria-label={menuOpen ? "Закрыть меню" : "Открыть меню"} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
      </div>
      {menuOpen && <div className="border-t border-border bg-background px-5 py-6 lg:hidden">{navItems.map(([label,id]) => <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)} className="block border-b border-border py-4 text-sm">{label}</a>)}</div>}
    </nav>

    <section id="top" className="relative min-h-[92svh] overflow-hidden">
      <img src={heroImage} width={1920} height={1280} alt="Стол в ресторане, освещённый тёплым лучом" fetchPriority="high" className="absolute inset-0 size-full object-cover object-[66%_center] animate-cinema-drift" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,var(--background)_0%,color-mix(in_oklab,var(--background)_93%,transparent)_28%,color-mix(in_oklab,var(--background)_18%,transparent)_72%,color-mix(in_oklab,var(--background)_58%,transparent)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-background to-transparent" />
      <div className="relative mx-auto flex min-h-[92svh] max-w-[1440px] items-end px-5 pb-20 pt-32 lg:items-center lg:px-10 lg:pb-0">
        <div className="max-w-2xl animate-fade-in">
          <p className="mb-6 text-[11px] tracking-[0.28em] text-primary">SPOTLIGHT DINING</p>
          <h1 className="text-[clamp(3rem,7vw,6.9rem)] font-light leading-[.94]">Обычный ужин<br/>становится событием.</h1>
          <p className="mt-7 max-w-xl text-base font-light leading-7 text-foreground/75 md:text-lg">Выберите повод вечера — мы создадим световой момент, который гости запомнят.</p>
          <p className="mt-3 max-w-lg text-sm leading-6 text-muted-foreground">Без изменения меню, кухни и персонала. Только новый уровень клиентского опыта.</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button variant="spotlight" size="xl" onClick={() => scrollTo("booking")}>Забронировать сценарий <ArrowRight /></Button>
            <Button variant="spotlightOutline" size="xl" onClick={() => scrollTo("scenarios")}>Посмотреть сценарии</Button>
          </div>
        </div>
      </div>
      <a href="#concept" aria-label="Перейти к концепции" className="absolute bottom-8 right-8 hidden size-12 place-items-center border border-foreground/20 text-muted-foreground md:grid"><ArrowDown className="size-4" /></a>
    </section>

    <Concept />
    <OccasionSelector />
    <HowItWorks />
    <ScenarioSelector />
    <WhySection />
    <RestaurantBenefits />
    <ExperienceSection />
    <BookingForm />
    <FinalCTA />
    <Footer />
  </main>;
}

function Eyebrow({ children }: { children: string }) { return <p className="mb-5 text-[10px] tracking-[0.26em] text-primary">{children}</p>; }

function Concept() {
  return <section id="concept" className="mx-auto grid max-w-[1440px] gap-14 px-5 py-28 lg:grid-cols-[.8fr_1.2fr] lg:items-center lg:px-10 lg:py-40">
    <div><Eyebrow>THE CONCEPT</Eyebrow><h2 className="text-4xl font-light leading-tight md:text-6xl">Не просто ужин.<br/>Момент, созданный для вас.</h2><p className="mt-8 max-w-lg text-base font-light leading-8 text-muted-foreground">Spotlight Dining создаёт общий фокус вокруг стола. Гости не просто едят — они проживают момент вместе.</p>
      <ul className="mt-8 grid gap-3 text-sm text-foreground/75">{["Выделить особенное блюдо", "Создать романтическую атмосферу", "Открыть момент поздравления", "Превратить подачу в церемонию"].map(x => <li key={x} className="flex items-center gap-3"><span className="h-px w-6 bg-primary" />{x}</li>)}</ul>
    </div>
    <div className="relative aspect-[4/3] overflow-hidden"><img src={conceptImage} width={1600} height={1200} loading="lazy" alt="Премиальная сервировка в мягком свете" className="size-full object-cover transition-transform duration-[1600ms] hover:scale-[1.03]"/><div className="absolute left-1/2 top-0 h-2/3 w-1/3 -translate-x-1/2 bg-gradient-to-b from-primary/25 to-transparent blur-2xl animate-spotlight-breathe" /></div>
  </section>;
}

function OccasionSelector() {
  const [active, setActive] = useState(0);
  const images = [heroImage, birthdayImage, conceptImage, birthdayImage, heroImage, ceremonyImage];
  return <section className="border-y border-border bg-card" aria-labelledby="occasion-title">
    <div className="mx-auto max-w-[1440px] px-5 py-28 lg:px-10 lg:py-36"><Eyebrow>CHOOSE THE OCCASION</Eyebrow><div className="flex flex-col justify-between gap-5 md:flex-row md:items-end"><h2 id="occasion-title" className="text-4xl font-light md:text-6xl">Какой сегодня повод?</h2><p className="max-w-md text-sm leading-6 text-muted-foreground">Выберите сценарий — ресторан создаст атмосферу вокруг вашего момента.</p></div>
      <div className="mt-14 grid gap-px bg-border lg:grid-cols-[.85fr_1.15fr]">
        <div className="grid bg-card sm:grid-cols-2">{occasions.map(([title,desc],i) => <button key={title} onClick={() => setActive(i)} onMouseEnter={() => setActive(i)} className={`min-h-48 border-b border-r border-border p-6 text-left transition-colors duration-500 ${active === i ? "bg-primary text-primary-foreground" : "bg-card hover:bg-accent"}`}><span className="text-[10px] opacity-60">0{i+1}</span><h3 className="mt-8 text-lg font-normal">{title}</h3><p className="mt-3 text-xs leading-5 opacity-65">{desc}</p></button>)}</div>
        <div className="relative min-h-[480px] overflow-hidden bg-background">{images.map((image,i) => <img key={`${image}-${i}`} src={image} width={1600} height={1104} loading="lazy" alt="" className={`absolute inset-0 size-full object-cover transition-all duration-1000 ${active === i ? "scale-100 opacity-100" : "scale-105 opacity-0"}`} />)}<div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"/><div className="absolute bottom-7 left-7"><span className="text-[10px] tracking-[.25em] text-primary">ACTIVE SCENE</span><p className="mt-2 text-2xl font-light">{occasions[active][0]}</p></div></div>
      </div>
    </div>
  </section>;
}

function HowItWorks() {
  const steps = [["Бронируете стол", "Гость выбирает дату, время и количество гостей."], ["Выбираете повод", "Романтический ужин, день рождения, встреча с друзьями или другой сценарий."], ["Выбираете световой сценарий", "Система подготавливает нужный сценарий для стола."], ["Проживаете момент", "Гость приходит в ресторан и получает персональный световой момент."]];
  return <section id="process" className="mx-auto max-w-[1440px] px-5 py-28 lg:px-10 lg:py-40"><Eyebrow>THE PROCESS</Eyebrow><h2 className="text-4xl font-light md:text-6xl">Четыре шага до момента</h2><div className="mt-20 grid lg:grid-cols-4">{steps.map(([title,text],i) => <div key={title} className="relative border-t border-border py-8 pr-7 lg:min-h-64 lg:border-l lg:border-t-0 lg:px-7"><span className="absolute -top-3 left-0 bg-background pr-3 text-[10px] text-primary lg:-left-3 lg:top-0 lg:px-2">0{i+1}</span><h3 className="mt-5 text-xl font-light">{title}</h3><p className="mt-5 text-sm font-light leading-7 text-muted-foreground">{text}</p></div>)}</div></section>;
}

function ScenarioSelector() {
  const [active, setActive] = useState(0); const item = scenarios[active];
  return <section id="scenarios" className="relative min-h-[86svh] overflow-hidden border-y border-border">
    {scenarios.map((s,i) => <img key={s.label} src={s.image} width={1600} height={1104} loading="lazy" alt="" className={`absolute inset-0 size-full object-cover transition-all duration-1000 ${active === i ? "scale-100 opacity-100" : "scale-105 opacity-0"}`} />)}
    <div className="absolute inset-0 bg-gradient-to-r from-background via-background/65 to-background/15"/>
    <div className="relative mx-auto flex min-h-[86svh] max-w-[1440px] flex-col justify-end px-5 py-16 lg:px-10 lg:py-24"><Eyebrow>LIGHT SCENARIOS</Eyebrow><h2 className="max-w-2xl text-4xl font-light md:text-6xl">Свет становится частью ужина</h2><div className="mt-10 flex max-w-4xl gap-6 overflow-x-auto border-b border-foreground/20 pb-4">{scenarios.map((s,i)=><button key={s.label} onClick={()=>setActive(i)} className={`shrink-0 pb-3 text-[10px] tracking-[.2em] transition-colors ${active===i ? "border-b border-primary text-primary" : "text-muted-foreground hover:text-foreground"}`}>{s.label}</button>)}</div><div className="mt-10 max-w-lg"><p className="text-2xl font-light">{item.title}</p><p className="mt-4 text-sm leading-7 text-foreground/70">{item.text}</p></div></div>
  </section>;
}

function WhySection() { return <section className="mx-auto max-w-[1440px] px-5 py-28 lg:px-10 lg:py-40"><Eyebrow>BEYOND DECOR</Eyebrow><div className="grid gap-16 lg:grid-cols-2"><h2 className="text-4xl font-light leading-tight md:text-6xl">Spotlight Dining создаёт общий фокус внимания.</h2><div><p className="max-w-xl text-lg font-light leading-8 text-muted-foreground">Гости не просто едят, а проживают момент вместе. Световой сценарий помогает начать разговор, выделить важный момент вечера и сделать визит запоминающимся.</p></div></div><div className="mt-20 grid gap-px bg-border md:grid-cols-3">{[["FOCUS","Свет направляет внимание на главное."],["EMOTION","Сценарий помогает создать нужное настроение."],["MEMORY","Момент становится частью воспоминания о ресторане."]].map(([title,text],i)=><div key={title} className="bg-background p-8 md:min-h-52"><span className="text-[10px] text-primary">0{i+1}</span><h3 className="mt-10 text-xs tracking-[.22em]">{title}</h3><p className="mt-4 text-sm leading-6 text-muted-foreground">{text}</p></div>)}</div></section>; }

function RestaurantBenefits() { return <section id="restaurants" className="border-y border-border bg-secondary/45"><div className="mx-auto max-w-[1440px] px-5 py-28 lg:px-10 lg:py-40"><Eyebrow>FOR RESTAURANTS</Eyebrow><h2 className="max-w-4xl text-4xl font-light leading-tight md:text-6xl">Новый клиентский опыт<br/>без перестройки ресторана.</h2><div className="mt-16 grid gap-12 lg:grid-cols-[1.3fr_.7fr]"><div className="grid gap-px bg-border md:grid-cols-3">{[["NO NEW MENU","Не требуется менять кухню или меню."],["NO NEW STAFF","Не требуется создавать отдельную команду."],["NO OPERATIONAL OVERHAUL","Spotlight Dining работает как дополнительный технологический слой."]].map(([title,text])=><div key={title} className="bg-secondary p-7"><h3 className="text-[10px] tracking-[.18em] text-primary">{title}</h3><p className="mt-8 text-sm leading-6 text-muted-foreground">{text}</p></div>)}</div><div className="flex flex-col items-center justify-center border border-border p-8 text-center"><p className="text-xs tracking-[.2em]">RESTAURANT</p><ArrowDown className="my-5 size-4 text-muted-foreground"/><p className="border border-primary px-6 py-4 text-xs tracking-[.2em] text-primary">SPOTLIGHT DINING</p><ArrowDown className="my-5 size-4 text-muted-foreground"/><p className="text-xs tracking-[.2em]">GUEST EXPERIENCE</p></div></div></div></section>; }

function ExperienceSection() { const labels=["Обычный ужин","Свет становится тише","Появляется луч","Блюдо входит в фокус","Гости реагируют","Момент остаётся"]; return <section className="relative min-h-[90svh] overflow-hidden"><img src={ceremonyImage} width={1600} height={1104} loading="lazy" alt="Церемониальная подача блюда в луче света" className="absolute inset-0 size-full object-cover"/><div className="absolute inset-0 bg-background/55"/><div className="relative mx-auto flex min-h-[90svh] max-w-[1440px] flex-col justify-between px-5 py-24 lg:px-10"><Eyebrow>THE EXPERIENCE</Eyebrow><div className="grid gap-4 self-end text-right">{labels.map((x,i)=><p key={x} className={`text-sm font-light ${i===3 ? "text-2xl text-primary md:text-4xl" : "text-foreground/55"}`}>{x}</p>)}</div><p className="max-w-3xl text-3xl font-light leading-tight md:text-5xl">Иногда достаточно одного луча света, чтобы обычный ужин стал воспоминанием.</p></div></section>; }

function BookingForm() {
  const [sent,setSent]=useState(false);
  function submit(e:FormEvent){e.preventDefault();setSent(true);}
  const field="h-12 rounded-none border-x-0 border-t-0 border-border bg-transparent px-0 shadow-none focus-visible:ring-0 focus-visible:border-primary";
  return <section id="booking" className="mx-auto grid max-w-[1440px] gap-16 px-5 py-28 lg:grid-cols-[.75fr_1.25fr] lg:px-10 lg:py-40"><div><Eyebrow>PRIVATE CONCIERGE</Eyebrow><h2 className="text-4xl font-light leading-tight md:text-6xl">Забронируйте<br/>свой сценарий</h2><p className="mt-8 max-w-md text-sm leading-7 text-muted-foreground">Выберите дату, количество гостей и повод вечера. Мы подготовим световой сценарий, который сделает ваш визит особенным.</p></div>
    {sent ? <div className="flex min-h-96 flex-col items-center justify-center border border-border text-center"><span className="grid size-12 place-items-center border border-primary text-primary"><Check/></span><h3 className="mt-7 text-2xl font-light">Запрос принят</h3><p className="mt-3 text-sm text-muted-foreground">Консьерж свяжется с вами для подтверждения деталей.</p></div> : <form onSubmit={submit} className="grid gap-x-8 gap-y-7 md:grid-cols-2"><label className="text-[10px] tracking-[.16em] text-muted-foreground">ИМЯ<Input required name="name" placeholder="Как к вам обращаться" className={field}/></label><label className="text-[10px] tracking-[.16em] text-muted-foreground">ДАТА<Input required name="date" type="date" className={field}/></label><label className="text-[10px] tracking-[.16em] text-muted-foreground">ВРЕМЯ<Input required name="time" type="time" className={field}/></label><label className="text-[10px] tracking-[.16em] text-muted-foreground">КОЛИЧЕСТВО ГОСТЕЙ<Input required name="guests" type="number" min="1" placeholder="2" className={field}/></label><label className="text-[10px] tracking-[.16em] text-muted-foreground">ПОВОД ВЕЧЕРА<select required name="occasion" className={`${field} w-full text-sm text-foreground outline-none`}><option value="">Выберите повод</option>{occasions.map(x=><option key={x[0]} value={x[0]}>{x[0]}</option>)}</select></label><label className="text-[10px] tracking-[.16em] text-muted-foreground">СЦЕНАРИЙ СВЕТА<select required name="scenario" className={`${field} w-full text-sm text-foreground outline-none`}><option value="">Выберите сценарий</option>{scenarios.map(x=><option key={x.label} value={x.label}>{x.label}</option>)}</select></label><label className="text-[10px] tracking-[.16em] text-muted-foreground md:col-span-2">БЮДЖЕТ ВЕЧЕРА — ОПЦИОНАЛЬНО<Input name="budget" placeholder="AED" className={field}/></label><label className="text-[10px] tracking-[.16em] text-muted-foreground md:col-span-2">КОММЕНТАРИЙ ГОСТЯ<Textarea name="comment" placeholder="Расскажите, какой момент вы хотите создать" className="mt-2 min-h-28 rounded-none border-x-0 border-t-0 border-border bg-transparent px-0 shadow-none focus-visible:ring-0 focus-visible:border-primary"/></label><Button type="submit" variant="spotlight" size="xl" className="mt-3 md:col-span-2">Забронировать сценарий <ArrowRight/></Button></form>}
  </section>;
}

function FinalCTA() { return <section className="relative min-h-[88svh] overflow-hidden"><img src={heroImage} width={1920} height={1280} loading="lazy" alt="Один стол в свете прожектора" className="absolute inset-0 size-full object-cover object-[68%_center]"/><div className="absolute inset-0 bg-background/68"/><div className="relative mx-auto flex min-h-[88svh] max-w-[1440px] flex-col items-start justify-center px-5 lg:px-10"><p className="text-3xl font-light text-foreground/65 md:text-5xl">Доставка может привезти еду.</p><div className="my-12 h-px w-24 bg-primary"/><h2 className="max-w-4xl text-5xl font-light leading-[1.05] md:text-8xl">Но она не может привезти момент.</h2><p className="mt-12 text-xs tracking-[.26em]">SPOTLIGHT <span className="text-primary">DINING</span></p><Button variant="spotlight" size="xl" className="mt-8" onClick={()=>scrollTo("booking")}>Создать свой момент <ArrowRight/></Button></div></section>; }

function Footer() { return <footer className="border-t border-border px-5 py-8 lg:px-10"><div className="mx-auto flex max-w-[1440px] flex-col gap-4 text-[10px] tracking-[.16em] text-muted-foreground sm:flex-row sm:justify-between"><p>SPOTLIGHT DINING</p><p>HOSPITALITY EXPERIENCE TECHNOLOGY</p><p>© 2026</p></div></footer>; }