import Header from "@/app/components/Header";
import Tickets from "@/app/components/Tickets";
import { PageContainer, Column } from "@/app/styles/styles";

export default function Page() {
  return (
    <PageContainer>
      <Header text="Tickets" />
      <Column>
        <Tickets />
      </Column>
    </PageContainer>
  );
}
