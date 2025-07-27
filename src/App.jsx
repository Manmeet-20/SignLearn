import { Route, Routes } from "react-router-dom";
import {
  Navbar,
  Footer,
  Home,
  Detect,
  LearnFingerspelling,
} from "./components";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";


const Layout = ({ children }) => (
  <>
    <Navbar />
    {children}
    <Footer />
  </>
);

function App() {
  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-white">
      <Routes>
        <Route
          path="/"
          element={
            <Layout >
              <Home />
            </Layout>
          }
        />
        <Route
          path="/detect"
          element={
            <Layout>
              <Detect />
            </Layout>
          }
        />
        <Route
            path="/fingerspelling"
            element={
                <Layout>
                <LearnFingerspelling />
                </Layout>
            }
        />

      </Routes>

    </div>
  );
}

export default App;
