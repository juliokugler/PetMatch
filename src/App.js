import styles from "./App.module.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { AuthProvider } from "./contexts/AuthContext";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/config";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

import BuscaPet from "./pages/BuscaPet/BuscaPet";
import PetDetails from "./pages/PetDetails/PetDetails"; // Import the PetDetails component

import Favorited from "./pages/Favorited/Favorited";
import Blog from "./pages/Blog/Blog";
import FAQ from "./pages/FAQ/FAQ";
import Donations from "./pages/Donations/Donations";
import About from "./pages/About/About";
import Announce from "./pages/Announce/Announce";

function App() {
  const [user, setUser] = useState(undefined);

  const loadingUser = user === undefined;

  const onAuthStateChangedCallback = (user) => {
    setUser(user);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, onAuthStateChangedCallback);

    return () => {
      unsubscribe();
    };
  }, []);

  if (loadingUser) {
    return <p>Carregando...</p>;
  }

  return (
    <div className="App">
      <AuthProvider value={{ user }}>
        <BrowserRouter>
          {" "}
          <Navbar />
          <div className={styles.container}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/busca-pet" element={<BuscaPet />} />
              <Route path="/busca-pet/:id" element={<PetDetails />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/pets-favoritados" element={<Favorited />} />
              <Route path="/FAQ" element={<FAQ />} />
              <Route path="/contribuir" element={<Donations />} />
              <Route path="/anuncie" element={<Announce />} />
              <Route path="/sobre" element={<About />} />
            </Routes>
            <div className={user ? styles.userFooter : ""}>
              <Footer />
            </div>
          </div>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
