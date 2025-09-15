import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Navbars
import NavbarGlobal from "./01-css-global/components/Navbar";
import NavbarModules from "./02-css-modules/components/Navbar";
import NavbarTailwind from "./03-tailwind/components/Navbar";
import NavbarStyled from "./04-styled-components/components/Navbar";
import TailwindStore from "./03-tailwind/TailwindStore";

// Páginas dummy
function Produtos({ estilo }) {
  return <h2 style={{ padding: "20px" }}>Página de Produtos - {estilo}</h2>;
}

function Promocao({ estilo }) {
  return <h2 style={{ padding: "20px" }}>Página de Promoção - {estilo}</h2>;
}


function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/global/*"
          element={
            <>
              <NavbarGlobal />
              <Routes>
                <Route path="produtos" element={<Produtos estilo="CSS Global" />} />
                <Route path="promocao" element={<Promocao estilo="CSS Global" />} />
              </Routes>
            </>
          }
        />
        <Route
          path="/modules/*"
          element={
            <>
              <NavbarModules />
              <Routes>
                <Route path="produtos" element={<Produtos estilo="CSS Modules" />} />
                <Route path="promocao" element={<Promocao estilo="CSS Modules" />} />
              </Routes>
            </>
          }
        />
        <Route
          path="/*"
          element={
            <>
              <TailwindStore />
              <Routes>
                <Route path="produtos" element={<Produtos estilo="TailwindCSS" />} />
                <Route path="promocao" element={<Promocao estilo="TailwindCSS" />} />
              </Routes>
            </>
          }
        />
        <Route
          path="/styled/*"
          element={
            <>
              <NavbarStyled />
              <Routes>
                <Route path="produtos" element={<Produtos estilo="Styled Components" />} />
                <Route path="promocao" element={<Promocao estilo="Styled Components" />} />
              </Routes>
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
