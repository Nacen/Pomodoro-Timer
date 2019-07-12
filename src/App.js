import React from "react";
import "./App.css";
import Container from "./components/StyledComponents/Container";
import Header from "./components/StyledComponents/Header";
import Timer from "./components/Timer/Timer";
import Footer from "./components/StyledComponents/Footer";

function App() {
  return (
    <Container>
      <Header />
      <Timer />
      <Footer />
    </Container>
  );
}

export default App;
