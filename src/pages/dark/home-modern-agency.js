import { Helmet } from 'react-helmet';
import Lines from '../../components/dark/common/Lines';
import ProgressScroll from '../../components/dark/common/ProgressScroll';
import Cursor from '../../components/dark/common/cusor';
import LoadingScreen from '../../components/dark/common/loader';
import Navbar from '../../components/dark/creative-agency/Navbar';
import About from '../../components/dark/modern-agency/About';
import Blog from '../../components/dark/modern-agency/Blog';
import Brands from '../../components/dark/modern-agency/Brands';
import Footer from '../../components/dark/modern-agency/Footer';
import Header from '../../components/dark/modern-agency/Header';
import Marquee from '../../components/dark/modern-agency/Marquee';
import Number from '../../components/dark/modern-agency/Number';
import Portfolio from '../../components/dark/modern-agency/Portfolio';
import Services from '../../components/dark/modern-agency/Services';
import ServicesTab from '../../components/dark/modern-agency/ServicesTab';
import Team from '../../components/dark/modern-agency/Team';
import Testimonials from '../../components/dark/modern-agency/Testimonials';

export default function HomeModernAgency() {
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
            <main className="main-bg">
              <Header />
              <Services />
              <About />
              <Number />
              <Portfolio />
              <Marquee />
              <Brands />
              <ServicesTab />
              <Testimonials />
              <Team />
              <Blog />
            </main>
            <Footer />
          </div>
        </div>
      </body>
    </>
  );
}
