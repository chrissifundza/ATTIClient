import React from "react";
export default function Overview({courseDescription,CourseOutComeIntro,LearningOutComePoints,CareerPoints,MinimunRequirement}){
    console.log(courseDescription)
    return(
        <>
             

                       

                        <div className="title outcome">
                            <h5>What you will learn?</h5>
                            <div className='line'></div>
                        </div>

                        <div className="learningoutcome">
                          
                                <ul className="Det">
                                    {LearningOutComePoints&&LearningOutComePoints.map((p)=>{
                                        return(
                                            <li>
                                        <div className="circleIcon">
                                            <div className="circle">
                                                <i className="fa fa-check" aria-hidden="true"></i>
                                            </div>
                                        </div>
                                        <div className="pra">
                                        <p>{p}</p>
                                                
                                        </div>
                                    </li>
                                        )
                                    })}
                                    

                                   
                                </ul>
                        </div>

                        <div className="title outcome">
                            <h5>Minimum Entry Requirement</h5>
                            <div className='line'></div>
                        </div>

                        <ul className="Det">
                            {MinimunRequirement&&MinimunRequirement.map((p)=>{
                                return(
                                    <li>
                                    <div className="circleIcon">
                                        <div className="circle">
                                        <i className="fa fa-arrow-right" ></i>
                                        </div>
                                    </div>
                                    <div className="pra">
                                    <p>{p}</p>
                                            
                                    </div>
                                </li>
                                )
                            })}
                                  

                        </ul>

                        <div className="title outcome">
                            <h5>Possible Careers</h5>
                            <div className='line'></div>
                        </div>

                        <ul className="Det">
                            {CareerPoints&&CareerPoints.map((p)=>{
                                return(
                                    <li>
                                    <div className="circleIcon">
                                        <div className="circle">
                                        <i className="fa fa-arrow-right" ></i>
                                        </div>
                                    </div>
                                    <div className="pra">
                                    <p>{p}</p>
                                            
                                    </div>
                                </li>
                                )
                            })}
                                  

                        </ul>

        </>
    )
}