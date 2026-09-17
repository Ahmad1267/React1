import { createRoot } from "react-dom/client";
import Home from "./components/common/home";
import Header from "./components/common/pages/Header";
import Footer from "./components/common/Footer";

const create = createRoot(document.getElementById("root"))
create.render(
    <>
    <Header/>
    <Home/>
    <Footer/>
</>
)
