import Header from "../comp/header";
import Footer from "../comp/footer";
import MainContent from "../comp/MainContent";
import { Helmet, HelmetProvider } from "react-helmet-async";
export default function Html() {
  return (
    <>
      <Helmet>
        <title>HTML Page</title>
        <meta name="description" content="HTML Page" />
      </Helmet>
      <Header />
      <MainContent pageName="HTML" />
      <Footer />
    </>
  );
}
