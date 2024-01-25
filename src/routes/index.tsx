import { MessageForm } from "@/components/MessageForm";
import { createFileRoute, redirect } from "@tanstack/react-router";
import { useUser } from "@clerk/clerk-react";

export const Route = createFileRoute("/")({
  beforeLoad: ({ context }) => {
    if (!context.auth.isSignedIn) {
      throw redirect({
        to: "/sign-in",
      });
    }
  },
  component: HomeComponent,
});

function HomeComponent() {
  const { user, isLoaded } = useUser();
  return (
    <div className="flex flex-col max-w-screen-lg m-auto">
      <h1 className="text-slate-800 text-5xl font-bold my-5">
        Discord message sending test
      </h1>
      {isLoaded ? <p> Hi, {user!.fullName}!</p> : ""}
      <MessageForm />
    </div>
  );
}
