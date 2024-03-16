import React, { useState } from 'react';
import { BiMenu } from 'react-icons/bi';

function Header() {
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const toggleOffcanvas = () => {
    setShowOffcanvas(!showOffcanvas);
  };

  return (
    <>
      {/* Header */}
      <div className="container-fluid" style={{ backgroundColor: 'orange', height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Left Section */}
        <div style={{ marginLeft: '20px' }} className='mb-5'>
          <img src="logo1.png" alt="Logo" style={{ height: '25px', width: 'auto' }} />
        </div>
        
        {/* Middle Section */}
        <div className='mb-5 px-2'>
          <ul className="nav justify-content-center" style={{ listStyle: 'none', color: 'white' }}>
            <li className="nav-item" style={{ margin: '0 10px' }}><b>Innovations</b></li>
            <li className="nav-item" style={{ margin: '0 10px' }}><b>Business Services</b></li>
            <li className="nav-item" style={{ margin: '0 10px' }}><b>Financial Services</b></li>
            <li className="nav-item" style={{ margin: '0 10px' }}><b>Bootcamp</b></li>
          </ul>
        </div>
        
        {/* Right Section */}
        <div style={{ marginRight: '20px' }} className='mb-5'>
          <button className="btn btn-light rounded-circle" onClick={toggleOffcanvas}> <BiMenu style={{ fontSize: '20px' }} /></button>
        </div>
      </div>

      {/* Offcanvas */}
      <div className={`offcanvas offcanvas-end ${showOffcanvas ? 'show' : ''}`} tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5>
          <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close" onClick={toggleOffcanvas}></button>
        </div>
        <div className="offcanvas-body">
          {/* Your offcanvas content goes here */}
          <p>This is the offcanvas content.</p>
        </div>
      </div>
    </>
  );
}

export default Header;
