import React from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import App from "./app";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<App />);
