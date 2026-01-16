import Header from "./Header";
import Footer from "./Footer";
import CategoryLanding from "./CategoryLanding";
import { Cart } from "./Cart";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <CategoryLanding />
      <main>
        <div className="">{children}</div>
        <Cart cart={[]}  />

      </main>
      <Footer />
    </>
  );
}
