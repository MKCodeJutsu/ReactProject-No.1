import Header from "../comp/header";
import Footer from "../comp/footer";
import MainContent from "../comp/MainContent";
import { Helmet, HelmetProvider } from "react-helmet-async";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="Home Page" />
      </Helmet>
      <Header />
      <MainContent pageName="Home" designer="Muhammed Kamel" date="2024" />
      <Footer />
    </>
  );
};

export default Home;
