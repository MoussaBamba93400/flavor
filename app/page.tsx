import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Philosophy from "./components/Philosophy";
import Menu from "./components/Menu";
import Gallery from "./components/Gallery";
import Reservation from "./components/Reservation";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Philosophy />
        <Menu />
        <Gallery />
        <Reservation />
      </main>
      <Footer />
    </>
  );
}
