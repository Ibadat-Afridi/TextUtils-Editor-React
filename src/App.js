import "./App.css";
import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { useState } from "react";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  let [Mode, setMode] = useState("light");
  let [alert, setalert] = useState(true);
  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 1500);
  };
  let toggleMode = () => {
    if (Mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("dark mode has been enable", "primary");
      document.title = "Text-Util -- Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enable", "success");
      document.title = "Text-Util -- Light Mode";
    }
  };
  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={Mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3 ">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <TextForm
                  heading="Word Counter, Character Counter, Remove Extra Spaces"
                  title="Text Here"
                  mode={Mode}
                  showAlert={showAlert}
                />
              }
            />
            <Route exact path="/about" element={<About mode={Mode} />} />
            {/* <Route path="/*" element=<NoPage/> /> */}
          </Routes>
        </div>
      </Router>
    </>
  );
}
export default App;
