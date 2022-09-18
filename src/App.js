import Banner from "./components/banner";
import Blog from "./components/blog";
import Brand from "./components/brand";
import Company from "./components/company";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Header from "./components/header";
import Map from "./components/map";
import Navbar from "./components/navbar";
import Service from "./components/service";
import Supplier from "./components/supplier";

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Banner />
      <Supplier />
      <Service />
      <Company />
      <Brand />
      <Blog />
      <Map />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
