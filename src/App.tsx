import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";
import TriviaGame from "./pages/Trivia";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TriviaGame/>
    </QueryClientProvider>
  );
}

export default App;
