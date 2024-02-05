
import Header from '@/app/components/Header'
import ImageHoverText from '@/app/components/ImageHoverText';
import { PageContainer, Column } from '@/app/styles/styles'

export default function Page() {
  return (
    <PageContainer>
      <Header text="Menu image hover"/>
      <Column>
        <ImageHoverText text="Sup" />
      </Column>
    </PageContainer>
  );
}
