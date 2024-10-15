import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Provider } from "./lib/context/Provider.tsx";
import { KindeProvider } from "@kinde-oss/kinde-auth-react";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <KindeProvider
      clientId="93f82a9d093f48548afd64bee2b85b39"
      domain="https://angiealvess.kinde.com"
      redirectUri="http://localhost:5173"
      logoutUri="http://localhost:5173"
    >
      <Provider>
        <App />
      </Provider>
    </KindeProvider>
  </StrictMode>
);
