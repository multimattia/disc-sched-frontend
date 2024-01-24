import "./App.css";
import { MessageForm } from "./components/MessageForm";
import { QueryClient, QueryClientProvider } from "react-query";

import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <div className="flex flex-col max-w-screen-md m-auto">
          <h1 className="text-slate-800 text-5xl font-bold my-5">
            Discord message sending test
          </h1>
          <MessageForm />
        </div>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
}

export default App;
