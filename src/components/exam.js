import React from 'react';
import nta from '../nta.jpg';
import team from '../team.png';
import wallet from '../wallet.png'

function Exam(props) {
    return (
        <>
            <div className='bd section container'>
                <div className='row'>
                    <div className='right col'>
                        <h3>Back</h3><br />
                        <div className='right-1 col'>
                        <div className='card-head d-flex'>
                            <img src={nta} alt="00"></img>
                            <h>JEE Mains 2023<br /><span><p>National Testing Agency</p></span></h>
                        </div><hr/>
                        <div className='col'>
                            <p>Posted 30days ago</p>
                            <p><a className='btn btn-primary' href="#">Apply Now</a></p>
                        </div>
                        </div>
                        <div className='right-2 col'>
                            <h3>Exam Description:</h3><br />
                            <ul>
                                <li>JEE Main is a standardized test conducted across different states in India.</li>
                                <li>The exam is held at an undergraduate level to offer admissions to some of the best engineering and technical institutions that are Government funded or privately-owned.</li>
                                <li>The exam conducting authority considers the best NTA score in preparing the ranks/merit list.</li>
                            </ul><br />
                            <h3>Eligiility:</h3><br />
                            <ul>
                                <li>Age Limit - No age limit</li>
                                <li>Qualifying Exam - Class 12/Equivalent Exam</li>
                                <li>Percentage - At least 75% in class 12/equivalent exam</li>
                                <li>Year of Passing - 2021, 2022 or appearing in 2023</li>
                                <li>Number of attempts - Candidate can appear in JEE Main for 3 consecutive years after passing their class 12/equivalent exam</li>
                            </ul><br />
                            <h3>Importaint Details:</h3><br />
                            <ul>
                                <li>JEE Main 2023 January Session: NTA released the JEE Main 2023 session 1 will be conducted between 24th January and 1st February, 2023.</li>
                                <li>JEE Main 2023 April Session: NTA released the JEE Main 2023 session 1 will be conducted between 1st April, 2023 and 15th April, 2023.</li>
                            </ul>
                        </div>
                    </div>
                    <div className='left col'>
                        <h5>Exams you might be interested in</h5>
                        <div className='card-head d-flex'>
                            <img src={nta} alt="00"></img>
                            <h>JEE Mains 2023<br /><span><p>National Testing Agency</p></span></h>
                        </div>
                        <div className='my-3'>
                            <i><img className='mx-2' src={team} alt=""></img> </i><h>More than 20 Lakhs</h><br />
                            <i><img className='mx-2' src={wallet} alt=""></img></i><h className='col'>&#8377 1200</h><span className='col'><a href="#" className="lnk primary">View details &#11166</a></span><br />
                            
                        </div><hr />
                        <div className='card-head d-flex'>
                            <img src={nta} alt="00"></img>
                            <h>JEE Mains 2023<br /><span><p>National Testing Agency</p></span></h>
                        </div>
                        <div className='my-3'>
                            <i><img className='mx-2' src={team} alt=""></img> </i><h>More than 20 Lakhs</h><br />
                            <i><img className='mx-2' src={wallet} alt=""></img></i><h className='col'>&#8377 1200</h><span className='col'><a href="#" className="lnk primary">View details &#11166</a></span><br />
                            
                        </div><hr />
                        <div className='card-head d-flex'>
                            <img src={nta} alt="00"></img>
                            <h>JEE Mains 2023<br /><span><p>National Testing Agency</p></span></h>
                        </div>
                        <div className='my-3'>
                            <i><img className='mx-2' src={team} alt=""></img> </i><h>More than 20 Lakhs</h><br />
                            <i><img className='mx-2' src={wallet} alt=""></img></i><h className='col'>&#8377 1200</h><span className='col'><a href="#" className="lnk primary">View details &#11166</a></span><br />
                            
                        </div><hr />
                        <div className='card-head d-flex'>
                            <img src={nta} alt="00"></img>
                            <h>JEE Mains 2023<br /><span><p>National Testing Agency</p></span></h>
                        </div>
                        <div className='my-3'>
                            <i><img className='mx-2' src={team} alt=""></img> </i><h>More than 20 Lakhs</h><br />
                            <i><img className='mx-2' src={wallet} alt=""></img></i><h className='col'>&#8377 1200</h><span className='col'><a href="#" className="lnk primary">View details &#11166</a></span><br />
                            
                        </div><hr />
                       <div className='btn btn-outline-primary'><h>View All</h></div> 
                    </div>
                </div>
            </div>
        </>
    );
}

export default Exam;