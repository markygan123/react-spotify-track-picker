import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./components/navbar";
import Body from "./components/body";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Body/>
      <Footer/>      
    </div>
  );
}
