import "./App.css";
import { Button } from "@/components/ui/button";
import { ExampleFetch } from "./ExampleFetch";
import { QueryClient, QueryClientProvider } from "react-query";

import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <div className="flex flex-col max-w-screen-lg ">
          <h1 className="text-red-800 text-5xl font-bold mb-2">
            Hello, world!
          </h1>
          <Button variant={"outline"}>Hello from shadcn!</Button>
          <ExampleFetch />
        </div>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
}

export default App;
