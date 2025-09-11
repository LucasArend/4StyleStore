import { Routes, Route, BrowserRouter } from "react-router-dom";
import ModulesStore from "./02-css-modules/ModulesStore";
import TailwindStore from "./03-tailwind/TailwindStore";
import GlobalStore from "./01-css-global/GlobalStore";
import StyledStore from "./04-styled-components/StyledStore";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/global" element={<GlobalStore />} />
        <Route path="/modules" element={<ModulesStore />} />
        <Route path="/tailwind" element={<TailwindStore />} />
        <Route path="/styled" element={<StyledStore />} />
        <Route path="*" element={<p>Escolha uma rota: /global, /modules, /tailwind ou /styled</p>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;