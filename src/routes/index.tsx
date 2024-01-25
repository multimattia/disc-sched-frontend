import { MessageForm } from "@/components/MessageForm";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: HomeComponent,
});

function HomeComponent() {
  return (
    <div className="flex flex-col max-w-screen-md m-auto">
      <h1 className="text-slate-800 text-5xl font-bold my-5">
        Discord message sending test
      </h1>
      <MessageForm />
    </div>
  );
}
