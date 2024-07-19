import Header from "../comp/header";
import Footer from "../comp/footer";
import MainContent from "../comp/MainContent";
import { Helmet, HelmetProvider } from "react-helmet-async";
export default function JavaScript() {
  return (
    <>
      <Header />
      <Helmet>
        <title>JAVASCRIPT Page </title>
        <meta name="description" content="JAVASCRIPT Page" />
      </Helmet>
      <MainContent pageName="JavaScript" />
      <Footer />
    </>
  );
}
