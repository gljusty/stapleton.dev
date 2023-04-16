import { useEffect, useState } from "react";

export const useGithub = (): [any, () => void] => {
  const [data, setData] = useState();

  const fetchData = () => {
    fetch("https://api.github.com/users/gljusty/repos", {
      headers: {
        Accept: "application/vnd.github.v3+json",
      },
    })
      .then((res) => res.json())
      .then((json) => setData(json));
  };

  useEffect(() => {
    data && console.log(data);
  }, [data]);

  return [data, fetchData];
};
