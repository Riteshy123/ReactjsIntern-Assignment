import React from 'react';

function Footer() {
  return (
    <footer className="bg-light text-dark py-5">
      <div className="container ml-5">
        <div className="row">
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase mb-4">Company</h5>
            <ul className="list-unstyled">
              <li className="py-1">
                <a href="#" className="text-dark">Innovations</a>
              </li>
              <li className="py-1">
                <a href="#!" className="text-dark">Business Services</a>
              </li>
              <li className="py-1">
                <a href="#!" className="text-dark">Financial services</a>
              </li>
              <li className="py-1">
                <a href="#!" className="text-dark">Lejhro Recruiter</a>
              </li>
              <li className="py-1">
                <a href="#!" className="text-dark">About</a>
              </li>
              <li className="py-1">
                <a href="#!" className="text-dark">Blogs</a>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase mb-4">Programs</h5>
            <ul className="list-unstyled">
              <li className="py-1">
                <a href="#!" className="text-dark">Lejhro Bootcamp</a>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase mb-4">Support</h5>
            <ul className="list-unstyled">
              <li className="py-1">
                <a href="#!" className="text-dark">Contact</a>
              </li>
              <li className="py-1">
                <a href="#!" className="text-dark">Terms of Use</a>
              </li>
              <li className="py-1">
                <a href="#!" className="text-dark">Privacy Statement</a>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase mb-4">Connect with us</h5>
            <ul className="list-unstyled">
              <li className="py-1 list-unstyled">
                <a href="" className="text-dark">Contact</a>
              </li>
              <li className="py-1">
                <a href="#!" className="text-dark">Terms of Use</a>
              </li>
              <li className="py-1">
                <a href="#!" className="text-dark">Privacy Statement</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
