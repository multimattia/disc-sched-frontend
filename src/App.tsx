import "./App.css";
// import { ExampleFetch } from "./components/ExampleFetch";
import { MessageForm } from "./components/MessageForm";
import { QueryClient, QueryClientProvider } from "react-query";

import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <div className="flex flex-col max-w-screen-lg ">
          <h1 className="text-red-800 text-5xl font-bold mb-2">
            Discord message sending test
          </h1>
          <MessageForm />
          {/* <ExampleFetch /> */}
        </div>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
}

export default App;
