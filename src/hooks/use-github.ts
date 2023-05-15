import { useState } from "react";

export const useGithub = (): [any, () => void] => {
  const [data, setData] = useState();

  const fetchData = () => {
    fetch("https://api.github.com/users/gljusty", {
      headers: {
        Accept: "application/vnd.github.v3+json",
      },
    })
      .then((res) => res.json())
      .then((json) => setData(json));
  };

  return [data, fetchData];
};
