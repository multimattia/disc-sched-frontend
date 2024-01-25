import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  component: AboutComponent,
});

function AboutComponent() {
  return (
    <>
      <div className="flex flex-col max-w-screen-md m-auto">
        <h1 className="text-slate-800 text-5xl font-bold my-5">About</h1>
      </div>
    </>
  );
}
