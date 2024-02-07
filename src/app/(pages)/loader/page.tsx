import Header from "@/app/components/Header";
import Loader from "@/app/components/Loader";
import { PageContainer, Column, Anchor } from "@/app/styles/styles";

export default function Page() {
  return (
    <PageContainer>
      <Header text="Loader" />
      <Column>
        <Loader />
        <p>
          Source:{" "}
          <Anchor href="https://root-food.com/" target="_blank">
            https://root-food.com/
          </Anchor>
        </p>
      </Column>
    </PageContainer>
  );
}
