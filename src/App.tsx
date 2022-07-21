import { Container, Header } from "./components/layout";
import { ProductsGrid } from "./feature/productsGrid";
import { ResumeCard } from "./feature/resume";

function App() {
  return (
    <Container>
      <Header />
      <div className="grid grid-cols-1 md:grid-cols-layout gap-4 md:bg-red">
        <section className="w-full">
          <ProductsGrid />
        </section>
        <section className="md:relative fixed left-0 right-0 bottom-0">
          <ResumeCard />
        </section>
      </div>
    </Container>
  );
}

export default App;
