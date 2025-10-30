import Nav from "@/components/Nav/Nav";
import styles from "./page.module.css";
import Header from "@/sections/Header/Header";
import Hero from "@/sections/Hero/Hero";
import SocialsWidget from "@/components/SocialsWidget/SocialsWidget";
import EmailWidget from "@/components/SocialsWidget/EmailWidget";
import About from "@/sections/About/About";
import Work from "@/sections/Work/Work";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <SocialsWidget side={"left"} />
      <EmailWidget side="right" />
      <main className={styles.main}>
         <Hero />
         <About />
         <Work />
      </main>
      
      <footer></footer>
    </div>
  );
}
