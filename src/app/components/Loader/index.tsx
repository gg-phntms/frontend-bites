"use client";

import { LoaderContainer } from "./styles";
import { Button } from "@/app/styles/styles";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef, useState } from "react";

gsap.registerPlugin(useGSAP);

interface Props {
  text: string;
}

const Loader = ({ text }: Props) => {
  const container = useRef(null);
  const tl = useRef<gsap.core.Timeline>();

  const [count, setCount] = useState(0);

  useEffect(() => {
    const counter = setTimeout(() => {
      if (count !== 100) setCount((prevCount) => prevCount + 1);
    }, 20);

    return () => clearTimeout(counter);
  }, [count]);

  useGSAP(
    () => {
      const items = gsap.utils.toArray("p");
      const odd = gsap.utils.toArray("p:nth-child(odd)");
      const even = gsap.utils.toArray("p:nth-child(even)");
      const button = gsap.utils.toArray("button");
      tl.current = gsap
        .timeline({ delay: 0.5 })
        .addLabel("start")
        .fromTo(
          items,
          { opacity: 0 },
          { opacity: 1, duration: 1, stagger: 0.4 },
          "start"
        )
        .fromTo(
          odd,
          { y: 0 },
          { y: -40, stagger: 0.8, duration: 1, ease: "power2.out", delay: 0.4 },
          "start"
        )
        .fromTo(
          even,
          { y: 80 },
          { y: 40, stagger: 0.8, duration: 1, ease: "power2.out" },
          "start"
        )
        .addLabel("center")
        .to(
          odd,
          { y: 0, delay: 0.2, duration: 1, ease: "power2.out" },
          "center"
        )
        .to(
          even,
          { y: 0, delay: 0.2, duration: 1, ease: "power2.out" },
          "center"
        )
        .addLabel("hide")
        .to(container.current, { overflow: "hidden" }, "hide")
        .to(
          items,
          { y: 30, delay: 0.5, ease: "power2.in", stagger: 0.2 },
          "hide"
        )
        // Remember to delete the button if you're reusing this component
        .addLabel("showButton")
        .to(button, { display: "block" }, "showButton")
        .to(button, { opacity: 1, delay: 0.5 }, "showButton");
    },
    { scope: container }
  );

  const restart = () => {
    setCount(0);
    tl.current?.restart();
  };

  return (
    <LoaderContainer ref={container}>
      <Button
        onClick={() => {
          restart();
        }}
        style={{ opacity: 0, display: "none" }}
      >
        Restart
      </Button>
      <p>{String(count).padStart(3, "0")}</p>
      {text.split(" ").map((string, i) => (
        <p key={i}>{string}</p>
      ))}
    </LoaderContainer>
  );
};

export default Loader;
