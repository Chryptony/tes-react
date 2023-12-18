import React from 'react';
import {  Link } from "react-router-dom";
const navbar= () =>{
  return (
    <div className="container-fluid header">
      <div className="container text-end ">
      <ul class="nav">
       <li class="nav-item">
         <a class="nav-link link-light active" aria-current="page" href="#">Active</a>
        </li>
        <li class="nav-item">
         <a class="nav-link link-light" href="Column">Link</a>
       </li>
        <li class="nav-item">
          <a class="nav-link link-light" href="#">Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link link-light disabled" aria-disabled="true">Disabled</a>
       </li>
     </ul>
      </div>
    </div>
  );
}
export default navbar