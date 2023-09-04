// import { useState } from 'react'
import Landing from "./pages/landingPage";
import GlobalStyles from "./components/GlobalStyles";
import { Route, Routes } from "react-router-dom";
import AuthPage from "./pages/AuthPage";

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
      </Routes>
    </>
  );
};

export default App;
