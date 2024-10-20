import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import Homepage from "./pages/Homepage/homepage";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import PremiereLecon from "./pages/PremiereLecon/premiere-lecon";

function App() {
  return (
    <BrowserRouter>
      <div className="main-content">
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="premiere-lecon" element={<PremiereLecon />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
