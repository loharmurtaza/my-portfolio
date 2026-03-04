import React, {useEffect, useState} from "react";
import Header from "../components/header/Header";
import Greeting from "./greeting/Greeting";
import Skills from "./skills/Skills";
import StackProgress from "./skillProgress/skillProgress"; // eslint-disable-line no-unused-vars
import WorkExperience from "./workExperience/WorkExperience";
import Projects from "./projects/Projects"; // eslint-disable-line no-unused-vars
import Publications from "./Publications/Publications";
import StartupProject from "./StartupProjects/StartupProject";
import Achievement from "./achievement/Achievement"; // eslint-disable-line no-unused-vars
import Blogs from "./blogs/Blogs"; // eslint-disable-line no-unused-vars
import Footer from "../components/footer/Footer"; // eslint-disable-line no-unused-vars
import Talks from "./talks/Talks"; // eslint-disable-line no-unused-vars
import Podcast from "./podcast/Podcast"; // eslint-disable-line no-unused-vars
import Education from "./education/Education";
import ScrollToTopButton from "./topbutton/Top";
import Twitter from "./twitter-embed/twitter"; // eslint-disable-line no-unused-vars
import Profile from "./profile/Profile";
import SplashScreen from "./splashScreen/SplashScreen";
import {splashScreen} from "../portfolio";
import {StyleProvider} from "../contexts/StyleContext";
import {useLocalStorage} from "../hooks/useLocalStorage";
import "./Main.scss";

const Main = () => {
  const darkPref = window.matchMedia("(prefers-color-scheme: dark)");
  const [isDark, setIsDark] = useLocalStorage("isDark", darkPref.matches);
  const [isShowingSplashAnimation, setIsShowingSplashAnimation] =
    useState(true);

  useEffect(() => {
    if (splashScreen.enabled) {
      const splashTimer = setTimeout(
        () => setIsShowingSplashAnimation(false),
        splashScreen.duration
      );
      return () => {
        clearTimeout(splashTimer);
      };
    }
  }, []);

  const changeTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={isDark ? "dark-mode" : null}>
      <StyleProvider value={{isDark: isDark, changeTheme: changeTheme}}>
        {isShowingSplashAnimation && splashScreen.enabled ? (
          <SplashScreen />
        ) : (
          <>
            <Header />
            <Greeting />
            <Skills />
            {/* <StackProgress /> */}
            <WorkExperience />
            <StartupProject />
            <Education />
            {/* <Projects /> */}
            <Publications />
            <Achievement />
            {/* <Blogs /> */}
            {/* <Talks /> */}
            {/* <Twitter /> */}
            {/* <Podcast /> */}
            <Profile />
            {/* <Footer /> */}
            <ScrollToTopButton />
          </>
        )}
      </StyleProvider>
    </div>
  );
};

export default Main;
