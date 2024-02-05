import { HeaderContainer, Divider } from "./styles";

interface Props {
  text: string;
}

const Header = ({ text }: Props ) => {
  return <HeaderContainer>
     <p><a href="/">Frontend Bites</a></p>
     <Divider />
     <p>{text}</p>
  </HeaderContainer>
}

export default Header;