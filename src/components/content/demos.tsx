import { useEffect } from "react";
import { useGithub } from "../../hooks/use-github";

export default function Demos() {
  const [data, getData] = useGithub();

  useEffect(() => {
    getData();
  }, []);

  return data ? <div style={{ fontSize: 96 }}>{Object.keys(data)}</div> : <></>;
}
