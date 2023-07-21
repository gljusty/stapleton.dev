import useScrollPosition from "../../hooks/use-scroll-position";

{
  /* <Footer
  height={80}
  fixed
  w={"40%"}
  sx={{
    display: "flex",
    margin: "50px auto",
    opacity: 0.5,
    padding: "1%",
    background: "linear-gradient(140deg, white, black)",
  }}
>
  <Button onClick={() => console.log("y")} />
</Footer> */
}

export function Footer() {
  const scrollPos = useScrollPosition();
  return <footer className="foot"></footer>;
}
