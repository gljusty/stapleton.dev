import { useEffect } from "react";
import { useGithub } from "../../hooks/use-github";
import Card from "./card";

export default function Demos() {
  const [data, getData] = useGithub();

  useEffect(() => {
    getData();
  }, []);

  return null /* data && data.repos.map((d, i) => <div key={i}>{d.owner.id}</div>) */;
}
