import { Helmet } from 'react-helmet';
import Footer from '../../components/light/blog-list/Footer';
import Header from '../../components/light/about2/Header';
import Lines from '../../components/light/common/Lines';
import ProgressScroll from '../../components/light/common/ProgressScroll';
import Cursor from '../../components/light/common/cusor';
import LoadingScreen from '../../components/light/common/loader';
import Navbar from '../../components/light/creative-agency/Navbar';
import Intro from '../../components/light/about2/Intro';
import Marquee from '../../components/light/about2/Marquee';
import Testimonials from '../../components/light/about/Testimonials';
import Team from '../../components/light/about/Team';
import Blog from '../../components/light/about/Blog';
import Numbers from '../../components/light/about2/Numbers';
import About from '../../components/light/about2/About';
import Brands from '../../components/light/about2/Brands';
import Services from '../../components/light/about2/Services';

export default function LPageAbout2() {
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
              <Intro />
              <Numbers />
              <About />
              <Marquee />
              <Brands />
              <Services />
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
