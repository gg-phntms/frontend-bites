"use client";

import { WheelEvent, useState } from "react";
import { TicketsContainer, VerticalCarousel, Ticket } from "./styles";
import { Button } from "@/app/styles/styles";

const Tickets = () => {
  const [debug, setDebug] = useState(false);
  const [ticketCount, setTicketCount] = useState(3);
  const [activeTicket, setActiveTicket] = useState(0);

  const max = 10;
  const min = 3;

  const updateTicketCount = (increment: number) => {
    const newCount = ticketCount + increment;
    if (newCount <= max && newCount >= min) {
      setTicketCount(newCount);
      if (activeTicket >= newCount) {
        setActiveTicket(newCount - 1);
      }
    }
  };

  const updateActiveTicket = (increment: number) => {
    const newActive = activeTicket + increment;
    if (newActive < ticketCount && newActive >= 0) {
      setActiveTicket(newActive);
    }
  };

  const handleScroll = (event: WheelEvent) => {
    if (event.deltaY < 0) {
      updateActiveTicket(-1);
    } else if (event.deltaY > 0) {
      updateActiveTicket(1);
    }
  };

  return (
    <TicketsContainer debug={debug} onWheel={(e) => handleScroll(e)}>
      <div>
        <Button onClick={() => setDebug(!debug)}>Debug outlines</Button>

        <p>Ticket count: {ticketCount}</p>
        <Button onClick={() => updateTicketCount(1)}>+</Button>
        <Button onClick={() => updateTicketCount(-1)}>-</Button>

        <p>Active ticket: {activeTicket + 1}</p>
        <Button onClick={() => updateActiveTicket(1)}>+</Button>
        <Button onClick={() => updateActiveTicket(-1)}>-</Button>
      </div>

      <VerticalCarousel>
        {Array.from({ length: ticketCount }, (_, i) => (
          <Ticket
            key={i}
            active={activeTicket === i}
            onClick={() => setActiveTicket(i)}
            style={{
              rotate: `${((i * 37) % 5) - 2.5}deg`, // pseudo-random rotation
              top: `${(i - activeTicket) * 160}px`,
            }}
          >
            <p>Ticket #{(i + 1).toString().padStart(3, "0")}</p>
          </Ticket>
        ))}
      </VerticalCarousel>
    </TicketsContainer>
  );
};

export default Tickets;
