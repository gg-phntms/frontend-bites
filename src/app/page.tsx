import { PageContainer, Column, ComponentList } from './styles'

export default function Home() {
  return (
    <PageContainer>
      <Column>
        <h1>Frontend Bites</h1>
        <p>A library of assorted frontend components, made by George Gloyens for practice and production.</p>
        <ComponentList>
          <a href="#"><li>Component 1</li></a>
          <a href="#"><li>Component 2</li></a>
          <a href="#"><li>Component 3</li></a>
        </ComponentList>
      </Column>
    </PageContainer>
  );
}
