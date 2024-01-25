import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  component: () => AboutComponent,
});

function AboutComponent() {
  return (
    <>
      <span>Hello, about!</span>
    </>
  );
}
