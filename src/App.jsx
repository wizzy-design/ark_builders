// import { useState } from 'react'
import Landing from "./pages/landingPage";
import GlobalStyles from "./components/GlobalStyles";
import { Route, Routes } from "react-router-dom";
import AuthPage from "./pages/AuthPage";
import Login2 from "../src/components/Login2.jsx";
import Login3 from "../src/components/Login3.jsx";

const App = () => {
  return (
    <>
      <GlobalStyles />

      {/* Router */}
      <Routes>
        <Route path="/">
          <Route path="ark_builders" element={<Landing />} />
        </Route>
        <Route path="/login" element={<AuthPage />} />
        <Route path="/login2" element={<Login2 />} />
        <Route path="/login3" element={<Login3 />} />
      </Routes>
    </>
  );
};

export default App;
