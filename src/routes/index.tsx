import { MessageForm } from "@/components/MessageForm";
import { Link } from "@tanstack/react-router";
import { createFileRoute } from "@tanstack/react-router";
import { useUser } from "@clerk/clerk-react";
import { SignedOut } from "@clerk/clerk-react";

export const Route = createFileRoute("/")({
  component: HomeComponent,
});

function HomeComponent() {
  const { isSignedIn, user } = useUser();
  return (
    <div className="flex flex-col max-w-screen-lg m-auto">
      <h1 className="text-slate-800 text-5xl font-bold my-5">
        Discord message sending test
      </h1>
      {isSignedIn ? (
        <>
          <p> Hi, {user!.fullName}!</p>
          <MessageForm />
        </>
      ) : (
        <span>
          <SignedOut>
            <Link
              to="/sign-in"
              className="text-red-500 cursor-pointer hover:underline"
            >
              Please sign in.
            </Link>
          </SignedOut>
        </span>
      )}
    </div>
  );
}
