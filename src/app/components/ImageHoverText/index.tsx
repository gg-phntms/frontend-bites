import { ImageHoverTextContainer } from "./styles";

interface Props {
  text: string;
  images?: string[];
  duration?: number;
}

const ImageHoverText = ({ text }: Props ) => {
  return <ImageHoverTextContainer>
     <p>{text}</p>
  </ImageHoverTextContainer>
}

export default ImageHoverText;