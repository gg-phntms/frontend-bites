import Header from "@/app/components/Header";
import ImageTrail from "@/app/components/ImageTrail";
import { PageContainer, Column, Anchor } from "@/app/styles/styles";

export default function Page() {
  return (
    <PageContainer>
      <Header text="Image trail" />
      <Column>
        <p>
          Source:{" "}
          <Anchor href="https://hopeisreal.co/home/" target="_blank">
            https://hopeisreal.co/home/
          </Anchor>
        </p>
      </Column>
      <ImageTrail
        images={[
          "/images/cities/london-1.jpg",
          "/images/cities/london-2.jpg",
          "/images/cities/london-3.jpg",
          "/images/cities/london-4.jpg",
          "/images/cities/london-5.jpg",
        ]}
      />
    </PageContainer>
  );
}
