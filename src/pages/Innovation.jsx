import React, { useState } from 'react';
import { BiMenu } from 'react-icons/bi';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Innovation() {
    const [showOffcanvas, setShowOffcanvas] = useState(false);

    const toggleOffcanvas = () => {
        setShowOffcanvas(!showOffcanvas);
    };

    return (
        <>
            <Navbar />
            {/* Header */}
            <div className="container-fluid  py-5" style={{ backgroundColor: 'skyblue', width: '100%', height: '650px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', }}>
                {/* Left Section */}
                <div className="d-flex align-items-center">
                    <img src="logo1.png" alt="Logo" style={{ height: '25px', width: 'auto' }} />
                </div>

                {/* Middle Section */}
                <div className="d-none d-md-block flex-grow-1 text-center">
                    <ul className="nav justify-content-center">
                        <li className="nav-item">
                            <a href="#" className="nav-link text-white"><b>Innovations</b></a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link text-white"><b>Business Services</b></a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link text-white"><b>Financial Services</b></a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link text-white"><b>Bootcamp</b></a>
                        </li>
                    </ul>
                </div>

                {/* Right Section */}
                <div className="d-flex align-items-center">
                    <button className="btn btn-light rounded-circle" onClick={toggleOffcanvas}>
                        <BiMenu style={{ fontSize: '20px' }} />
                    </button>
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

            {/* Content */}
            <div className="container mt-5">
                <h2 className="">Research Development</h2>
                <p className="">We at Lejhro believe Research & Development (R&D) as the best investment for the future.</p>
                <div className="text-center">
                    <img src="brain.png" className="img-fluid" alt="Brain" />
                </div>
            </div>

            <div className="bg-light text-dark py-5">
                <div className="container mx-auto px-4">
                    <div className="row align-items-center justify-content-between">

                        <div className="col-lg-6 mb-4 mb-lg-0 ml-5">

                            <p className="lead mb-5">R&D, an essential function for many businesses, is responsible for achieving breakthroughs in innovation.

                                R&D always goes along with product development and behind every innovative product invention are decades of extensive research that ignites a spark within the organization.
                                <br />
                                Research is the most endangered investment area because both the development of inventiveness and its prosperous understanding takes doubt, including the profitability of the creativeness. In a resolution, "huge R and D spending does not assure a more creative,
                                more fabulous profit or more market share".</p>

                        </div>
                        <div className="col-lg-6  mb-lg-0">
                            <img src="randd.png" alt="Furniture Hero" className="img-fluid rounded-lg shadow-lg" />
                        </div>


                    </div>
                </div>
            </div>

            <div className="container mt-5">
                <h2>Product Development</h2>
                <p> journey of a new product development starts with an idea that should be untried or out of the box, forming the foundation for further development.</p>
                <div className="text-center">
                    <img src="bulb.png" className="img-fluid" alt="Brain" />
                </div>
            </div>

            <div className="bg-light text-dark py-5">
                <div className="container mx-auto px-4">
                    <div className="row align-items-center justify-content-between">

                        <div className="col-lg-6 mb-4 mb-lg-0 ml-5">
                            <h2>What is Innovation Product Development?</h2>
                            <p className="lead mb-5">It's a cross-functional activity that involves the process of transforming innovative ideas into reality. The innovation product development methodology consists of stages like ideation, design, validation, and launch of the final product.
                                <br />
                                <br />
                                Additionally, this process also includes regular reviews of customer data, their problem statement, and feedback.</p>

                        </div>
                        <div className="col-lg-6  mb-lg-0">
                            <img src="innovate.png" alt="Furniture Hero" className="img-fluid rounded-lg shadow-lg" />
                        </div>


                    </div>
                </div>
            </div>
            <hr className="mt-4 mb-0 bg-primary" style={{ height: '17px', border: 'none' }} />
            <Footer />
        </>
    );
}

export default Innovation;
