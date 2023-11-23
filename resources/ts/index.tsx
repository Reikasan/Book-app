import { createRoot } from "react-dom/client";
import { ThemeProvider } from "@mui/material/styles";
import App from "./App";
import theme from "./theme";
import "../sass/app.scss";

const container = document.getElementById("app");
const root = createRoot(container!);

root.render(
    <ThemeProvider theme={theme}>
        <App />
    </ThemeProvider>
);