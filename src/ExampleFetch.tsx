import axios from "axios";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Button } from "@/components/ui/button";
import { useQuery } from "react-query";

export const ExampleFetch = () => {
  const { isLoading, error, data, isFetching } = useQuery("repoData", () =>
    axios
      .get("https://api.github.com/repos/tannerlinsley/react-query")
      .then((res) => res.data)
  );

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <HoverCard>
      <HoverCardTrigger>
        <Button variant={"link"}>React Query</Button>
      </HoverCardTrigger>
      <HoverCardContent>
        {isFetching ? "Updating..." : data.description}
        <strong>👀 {data.subscribers_count}</strong>{" "}
        <strong>✨ {data.stargazers_count}</strong>{" "}
        <strong>🍴 {data.forks_count}</strong>
      </HoverCardContent>
    </HoverCard>
  );
};
