"use client";

import Header from "@/app/components/Header";
import LineDraw from "@/app/components/LineDraw";
import { PageContainer, Column, Button } from "@/app/styles/styles";
import { useRef, useState } from "react";

export default function Page() {
  const [drawKey, setDrawKey] = useState(0);
  const buttonRef = useRef<HTMLButtonElement>(null);

  setTimeout(() => {
    if (buttonRef.current) {
      buttonRef.current.style.opacity = "1";
    }
  }, 6000);

  const restart = () => {
    // Update the key to force a re-render of LineDraw component
    setDrawKey((prevKey) => prevKey + 1);
    if (buttonRef.current) {
      buttonRef.current.style.opacity = "0";
    }
  };

  return (
    <PageContainer>
      <Header text="Line draw" />
      <Column>
        <LineDraw key={drawKey} />
        <Button
          ref={buttonRef}
          onClick={() => restart()}
          style={{ margin: "auto", opacity: "0" }}
        >
          Restart
        </Button>
      </Column>
    </PageContainer>
  );
}
