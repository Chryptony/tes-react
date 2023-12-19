import React from 'react';
import {  Link } from "react-router-dom";
import images from './images/jobside.png'
import NavDropdown from 'react-bootstrap/NavDropdown';


const Navbar= () =>{
  return (
    <div className="container-fluid text-center header">
      <div className="container text-center">
        <div class="container text-center">
          <div class="row align-items-start">
            <div class="col">
            <ul class="nav justify-content-start py-3">
              <img src={images} width="130" heigth="100"/>
            </ul>
              </div>
              <div class="col">
              <ul class="nav justify-content-end py-3">
                <NavDropdown title="JASA" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">DESAIN GRAFIS</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">WEB DESIGN</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                </NavDropdown>
                <li class="nav-item">
                  <a class="nav-link link-dark active" aria-current="page" href="#">Active</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link link-dark" href="Column">Link</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link link-dark" href="#">Link</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link link-dark disabled" aria-disabled="true">Disabled</a>
                </li>
              </ul>
              </div>
             </div>
            </div>
      	  </div>
        </div>  
  );
}
export default Navbar