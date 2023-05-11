import React from "react";
export default function Unit({LearningUnitIntro,LearningUnits}){
    return(<>
   


                     

                        <div className="title outcome">
                            <h5>Learning Area</h5>
                            <div className='line'></div>
                        </div>

                        <ul className="Det">
                            
                                
                                    <li>
                                    <div className="circleIcon">
                                        <div className="circle">
                                        <i className="fa fa-arrow-right" ></i>
                                        </div>
                                    </div>
                                    <div className="pra">
                                    <p><a href={LearningUnits} target="_blank" rel="noopener noreferrer">Open Detailed Learning Milestone</a></p>
                                            
                                    </div>
                                </li>
                              
                         
                                    

                                   
                        </ul>

    </>)
}