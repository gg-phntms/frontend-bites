import Image from 'next/image';
import { PageContainer, Column } from '@/app/styles/styles'
import { ComponentList } from './styles'

export default function Home() {
  return (
    <PageContainer>
      <Column>
        <h1>Frontend Bites <Image src="/taco.png" alt="Taco" height="48" width="48" style={{marginBottom: "-8px"}} /></h1>
        <p>A library of assorted frontend components, made by George Gloyens for practice and for production.</p>
        <ComponentList>
          <li><a href="/menu-images">Menu image hover</a></li>
          <li><a href="#">Component 2</a></li>
          <li><a href="#">Component 3</a></li>
        </ComponentList>
      </Column>
    </PageContainer>
  );
}
