import { createFileRoute } from "@tanstack/react-router";
import { SpotlightDining } from "@/components/spotlight-dining";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Spotlight Dining — обычный ужин становится событием" },
      { name: "description", content: "Персональные световые сценарии для ресторанов без изменения меню, кухни и персонала." },
      { property: "og:title", content: "Spotlight Dining — обычный ужин становится событием" },
      { property: "og:description", content: "Новый уровень ресторанного опыта, созданный светом." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

// IMPORTANT: Replace this placeholder. See ./README.md for routing conventions.
function Index() {
  return <SpotlightDining />;
}
