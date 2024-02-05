import { styled } from "@phntms/css-components";

import css from "./styles.module.scss";

export const ImageHoverTextContainer = styled("div", {
  css: css.ImageHoverTextContainer,
});

export const ImageContainer = styled("div", {
  css: css.ImageContainer,
  variants: {
    visible: {
      true: css.ImageContainerVisible,
    },
  },
});
