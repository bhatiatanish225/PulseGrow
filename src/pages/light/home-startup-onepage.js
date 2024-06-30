import { Helmet } from 'react-helmet';
import Lines from '../../components/light/common/Lines';
import ProgressScroll from '../../components/light/common/ProgressScroll';
import Cursor from '../../components/light/common/cusor';
import LoadingScreen from '../../components/light/common/loader';
import Services from '../../components/light/modern-startup/Services';
import Header from '../../components/light/modern-startup/Header';
import Navbar from '../../components/light/modern-startup/Navbar';
import About from '../../components/light/modern-startup/About';
import Marquee from '../../components/light/modern-startup/Marquee';
import Portfolio from '../../components/light/modern-startup/Portfolio';
import ImageScale from '../../components/light/modern-startup/ImageScale';
import Skills from '../../components/light/modern-startup/Skills';
import Testimonials from '../../components/light/modern-startup/Testimonials';
import Clients from '../../components/light/modern-startup/Clients';
import Blog from '../../components/light/modern-startup/Blog';
import Contact from '../../components/light/modern-startup/Contact';
import Footer from '../../components/light/modern-startup/Footer';

export default function LHomeStartupOnePage() {
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
            <main className="main-bg o-hidden">
              <Header />
              <Services />
              <About />
              <Marquee />
              <Portfolio />
              <ImageScale />
              <Skills />
              <Testimonials />
              <Clients />
              <Blog />
              <Contact />
            </main>
            <Footer />
          </div>
        </div>
      </body>
    </>
  );
}
