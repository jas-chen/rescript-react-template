// Generated by ReScript, PLEASE EDIT WITH CARE

import * as App from "./App.bs.js";
import * as React from "react";
import * as ReactDom from "react-dom";
import ReportWebVitals from "./reportWebVitals";

import './index.css'
;

function reportWebVitals(prim) {
  ReportWebVitals(prim);
  
}

var root = document.querySelector("#root");

if (!(root == null)) {
  ReactDom.render(React.createElement(App.make, {}), root);
}

ReportWebVitals(undefined);

export {
  reportWebVitals ,
  
}
/*  Not a pure module */
