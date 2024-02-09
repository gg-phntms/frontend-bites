import Image from "next/image";
import { PageContainer, Column } from "@/app/styles/styles";
import { ComponentList } from "./styles";
import Header from "./components/Header";

export default function Home() {
  return (
    <PageContainer>
      <Header text="George Gloyens" />
      <Column>
        <p>
          A library of assorted frontend components, made for practice and
          production. Best viewed on desktop.
        </p>
        <ComponentList>
          <li>
            <a href="/menu-images">Menu image hover</a>
          </li>
          <li>
            <a href="/3d-card">3D card</a>
          </li>
          <li>
            <a href="/image-trail">Image trail</a>
          </li>
          <li>
            <a href="/loader">Loader</a>
          </li>
          <li>
            <a href="/line-draw">Line draw</a>
          </li>
          <li>
            <a href="/3d-blob">3D blob</a>
          </li>
        </ComponentList>
      </Column>
    </PageContainer>
  );
}
