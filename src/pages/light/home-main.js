import { Helmet } from 'react-helmet';
import Lines from '../../components/light/common/Lines';
import ProgressScroll from '../../components/light/common/ProgressScroll';
import Cursor from '../../components/light/common/cusor';
import LoadingScreen from '../../components/light/common/loader';
import Blog from '../../components/light/home-main/Blog';
import Clients from '../../components/light/home-main/Clients';
import Footer from '../../components/light/home-main/Footer';
import Header from '../../components/light/home-main/Header';
import Intro from '../../components/light/home-main/Intro';
import Marquee from '../../components/light/home-main/Marquee';
import Navbar from '../../components/light/home-main/Navbar';
import Portfolio from '../../components/light/home-main/Portfolio';
import Services from '../../components/light/home-main/Services';
import Services2 from '../../components/light/home-main/Services2';
import Team from '../../components/light/home-main/Team';
import Testimonials from '../../components/light/home-main/Testimonials';

export default function LHomeMain() {
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
        <Navbar />
        <div id="smooth-wrapper">
          <div id="smooth-content">
            <main className="main-bg o-hidden">
              <Header />
              <Intro />
              <Services />
              <Services2 />
              <Marquee />
              <Portfolio />
              <Testimonials />
              <Team />
              <Blog />
              <Clients />
            </main>
            <Footer />
          </div>
        </div>
      </body>
    </>
  );
}
