import React from 'react';
import logo from '../logo.png';
import top from './top.svg';
import wallet from '../wallet.png';
import save from '../ribbon.png';
import team from '../team.png';
import vit from '../vit.jpg';
import nta from '../nta.jpg';
import govt from '../govt.jpg'

function Home(props) {
    return (
        <>
            <div className='section bd'>
                <div className='top'>
                    <img src={top} alt='top'></img>
                </div>


                <div className='rcdexam '>
                <div className='lnk d-flex'><h4>Recommended exams</h4><h4><a href="#" className="primary">See All</a></h4></div><br />
                    <div className='cards d-flex'>
                        <div className="card mx-3">
                            
                            <div className="card-body">
                                <div className='card-head d-flex'>
                                <img  src={nta} alt="00"></img>
                                <h>JEE Mains 2023<br/><span><p>National Testing Agency</p></span></h>
                                </div><hr/>
                                <div className='card-containt'>
                                    <i><img src={team} alt=""></img> </i><h>More than 20 Lakhs</h><br/>
                                    <i><img src={wallet} alt=""></img></i><h>&#8377 1200</h><br/>
                                    <h2 className='btn hidden'>IIT</h2>
                                    <p><a href="/exam" className="primary">View details &#11166</a></p>
                                </div>
                            </div>
                        </div>

                        <div className="card mx-3">
                            
                            <div className="card-body">
                                <div className='card-head d-flex'>
                                <img  src={vit} alt="00"></img>
                                <h>JEE Mains 2023<br/><span><p>National Testing Agency</p></span></h>
                                </div><hr/>
                                <div className='card-containt'>
                                    <i><img src={team} alt=""></img> </i><h>More than 20 Lakhs</h><br/>
                                    <i><img src={wallet} alt=""></img></i><h>&#8377 1200</h><br/>
                                    <h2 className='btn hidden'>IIT</h2>
                                    <p><a href="/exam" className="primary">View details &#11166</a></p>
                                </div>
                            </div>
                        </div>
                        <div className="card mx-3">
                            
                            <div className="card-body">
                                <div className='card-head d-flex'>
                                <img  src={govt} alt="00"></img>
                                <h>JEE Mains 2023<br/><span><p>National Testing Agency</p></span></h>
                                </div><hr/>
                                <div className='card-containt'>
                                    <i><img src={team} alt=""></img> </i><h>More than 20 Lakhs</h><br/>
                                    <i><img src={wallet} alt=""></img></i><h>&#8377 1200</h><br/>
                                    <h2 className='btn hidden'>IIT</h2>
                                    <p><a href="/exam" className="primary">View details &#11166</a></p>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
{/* recent  exams */}
                <div className='rcexam'>

                    <div className='lnk d-flex'><h4>Recent exams</h4><h4><a href="#" className="primary">See All</a></h4></div><br />
                    <ul>
                        <li><a href="#" className="btn btn-primary">All</a></li>
                        <li><a href="#" className="btn btn-outline-primary">GATE</a></li>
                        <li><a href="#" className="btn btn-outline-primary">AP EAPCET</a></li>
                        <li><a href="#" className="btn btn-outline-primary">BITSAT</a></li>
                        <li><a href="#" className="btn btn-outline-primary">JEE Mains</a></li>
                        <li><a href="#" className="btn btn-outline-primary">JEE Advanced</a></li>
                        <li><a href="#" className="btn btn-outline-primary">TS EAMCET</a></li>
                        <li><a href="#" className="btn btn-outline-primary">TS EAMCET</a></li>
                        <li><a href="#" className="btn btn-outline-primary">Amity JEE</a></li>
                        <li><a href="#" className="btn btn-outline-primary">GATE</a></li>
                    </ul>

                    <div className='cards d-flex'>
                    <div className="card mx-3">
                            
                            <div className="card-body">
                                <div className='card-head d-flex'>
                                <img  src={nta} alt="00"></img>
                                <h>JEE Mains 2023<br/><span><p>National Testing Agency</p></span></h>
                                </div><hr/>
                                <div className='card-containt'>
                                    <i><img src={team} alt=""></img> </i><h>More than 20 Lakhs</h><br/>
                                    <i><img src={wallet} alt=""></img></i><h>&#8377 1200</h><br/>
                                    <h2 className='btn hidden'>IIT</h2>
                                    <p><a href="/exam" className="primary">View details &#11166</a></p>
                                </div>
                            </div>
                        </div>

                        <div className="card mx-3">
                            
                            <div className="card-body">
                                <div className='card-head d-flex'>
                                <img  src={vit} alt="00"></img>
                                <h>JEE Mains 2023<br/><span><p>National Testing Agency</p></span></h>
                                </div><hr/>
                                <div className='card-containt'>
                                    <i><img src={team} alt=""></img> </i><h>More than 20 Lakhs</h><br/>
                                    <i><img src={wallet} alt=""></img></i><h>&#8377 1200</h><br/>
                                    <h2 className='btn hidden'>IIT</h2>
                                    <p><a href="/exam" className="primary">View details &#11166</a></p>
                                </div>
                            </div>
                        </div>
                        <div className="card mx-3">
                            
                            <div className="card-body">
                                <div className='card-head d-flex'>
                                <img  src={govt} alt="00"></img>
                                <h>JEE Mains 2023<br/><span><p>National Testing Agency</p></span></h>
                                </div><hr/>
                                <div className='card-containt'>
                                    <i><img src={team} alt=""></img> </i><h>More than 20 Lakhs</h><br/>
                                    <i><img src={wallet} alt=""></img></i><h>&#8377 1200</h><br/>
                                    <h2 className='btn hidden'>IIT</h2>
                                    <p><a href="/exam" className="primary">View details &#11166</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div >
        </>
    );
}

export default Home;