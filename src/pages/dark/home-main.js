import { Helmet } from 'react-helmet';
import Lines from '../../components/dark/common/Lines';
import ProgressScroll from '../../components/dark/common/ProgressScroll';
import Cursor from '../../components/dark/common/cusor';
import LoadingScreen from '../../components/dark/common/loader';
import Blog from '../../components/dark/home-main/Blog';
import Clients from '../../components/dark/home-main/Clients';
import Footer from '../../components/dark/home-main/Footer';
import Header from '../../components/dark/home-main/Header';
import Intro from '../../components/dark/home-main/Intro';
import Marquee from '../../components/dark/home-main/Marquee';
import Navbar from '../../components/dark/home-main/Navbar';
import Portfolio from '../../components/dark/home-main/Portfolio';
import Services from '../../components/dark/home-main/Services';
import Services2 from '../../components/dark/home-main/Services2';
import Team from '../../components/dark/home-main/Team';
import Testimonials from '../../components/dark/home-main/Testimonials';

export default function HomeMain() {
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
