import { styled } from "@phntms/css-components";

import css from "./styles.module.scss";

export const TicketsContainer = styled("div", {
  css: css.TicketsContainer,
  variants: {
    debug: {
      true: css.TicketsContainer_Debug,
    },
  },
});

export const VerticalCarousel = styled("div", {
  css: css.VerticalCarousel,
});

export const Ticket = styled("div", {
  css: css.Ticket,
  variants: {
    active: {
      true: css.Ticket_Active,
    },
  },
});
