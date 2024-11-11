import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import 'animate.css';
import { HeroesApp } from "./HeroesApp";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter
            future={{
                v7_startTransition: true,
            }}
        >
            <HeroesApp />
        </BrowserRouter>
    </StrictMode>
);
