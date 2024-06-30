import { Helmet } from 'react-helmet';
import Lines from '../../components/dark/common/Lines';
import ProgressScroll from '../../components/dark/common/ProgressScroll';
import Cursor from '../../components/dark/common/cusor';
import LoadingScreen from '../../components/dark/common/loader';
import About from '../../components/dark/creative-portfolio/About';
import Blog from '../../components/dark/creative-portfolio/Blog';
import Footer from '../../components/dark/creative-portfolio/Footer';
import Header from '../../components/dark/creative-portfolio/Header';
import Marquee from '../../components/dark/creative-portfolio/Marquee';
import Navbar from '../../components/dark/creative-portfolio/Navbar';
import Portfolio from '../../components/dark/creative-portfolio/Portfolio';
import Services from '../../components/dark/creative-portfolio/Services';
import Team from '../../components/dark/creative-portfolio/Team';
import Testimonials from '../../components/dark/creative-portfolio/Testimonials';

export default function HomeCreativePortfolio() {
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
      <body className="crev-portfolio">
        <LoadingScreen />
        <Cursor />
        <ProgressScroll />
        <Lines />
        <div id="smooth-wrapper">
          <Navbar />
          <div id="smooth-content">
            <main className="main-bg pt-15">
              <div className="sub-bg radius-30 o-hidden">
                <Header />
                <Portfolio />
              </div>
              <Services />
              <About />
              <Testimonials />
              <Team />
              <Marquee />
              <Blog />
              <Footer />
            </main>
          </div>
        </div>
      </body>
    </>
  );
}
