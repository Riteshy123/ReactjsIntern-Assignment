import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    const [isNavbarVisible, setIsNavbarVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > 200) {
                setIsNavbarVisible(true);
            } else {
                setIsNavbarVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <nav className={`navbar navbar-dark bg-light fixed-top ${isNavbarVisible ? 'show' : 'hide'}`}>
                <div className="container-fluid container">
                    <a className="navbar-brand portfolio text-primary" href="#">
                        <img src='logo1.png' style={{ height: '30px', width: 'auto', filter: 'invert(35%)' }} alt="Logo" />
                    </a>

                    
                    <div className='flex items-end mt-3 '>
          <h5 className='text-xl mr-2'>Check All</h5>
          
        </div>

                    

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasDarkNavbar"
                        aria-controls="offcanvasDarkNavbar"
                        aria-label="Toggle navigation"
                        style={{ backgroundColor: 'black' }}
                    >
                        <span className="navbar-toggler-icon" style={{ backgroundColor: 'black' }} />
                    </button>
                    <div
                        className="offcanvas offcanvas-end text-bg-light"
                        tabIndex={-1}
                        id="offcanvasDarkNavbar"
                        aria-labelledby="offcanvasDarkNavbarLabel"
                    >
                    
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel" />
                            <button
                                type="button"
                                className="btn-close btn-close-white"
                                data-bs-dismiss="offcanvas"
                                aria-label="Close"
                            />
                        </div>
                        <div className="offcanvas-body">
                            <div className='mb-10'> <img src='logo1.png' style={{ height: '30px', width: 'auto', filter: 'invert(35%)' }} alt="Logo" /> </div>
                            <hr className='text-white' />
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3  align-tem:center">
                                <li className="nav-item ">
                                    <Link
                                        to="/innovation"
                                        className="block text-lg text-dark hover:text-gray-300 mr-4 text-decoration-none"
                                    >
                                        <h4 className="">Innovation</h4>
                                    </Link>

                                </li>
                                <li className="nav-item ">
                                    <Link
                                        to="/innovation"
                                        className="block text-lg text-dark hover:text-gray-300 mr-4 text-decoration-none"
                                    >
                                        <h4 className="">Bootcamp</h4>
                                    </Link>

                                </li>
                                <li className="nav-item ">
                                    <Link
                                        to="/innovation"
                                        className="block text-lg text-dark hover:text-gray-300 mr-4 text-decoration-none"
                                    >
                                        <h4 className="">Business Services</h4>
                                    </Link>

                                </li>
                                <li className="nav-item ">
                                    <Link
                                        to="/innovation"
                                        className="block text-lg text-dark hover:text-gray-300 mr-4 text-decoration-none"
                                    >
                                        <h4 className="">Financial Services</h4>
                                    </Link>

                                </li>
                                <li className="nav-item ">
                                    <Link
                                        to="/innovation"
                                        className="block text-lg text-dark hover:text-gray-300 mr-4 text-decoration-none"
                                    >
                                        <h4 className="">About</h4>
                                    </Link>

                                </li>
                                <li className="nav-item ">
                                    <Link
                                        to="/innovation"
                                        className="block text-lg text-dark hover:text-gray-300 mr-4 text-decoration-none"
                                    >
                                        <h4 className="">Contact Us</h4>
                                    </Link>

                                </li>
                                <li className="nav-item ">
                                    <Link
                                        to="/innovation"
                                        className="block text-lg text-dark hover:text-gray-300 mr-4 text-decoration-none"
                                    >
                                        <h4 className="">Blog</h4>
                                    </Link>

                                </li>
                                {/* Other list items */}
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
