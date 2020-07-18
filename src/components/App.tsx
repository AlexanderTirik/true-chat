import React from "react";
import "./App.css";
import Chat from "./Chat";
import Header from "./Header"
import Footer from "./Footer"

function App() {
  return (
    <div className="App">
      <Header/>
      <Chat />
      <Footer/>
    </div>
  );
}

export default App;
