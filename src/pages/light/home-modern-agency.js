import { Helmet } from 'react-helmet';
import Lines from '../../components/light/common/Lines';
import ProgressScroll from '../../components/light/common/ProgressScroll';
import Cursor from '../../components/light/common/cusor';
import LoadingScreen from '../../components/light/common/loader';
import Navbar from '../../components/light/creative-agency/Navbar';
import About from '../../components/light/modern-agency/About';
import Blog from '../../components/light/modern-agency/Blog';
import Brands from '../../components/light/modern-agency/Brands';
import Footer from '../../components/light/modern-agency/Footer';
import Header from '../../components/light/modern-agency/Header';
import Marquee from '../../components/light/modern-agency/Marquee';
import Number from '../../components/light/modern-agency/Number';
import Portfolio from '../../components/light/modern-agency/Portfolio';
import Services from '../../components/light/modern-agency/Services';
import ServicesTab from '../../components/light/modern-agency/ServicesTab';
import Team from '../../components/light/modern-agency/Team';
import Testimonials from '../../components/light/modern-agency/Testimonials';

export default function LHomeModernAgency() {
  return (
    <>
      <Helmet>
        <title>infolio</title>
        <link rel="icon" href="/light/imgs/favicon.ico" />
        <link rel="shortcut icon" href="/light/imgs/favicon.ico" />
        <link
          rel="stylesheet"
          type="text/css"
          href="/light/assets/css/plugins.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="/light/assets/css/style.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="/light/assets/css/satoshi.css"
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
        <script src="/light/assets/js/scripts.js"></script>
        <script src="/light/assets/js/smoother-script.js"></script>
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
