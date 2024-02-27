import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import routes from "./components/pages/index";

function App() {
  return (
    <BrowserRouter>
      <a
        href="https://api.whatsapp.com/send?phone=381637883420"
        className="float"
        target="_blank"
      >
        <i className="fa-brands fa-whatsapp my-float"></i>
       
      </a>
      {routes.map((data, idx) => (
        <Route
          exact
          path={data.path}
          component={data.component}
          key={idx}
        ></Route>
      ))}
    </BrowserRouter>
  );
}

export default App;
