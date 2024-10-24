import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import Homepage from "./pages/Homepage/homepage";

import Exercice1 from "./pages/learning/exercices/a1-debutant/1/1_1/exercice1";
import Exercice2 from "./pages/learning/exercices/a1-debutant/1/1_1/exercice2";
import Exercice3 from "./pages/learning/exercices/a1-debutant/1/1_1/exercice3";
import Exercice4 from "./pages/learning/exercices/a1-debutant/1/1_1/exercice4";
import Exercice5 from "./pages/learning/exercices/a1-debutant/1/1_1/exercice5";
import Exercice6 from "./pages/learning/exercices/a1-debutant/1/1_1/exercice6";

import Exercice1_1_2 from "./pages/learning/exercices/a1-debutant/1/1_2/exercice1";
import Exercice2_1_2 from "./pages/learning/exercices/a1-debutant/1/1_2/exercice2";
import Exercice3_1_2 from "./pages/learning/exercices/a1-debutant/1/1_2/exercice3";
import Exercice4_1_2 from "./pages/learning/exercices/a1-debutant/1/1_2/exercice4";
import Exercice5_1_2 from "./pages/learning/exercices/a1-debutant/1/1_2/exercice5";
import Exercice6_1_2 from "./pages/learning/exercices/a1-debutant/1/1_2/exercice6";
import Exercice7_1_2 from "./pages/learning/exercices/a1-debutant/1/1_2/exercice7";
import Exercice8_1_2 from "./pages/learning/exercices/a1-debutant/1/1_2/exercice8";
import Exercice9_1_2 from "./pages/learning/exercices/a1-debutant/1/1_2/exercice9";

import { Route, Routes, BrowserRouter, useLocation } from "react-router-dom";
import PremiereLecon from "./pages/PremiereLecon/premiere-lecon";

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
          path="/learning/exercices/premiere-lessons/1/1_1/exercice1"
          element={<Exercice1 />}
        />
        <Route
          path="/learning/exercices/premiere-lessons/1/1_1/exercice2"
          element={<Exercice2 />}
        />

        <Route
          path="/learning/exercices/premiere-lessons/1/1_1/exercice3"
          element={<Exercice3 />}
        />

        <Route
          path="/learning/exercices/premiere-lessons/1/1_1/exercice4"
          element={<Exercice4 />}
        />
        <Route
          path="/learning/exercices/premiere-lessons/1/1_1/exercice5"
          element={<Exercice5 />}
        />
        <Route
          path="/learning/exercices/premiere-lessons/1/1_1/exercice6"
          element={<Exercice6 />}
        />
        <Route
          path="/learning/exercices/premiere-lessons/1/1_1/exercice6"
          element={<Exercice6 />}
        />

        <Route
          path="/learning/exercices/premiere-lessons/1/1_2/exercice1"
          element={<Exercice1_1_2 />}
        />
        <Route
          path="/learning/exercices/premiere-lessons/1/1_2/exercice2"
          element={<Exercice2_1_2 />}
        />
        <Route
          path="/learning/exercices/premiere-lessons/1/1_2/exercice3"
          element={<Exercice3_1_2 />}
        />
        <Route
          path="/learning/exercices/premiere-lessons/1/1_2/exercice4"
          element={<Exercice4_1_2 />}
        />
        <Route
          path="/learning/exercices/premiere-lessons/1/1_2/exercice5"
          element={<Exercice5_1_2 />}
        />
        <Route
          path="/learning/exercices/premiere-lessons/1/1_2/exercice6"
          element={<Exercice6_1_2 />}
        />
        <Route
          path="/learning/exercices/premiere-lessons/1/1_2/exercice7"
          element={<Exercice7_1_2 />}
        />
        <Route
          path="/learning/exercices/premiere-lessons/1/1_2/exercice8"
          element={<Exercice8_1_2 />}
        />
        <Route
          path="/learning/exercices/premiere-lessons/1/1_2/exercice9"
          element={<Exercice9_1_2 />}
        />
      </Routes>

      {!isExercice && <Footer />}
    </div>
  );
}

export default App;
