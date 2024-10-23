import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import Homepage from "./pages/Homepage/homepage";
import Exercice1 from "./pages/learning/exercices/a1-debutant/1/exercice1";
import Exercice2 from "./pages/learning/exercices/a1-debutant/1/exercice2";
import Exercice3 from "./pages/learning/exercices/a1-debutant/1/exercice3";
import { Route, Routes, BrowserRouter, useLocation } from "react-router-dom";
import PremiereLecon from "./pages/PremiereLecon/premiere-lecon";
import Exercice4 from "./pages/learning/exercices/a1-debutant/1/exercice4";
import Exercice5 from "./pages/learning/exercices/a1-debutant/1/exercice5";
import Exercice6 from "./pages/learning/exercices/a1-debutant/1/exercice6";

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

function AppContent() {
  const location = useLocation();
  const isExercice = location.pathname.includes("/learning/exercices/");

  return (
    <div className="main-content">
      {!isExercice && <Header />}

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="premiere-lecon" element={<PremiereLecon />} />
        <Route
          path="/learning/exercices/premiere-lessons/1/exercice1"
          element={<Exercice1 />}
        />
        <Route
          path="/learning/exercices/premiere-lessons/1/exercice2"
          element={<Exercice2 />}
        />

        <Route
          path="/learning/exercices/premiere-lessons/1/exercice3"
          element={<Exercice3 />}
        />

        <Route
          path="/learning/exercices/premiere-lessons/1/exercice4"
          element={<Exercice4 />}
        />
        <Route
          path="/learning/exercices/premiere-lessons/1/exercice5"
          element={<Exercice5 />}
        />
        <Route
          path="/learning/exercices/premiere-lessons/1/exercice6"
          element={<Exercice6 />}
        />
      </Routes>

      {!isExercice && <Footer />}
    </div>
  );
}

export default App;
