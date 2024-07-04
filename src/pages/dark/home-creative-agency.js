import { Helmet } from 'react-helmet';
import Lines from '../../components/dark/common/Lines';
import ProgressScroll from '../../components/dark/common/ProgressScroll';
import Cursor from '../../components/dark/common/cusor';
import LoadingScreen from '../../components/dark/common/loader';
import Blog from '../../components/dark/creative-agency/Blog';
import Brands from '../../components/dark/creative-agency/Brands';

import Header from '../../components/dark/creative-agency/Header';
import ImageScale from '../../components/dark/creative-agency/ImageScale';
import Marquee from '../../components/dark/creative-agency/Marquee';
import Navbar from '../../components/dark/creative-agency/Navbar';
import Numbers from '../../components/dark/creative-agency/Numbers';
import Portfolio from '../../components/dark/creative-agency/Portfolio';
import Services from '../../components/dark/creative-agency/Services';
import Skills from '../../components/dark/creative-agency/Skills';
import Testimonials from '../../components/dark/creative-agency/Testimonials';
import Price from '../../components/dark/creative-agency/Price';
import Contact from '../../components/dark/creative-agency/Contact';

export default function HomeCreativeAgency() {
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
            <main className="main-bg pt-80 o-hidden">
              <div id="home">
                <Header />
              </div>
              <div id="marquee">
                <Marquee />
              </div>
              <div id="services">
                <Services />
              </div>
              <div id="skills">
                <Skills />
              </div>
              <div id="numbers">
                <Numbers />
              </div>
              <div id="portfolio">
                <Portfolio />
              </div>
              <div id="clients">
                <Testimonials />
              </div>
              <div id="brands">
                <Brands />
              </div>
              <div id="imagescale">
                <ImageScale />
              </div>
              <div id="blog">
                <Blog />
              </div>
              <div id="price">
                <Price/>
              </div>
              <div id="contact">
                <Contact/>
              </div>
            </main>
            
          </div>
        </div>
      </body>
    </>
  );
}
