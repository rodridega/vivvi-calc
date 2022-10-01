
import React from "react";
import { Component } from "react";
import "./App.css";
import { CalculadoraLayout } from "./components/Layout/CalculadoraLayout";



class App extends Component {
  render() {
    return (
      <div className="App p-4">
        
          <CalculadoraLayout />
        
      </div>
    );
  }
}

export default App;