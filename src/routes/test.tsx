import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/test")({
  component: TestComponent,
});

function TestComponent() {
  return (
    <>
      <div className="flex flex-col max-w-screen-lg m-auto">
        <h1 className="text-slate-800 text-5xl font-bold my-5">Test</h1>
      </div>
    </>
  );
}
