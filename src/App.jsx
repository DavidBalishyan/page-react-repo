import React, { useEffect } from "react";
import Layout from "./components/Layout";
import Routes from "./routes/Routes";

  document.title = "3D page in React js"

const App = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollProgress =
        document.documentElement.scrollTop /
        (document.documentElement.scrollHeight -
          document.documentElement.clientHeight);
      document.documentElement.style.setProperty(
        "--scroll-progress",
        scrollProgress
      );
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="scroll-progress"></div>
     <Layout/>
     <Routes/>
    </>
  );
};

export default App;
