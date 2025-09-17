import { useEffect, useState } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";

import TailwindStore from "./03-tailwind/TailwindStore";
import ModulesStore from "./02-css-modules/ModulesStore";
import GlobalStore from "./01-css-global/GlobalStore";
import StyledStore from "./04-styled-components/StyledStore";

import AnimationScreen from "./global/AnimationScreen";
import SkeletonLoader from "./global/SkeletonLoader";

const messages = {
  "/": "Transformando site para TailwindCSS!",
  "/global": "Transformando site para CSS Global!",
  "/modules": "Transformando site para CSS Modules!",
  "/styled": "Transformando site para Styled Components!",
};

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  const [animationStage, setAnimationStage] = useState("idle"); 
  const [nextPath, setNextPath] = useState(null);
  const [message, setMessage] = useState("");
  const [showRoutes, setShowRoutes] = useState(true);

  const handleNavigation = (path) => {
    if (location.pathname === path) return;
    setMessage(messages[path] || "Carregando...");
    setNextPath(path);
    setAnimationStage("entering");
    setShowRoutes(false); 
  };


  useEffect(() => {
    if (animationStage === "entering") {
      const timeout = setTimeout(() => {
        navigate(nextPath);
        setAnimationStage("waiting");
      }, 600);
      return () => clearTimeout(timeout);
    }
  }, [animationStage, nextPath, navigate]);


  useEffect(() => {
    if (animationStage === "waiting") {
      const timeout = setTimeout(() => {
        setAnimationStage("exiting");
      }, 800);
      return () => clearTimeout(timeout);
    }
  }, [animationStage]);


  useEffect(() => {
    if (animationStage === "exiting") {
      const timeout = setTimeout(() => {
        setAnimationStage("idle");
        setNextPath(null);
        setShowRoutes(true); 
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [animationStage]);

  const animating = animationStage !== "idle";

  return (
    <>
      {animating && (
        <AnimationScreen
          message={message}
          animateOut={animationStage === "exiting"}
        />
      )}


      {showRoutes ? (
        <Routes location={location}>
          <Route path="/" element={<TailwindStore onNavigate={handleNavigation} />} />
          <Route path="/global" element={<GlobalStore onNavigate={handleNavigation} />} />
          <Route path="/modules" element={<ModulesStore onNavigate={handleNavigation} />} />
          <Route path="/styled" element={<StyledStore onNavigate={handleNavigation} />} />
        </Routes>
      ) : (
        <SkeletonLoader />
      )}
    </>
  );
}

export default App;
