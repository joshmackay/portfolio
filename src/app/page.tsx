'use client'
import styles from "./page.module.css";
import Header from "@/sections/Header/Header";
import Hero from "@/sections/Hero/Hero";
import SocialsWidget from "@/components/SocialsWidget/SocialsWidget";
import EmailWidget from "@/components/SocialsWidget/EmailWidget";
import About from "@/sections/About/About";
import Work from "@/sections/Work/Work";
import Experience from "@/sections/Experience/Experience";
import OtherProjects from "@/sections/OtherProjects/OtherProjects";
import Contact from "@/sections/Contact/Contact";
import Footer from "@/sections/Footer/Footer";
import { MenuOpenContext } from "@/context/MenuOpenProvider";
import React from "react";
import LoadingScreen from "@/sections/LoadingScreen/LoadingScreen";
import
  {
    CSSTransition,
    TransitionGroup,
  } from 'react-transition-group';
  
export default function Home() {
  
  const [isLoading, setIsLoading] = React.useState(true);
  
  const context = React.useContext(MenuOpenContext);
  if (!context)
  {
    throw new Error("useContext(MenuOpenContext) must be used inside a MenuOpenProvider");
  }
  const { menuOpen } = context;
  
  return (
      <div className={`${styles.page} `}>
        {isLoading ? <LoadingScreen handleIsLoading={setIsLoading}  /> : 
        (
          <>
            <Header />
            <SocialsWidget  side={"left"} />
            <EmailWidget  side="right" />
            <main className={`${styles.main} `}>
              <div className={`${menuOpen ? styles.blur : undefined}`}>
                <Hero />
                <About />
                <Experience />
                <Work />
                <OtherProjects />
                <Contact />
                
              </div>
            </main>
            <Footer></Footer>
          </>
        )
        }
      </div>
  );
}
