import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "@chakra-ui/react";
import { toaster } from "./components/ui/toaster";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ChakraProvider value={defaultSystem}>
        <App />
        <Toaster toaster={toaster}>
    {(toast) => (
      <div>
        <strong>{toast.title}</strong>
        <div>{toast.description}</div>
      </div>
    )}
  </Toaster>
      </ChakraProvider>
    </BrowserRouter>
  </StrictMode>
);
