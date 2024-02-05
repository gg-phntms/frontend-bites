import Header from "@/app/components/Header";
import ImageHoverText from "@/app/components/ImageHoverText";
import { PageContainer, Column } from "@/app/styles/styles";
import { TextContainer, Dot } from "./styles";

export default function Page() {
  return (
    <PageContainer>
      <Header text="Menu image hover" />
      <Column>
        <TextContainer>
          <ImageHoverText
            text="London"
            href="https://www.google.com"
            target="_blank"
            images={[
              "/images/cities/london-1.jpg",
              "/images/cities/london-2.jpg",
              "/images/cities/london-3.jpg",
              "/images/cities/london-4.jpg",
              "/images/cities/london-5.jpg",
            ]}
          />
          <Dot />
          <ImageHoverText
            text="Paris"
            images={["/images/cities/london-1.jpg"]}
          />
          <Dot />
          <ImageHoverText
            text="Tokyo"
            images={["/images/cities/london-1.jpg"]}
          />
        </TextContainer>
      </Column>
    </PageContainer>
  );
}
