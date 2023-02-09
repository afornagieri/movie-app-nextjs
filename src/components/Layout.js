import Navbar from "./Navbar";
import Meta from "./Meta";
import { Footer } from "./Footer";

export default function Layout({ children }) {
  return(
    <>
    <Meta/>
    <Navbar />
    <main>
      {children}
    </main>
    <Footer />
    </>
  );
};