import Header from "@/app/components/Header";
import Spline from '@splinetool/react-spline/next';
import { PageContainer, Column } from "@/app/styles/styles";

export default function Page() {
  return (
    <PageContainer>
      <Header text="Spline Test" />
      <Column>
        <p>Hosted on Spline&apos;s CDN:</p>
        <Spline scene="https://prod.spline.design/KFonZGtsoUXP-qx7/scene.splinecode" />
        <p>[TODO] Hosted locally:</p>
      </Column>
    </PageContainer>
  );
}
