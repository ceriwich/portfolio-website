import React from 'react';
import './About.css';
// import { useState } from 'react';

function About(props){
    return (
        <section id="about">

               

            <div className="about_container"> 
                <h2>About Me</h2>
                <div className='about_me'>
                    <div className='about_me_image'>
                        <img alt="A picture of yours truly"/>
                    </div>
                </div>

                <div className='about_content'>
                    <div className='about_cardlist'>

                        <article className='about_card'>
                            <h5>Degree</h5>
                            <small>
                                BS Computer Science 
                                <br />
                                <i>University of Pittsburgh</i>
                            </small>
                        </article>

                        <article className='about_card'>
                            <h5>Expertise</h5>
                            <small>
                                <ul>
                                    <li>Data Science</li>
                                    <li>Web Development</li>
                                    <li>DevOps</li>
                                </ul>
                            </small>
                        </article>
                    </div>
                    <div className='about_text'> 
                            <p>
                                I'm a recent Computer Science graduate from the University of Pittsburgh.
                                I am a hard-working, determined Developer looking for an entry-level position where I can 
                                apply and cultivate my technical skills. 
                                With the organization skills and hands-on experience I gained in the 3 years it took to complete my bachelor's degree,
                                I am very excited to begin my professional career in the industry. I am known to be a reliable and capable team member,
                                as well as a fast learner who is always ready to face a new challenge. 
                            </p>
                    </div>
                </div>



            </div>

        </section>
    );
}

export default About;