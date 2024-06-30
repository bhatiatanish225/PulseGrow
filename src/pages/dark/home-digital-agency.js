import { Helmet } from 'react-helmet';
import Lines from '../../components/dark/common/Lines';
import ProgressScroll from '../../components/dark/common/ProgressScroll';
import Cursor from '../../components/dark/common/cusor';
import LoadingScreen from '../../components/dark/common/loader';
import Navbar from '../../components/dark/creative-agency/Navbar';
import Blog from '../../components/dark/digital-agency/Blog';
import Brands from '../../components/dark/digital-agency/Brands';
import Footer from '../../components/dark/digital-agency/Footer';
import Header from '../../components/dark/digital-agency/Header';
import Portfolio from '../../components/dark/digital-agency/Portfolio';
import Price from '../../components/dark/digital-agency/Price';
import Process from '../../components/dark/digital-agency/Process';
import Services from '../../components/dark/digital-agency/Services';
import Skills from '../../components/dark/digital-agency/Skills';
import Team from '../../components/dark/digital-agency/Team';
import Testimonials from '../../components/dark/digital-agency/Testimonials';

export default function HomeDigitalAgency() {
  return (
    <>
      <Helmet>
        <title>infolio</title>
        <link rel="icon" href="/dark/imgs/favicon.ico" />
        <link rel="shortcut icon" href="/dark/imgs/favicon.ico" />
        <link
          rel="stylesheet"
          type="text/css"
          href="/dark/assets/css/plugins.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="/dark/assets/css/style.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="/dark/assets/css/satoshi.css"
        />

        <link
          rel="stylesheet"
          type="text/css"
          href="https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900&display=swap"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght..200;300;400;500;600;700&display=swap"
        />
        <script src="/dark/assets/js/scripts.js"></script>
        <script src="/dark/assets/js/smoother-script.js"></script>
      </Helmet>
      <body>
        <LoadingScreen />
        <Cursor />
        <ProgressScroll />
        <Lines />
        <div id="smooth-wrapper">
          <Navbar />
          <div id="smooth-content">
            <main className="main-bg pt-80">
              <Header />
              <Brands />
              <Services />
              <Skills />
              <Portfolio />
              <Process />
              <Team />
              <Testimonials />
              <Price />
              <Blog />
            </main>
            <Footer />
          </div>
        </div>
      </body>
    </>
  );
}
