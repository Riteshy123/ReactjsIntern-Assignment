import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Footer from '../components/Footer'

function Bootcamp() {
    return (
        <>
            <Navbar />
            <Header />
            <div className="bg-light text-dark py-5">
                <div className="container mx-auto px-4">
                    <div className="row align-items-center justify-content-between">
                        <h2>Digital Marketing</h2>
                        <div className="col-lg-6 mb-4 mb-lg-0 ml-5">

                            <p className="lead mb-5">In today's cut-throat competitive environment, enterprises in order to find their footing, must market themselves digitally and develop a strong online presence.
                                <br />
                                We at Lejhro help businesses in strong relationship building with their clients by delivering customized and superior results..</p>

                        </div>
                        <div className="col-lg-6  mb-lg-0">
                            <img src="digital.jpg" className="img-fluid rounded-lg shadow-lg" />
                        </div>


                    </div>
                </div>
            </div>

            <div className="bg-grey text-dark py-5">
                <div className="container mx-auto px-4">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-lg-6  mb-lg-0">
                            <img src="dataanalyst.jpg" alt="Furniture Hero" className="img-fluid rounded-lg shadow-lg" />
                        </div>
                        <div className="col-lg-6 mb-4 mb-lg-0 ml-5">
                            <h2>Data Analyst</h2>
                            <p className="lead mb-5">In today's ever changing environment businesses have to ensure a flexible and dynamic approach for a brighter future.
                                <br />
                                In order to flourish enterprises must rethink their working style and develop the ability to predict, brainstorm, respond and adapt to any setbacks or challenges.</p>

                        </div>



                    </div>
                </div>
            </div>

            <div className="bg-light text-dark py-5">
                <div className="container mx-auto px-4">
                    <div className="row align-items-center justify-content-between">

                        <div className="col-lg-6 mb-4 mb-lg-0 ml-5">
                            <h2>Application Modernization</h2>
                            <p className="lead mb-5">With the dominance of technology all around the globe and applications becoming the new trend, application modernization has become more than necessary.
                                <br />
                                Organizations need to revamp applications in innovative ways in order to ensure better growth and survival in the future..</p>

                        </div>
                        <div className="col-lg-6  mb-lg-0">
                            <img src="application.jpg" alt="Furniture Hero" className="img-fluid rounded-lg shadow-lg" />
                        </div>


                    </div>
                </div>
            </div>


            <div className="bg-grey text-dark py-5">
                <div className="container mx-auto px-4">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-lg-6  mb-lg-0">
                            <img src="applicationdevelop.jpg" alt="Furniture Hero" className="img-fluid rounded-lg shadow-lg" />
                        </div>
                        <div className="col-lg-6 mb-4 mb-lg-0 ml-5">
                            <h2>Application Development and Maintenance</h2>
                            <p className="lead mb-5">In this digital age usage of applications and technology by organizations has become necessary for ease of operation.
                                <br />
                                With usage, maintenance and further development become even more essential for smooth operations. Businesses now more than ever need to build proficient and systematic ways to achieve their strategic targets..</p>

                        </div>



                    </div>
                </div>
            </div>

            <div className="bg-light text-dark py-5">
                <div className="container mx-auto px-4">
                    <div className="row align-items-center justify-content-between">

                        <div className="col-lg-6 mb-4 mb-lg-0 ml-5">
                            <h2>Cyber Securuty</h2>
                            <p className="lead mb-5">With the advent of the digital era and businesses being heavily reliant on technology, cyber security becomes very crucial for an organization.
                                <br />
                                Now, work securely with Lejhro's cyber security services which are based on the strategy of securing and ensuring scalability without compromising on safety..</p>

                        </div>
                        <div className="col-lg-6  mb-lg-0">
                            <img src="cyber.jpg" alt="Furniture Hero" className="img-fluid rounded-lg shadow-lg" />
                        </div>


                    </div>
                </div>
            </div>


            <div className="bg-grey text-dark py-5">
                <div className="container mx-auto px-4">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-lg-6  mb-lg-0">
                            <img src="Quality.jpg" alt="Furniture Hero" className="img-fluid rounded-lg shadow-lg" />
                        </div>
                        <div className="col-lg-6 mb-4 mb-lg-0 ml-5">
                            <h2>Quality Assurance</h2>
                            <p className="lead mb-5">Now digitally transforming and revamping organizations has become quintessential in this era.
                                <br />
                                Re-structure your enterprises with quality assurance services from Lejhro which are mainly focused on building strategic relations to magnify our clients' value.</p>

                        </div>



                    </div>
                </div>
            </div>




            <Footer />
        </>
    )
}

export default Bootcamp