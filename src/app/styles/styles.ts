import { styled } from "@phntms/css-components";

import css from "./globals.module.scss";

export const PageContainer = styled("main", {
  css: css.PageContainer,
  variants: {
    center: {
      true: css.CenterContainer,
    },
  },
});

export const Column = styled("div", {
  css: css.Column,
  variants: {
    wide: {
      true: css.ColumnWide,
    },
  },
});

export const Anchor = styled("a", {
  css: css.Anchor,
});

export const Button = styled("button", {
  css: css.Button,
});
