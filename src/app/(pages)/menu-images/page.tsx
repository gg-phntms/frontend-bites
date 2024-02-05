import Header from "@/app/components/Header";
import ImageHoverText from "@/app/components/ImageHoverText";
import { PageContainer, Column } from "@/app/styles/styles";
import { TextContainer, Dot, Paragraph } from "./styles";

export default function Page() {
  return (
    <PageContainer>
      <Header text="Menu image hover" />
      <Column wide>
        <TextContainer>
          <ImageHoverText
            text="London"
            href="https://unsplash.com/s/photos/london?orientation=portrait"
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
            href="https://unsplash.com/s/photos/paris?orientation=portrait"
            target="_blank"
            images={[
              "/images/cities/paris-1.jpg",
              "/images/cities/paris-2.jpg",
              "/images/cities/paris-3.jpg",
              "/images/cities/paris-4.jpg",
              "/images/cities/paris-5.jpg",
            ]}
          />
          <Dot />
          <ImageHoverText
            text="Tokyo"
            href="https://unsplash.com/s/photos/tokyo?orientation=portrait"
            target="_blank"
            images={[
              "/images/cities/tokyo-1.jpg",
              "/images/cities/tokyo-2.jpg",
              "/images/cities/tokyo-3.jpg",
              "/images/cities/tokyo-4.jpg",
              "/images/cities/tokyo-5.jpg",
            ]}
          />
          <Dot />
          <ImageHoverText
            text="New York"
            href="https://unsplash.com/s/photos/new-york?orientation=portrait"
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
            text="Rome"
            href="https://unsplash.com/s/photos/rome?orientation=portrait"
            target="_blank"
            images={[
              "/images/cities/paris-1.jpg",
              "/images/cities/paris-2.jpg",
              "/images/cities/paris-3.jpg",
              "/images/cities/paris-4.jpg",
              "/images/cities/paris-5.jpg",
            ]}
          />
          <Dot />
          <ImageHoverText
            text="Sydney"
            href="https://unsplash.com/s/photos/sydney?orientation=portrait"
            target="_blank"
            images={[
              "/images/cities/tokyo-1.jpg",
              "/images/cities/tokyo-2.jpg",
              "/images/cities/tokyo-3.jpg",
              "/images/cities/tokyo-4.jpg",
              "/images/cities/tokyo-5.jpg",
            ]}
          />
        </TextContainer>
        <Paragraph>
          Source:{" "}
          <a href="https://claytoncotterell.com/overview/" target="_blank">
            https://claytoncotterell.com/overview/
          </a>
        </Paragraph>
      </Column>
    </PageContainer>
  );
}
