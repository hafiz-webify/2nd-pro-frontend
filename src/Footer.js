import React from 'react'
//import { Box, Stack, Button } from "@mui/material";
import './App.css';
import './index.css';

import 'bootstrap/dist/css/bootstrap.min.css';




function Footer() {
  return (
    <div>
      <footer className="py-4 py-md-5 mt-5 bg-black text-white">
      <div className="container py-4 py-md-5 px-4 px-md-3">
        <div className="row">
          <div className="col-lg-3 mb-3">
            <a
              className="d-inline-flex align-items-center mb-2 text-decoration-none text-white"
              href="/"
              aria-label="BAROQUE"
            >
              <span className="fs-5">BAROQUE</span>
            </a>
            <ul className="list-unstyled small">
              <li className="mb-2">
                Designed and built with all the love in the world by{" "}
                <a href="/docs/5.3/about/team" className="text-white">
                  Hafiz Abdullah
                </a>{" "}
                with the help of{" "}
                <a href="www.baroque.com" className="text-white">
                  our contributors
                </a>.
              </li>
              <li className="mb-2">
                Code licensed{" "}
                <a href="https://github.com/twbs/bootstrap/blob/main/LICENSE"    
                  className="text-white"
                >
                  MIT
                </a>
                , docs{" "}
                <a
                  href="https://creativecommons.org/licenses/by/3.0/"
                  
                  className="text-white"
                >
                  CC BY 3.0
                </a>
                .
              </li>
              <li className="mb-2">Currently v5.3.8.</li>
            </ul>
          </div>

          <div className="col-6 col-lg-2 offset-lg-1 mb-3">
            <h5>Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="/" className="text-white">
                  Home
                </a>
              </li>
              <li className="mb-2">
                <a href="/docs/5.3/" className="text-white">
                  Docs
                </a>
              </li>
              <li className="mb-2">
                <a href="/docs/5.3/examples" className="text-white">
                  Examples
                </a>
              </li>
              <li className="mb-2">
                <a href="https://icons.getbootstrap.com/" className="text-white">
                  Icons
                </a>
              </li>
              <li className="mb-2">
                <a href="https://blog.getbootstrap.com/" className="text-white">
                  Blog
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="https://cottonbureau.com/people/bootstrap"
                  
                  className="text-white" >
                  Swag Store
                </a>
              </li>
            </ul>
          </div>

          <div className="col-6 col-lg-2 mb-3">
            <h5>Guides</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="/docs/5.3/getting-started" className="text-white">
                  Getting started
                </a>
              </li>
              <li className="mb-2">
                <a href="/docs/5.3/examples/starter-template" className="text-white">
                  Starter template
                </a>
              </li>
              <li className="mb-2">
                <a href="/docs/5.3/getting-started/webpack" className="text-white">
                  Webpack
                </a>
              </li>
              <li className="mb-2">
                <a href="/docs/5.3/getting-started/parcel" className="text-white">
                  Parcel
                </a>
              </li>
              <li className="mb-2">
                <a href="/docs/5.3/getting-started/vite" className="text-white">
                  Vite
                </a>
              </li>
            </ul>
          </div>

          <div className="col-6 col-lg-2 mb-3">
            <h5>Projects</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a
                  href="https://github.com/twbs/bootstrap"
                   
                  className="text-white"
                >
                  Bootstrap 5
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="https://github.com/twbs/bootstrap/tree/v4-dev"
                  
                  className="text-white"
                >
                  BAROQUE
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="https://github.com/twbs/icons"
                  
                  className="text-white"
                >
                  Icons
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="https://github.com/twbs/rfs"
                  
                  className="text-white"
                >
                  RFS
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="https://github.com/twbs/examples"
                   
                  className="text-white"
                >
                  Examples repo
                </a>
              </li>
            </ul>
          </div>

          <div className="col-6 col-lg-2 mb-3">
            <h5>Community</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a
                  href="https://github.com/twbs/bootstrap/issues"
                  
                  className="text-white"
                >
                  Issues
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="https://github.com/twbs/bootstrap/discussions"
                   
                  className="text-white"
                >
                  Discussions
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="https://github.com/sponsors/twbs"
                  
                  className="text-white"
                >
                  Corporate sponsors
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="https://opencollective.com/bootstrap"
                 
                  className="text-white"
                >
                  Open Collective
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="https://stackoverflow.com/questions/tagged/bootstrap-5"
                  
                  className="text-white"
                >
                  Stack Overflow
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>

    </div>
  )
}

export default Footer
