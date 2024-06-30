import { Helmet } from 'react-helmet';
import Lines from '../../components/dark/common/Lines';
import ProgressScroll from '../../components/dark/common/ProgressScroll';
import Cursor from '../../components/dark/common/cusor';
import LoadingScreen from '../../components/dark/common/loader';
import Services from '../../components/dark/modern-startup/Services';
import Header from '../../components/dark/modern-startup/Header';
import Navbar from '../../components/dark/modern-startup/Navbar';
import About from '../../components/dark/modern-startup/About';
import Marquee from '../../components/dark/modern-startup/Marquee';
import Portfolio from '../../components/dark/modern-startup/Portfolio';
import ImageScale from '../../components/dark/modern-startup/ImageScale';
import Skills from '../../components/dark/modern-startup/Skills';
import Testimonials from '../../components/dark/modern-startup/Testimonials';
import Clients from '../../components/dark/modern-startup/Clients';
import Blog from '../../components/dark/modern-startup/Blog';
import Contact from '../../components/dark/modern-startup/Contact';
import Footer from '../../components/dark/modern-startup/Footer';

export default function HomeStartupOnePage() {
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
