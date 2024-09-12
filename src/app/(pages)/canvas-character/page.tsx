import Canvas from "@/app/components/CanvasCharacter";
import Header from "@/app/components/Header";
import { PageContainer, Column } from "@/app/styles/styles";

export default function Page() {
  return (
    <PageContainer>
      <Header text="Canvas Character" />
      <Column>
        <Canvas />
      </Column>
    </PageContainer>
  );
}
