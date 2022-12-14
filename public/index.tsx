import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import {OuroborosGold} from "./spells/ouroboros.gold"
import reportWebVitals from "./reportWebVitals"
import {Paint} from "./spells/implements/mandalas/Paint"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(
  <React.StrictMode>
    <OuroborosGold />
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
