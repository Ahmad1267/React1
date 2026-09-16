import { createRoot } from "react-dom/client";
import "./index.css"

const root = createRoot(document.getElementById("root"))
root.render(
    <>
    <img src="React logo.png" alt="error" width="200px" />
    <h1>Fun Facts About React</h1>
    <ul>
        <li>First release 2013</li>
        <li>200K stars on Github</li>
        <li>Created by Jordan Walke</li>
        <li>Maintained by Meta</li>
        <li>Power thousands of enterprise app</li>
    </ul>
    </>
)