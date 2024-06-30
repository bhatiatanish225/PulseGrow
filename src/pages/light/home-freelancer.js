import { Helmet } from 'react-helmet';
import Lines from '../../components/light/common/Lines';
import ProgressScroll from '../../components/light/common/ProgressScroll';
import Cursor from '../../components/light/common/cusor';
import LoadingScreen from '../../components/light/common/loader';
import About from '../../components/light/home-freelancer/About';
import Blog from '../../components/light/home-freelancer/Blog';
import Contact from '../../components/light/home-freelancer/Contact';
import Footer from '../../components/light/home-freelancer/Footer';
import Header from '../../components/light/home-freelancer/Header';
import Navbar from '../../components/light/home-freelancer/Navbar';
import Portfolio from '../../components/light/home-freelancer/Portfolio';
import Services from '../../components/light/home-freelancer/Services';
import Skills from '../../components/light/home-freelancer/Skills';
import Testimonials from '../../components/light/home-freelancer/Testimonials';

export default function LHomeFreelancer() {
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
              <Skills />
              <Portfolio />
              <Testimonials />
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
