import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import AuthCallback from "./pages/AuthCallback";
import { AuthenticateWithRedirectCallback } from "@clerk/clerk-react";

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<LandingPage />} path="/" />
        <Route path="/auth-callback" element={<AuthCallback />} />
        <Route
          path="/sso-callback"
          element={
            <AuthenticateWithRedirectCallback
              signUpForceRedirectUrl={"/auth-callback"}
            />
          }
        />
      </Routes>
    </>
  );
};

export default App;
