import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Programs from "./components/Programs/Programs";
import Team from "./components/Team/Team";
import Footer from "./components/Footer/Footer";
// import Scrollup from "./components/Scrollup/Scrollup";

function App() {
    return (
        <>
            <Header />

            <main className="main">
                <Home />
                <About />
                <Programs />
                <Team />
                <Contact />
            </main>

            <Footer />
            {/* <Scrollup /> */}
        </>
    );
}

export default App;
