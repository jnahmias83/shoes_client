import HomeComponent from "../components/Home/Home.component"
import ProductsComponent from "../components/Products/Products.component"

const MainPage = () => {
  return (
    <>
      <section
        id="home">
       <HomeComponent />
      </section>

      <section
        id="products">
        <ProductsComponent />  
      </section>
    </>
  );
};

export default MainPage;
