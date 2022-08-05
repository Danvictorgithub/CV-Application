import React, { Component } from 'react';
import './CVPaper.css';
function CVPaper(props) {
    const {Name, Residence, Email, PNumber} = props;
    return (
        <div className="paper">
            <div className="personalInfo">
            <h2>{Name}</h2>
                <div className='personalInfoBot'>
                    <h5>{Residence}</h5>
                    <h5>{Email}</h5>
                    <h5>{PNumber}</h5>
                </div>
            </div>
            <hr/>
            <h3>Educational History</h3>
            <hr/>
        </div>
    )
}
export default CVPaper;

{/* <div className="personalInfo">
                <h2>Dan Victor B. Lofranco</h2>
                <div className='personalInfoBot'>
                    <h5>Tagbina Surigao del Sur</h5>
                    <h5>danvictorprogramming1@gmail.com</h5>
                    <h5>09454515232</h5>
                </div>
            </div>
            <hr/>
            <h3>Educational History</h3>
            <hr/>
            <div className='educationInfo'>
                <h4>Caraga State University</h4>
                <div className='schoolData'>
                    <h5>Bachelor of Science in Computer Science</h5>
                    <h5>-</h5>
                    <h5>2021-2025</h5>
                </div>
                <h5 className='sDetail'>General Weighted Average: 1.27 (First Semeseter Vice President's Lister)</h5>
            </div>
            <hr/>
            <h3>Work Experience</h3>
            <hr/>
            <div className='workExperienceInfo'>
                <h4>Caraga State University</h4>
                <div className='schoolData'>
                    <h5>Bachelor of Science in Computer Science</h5>
                    <h5>-</h5>
                    <h5>2021-2025</h5>
                </div>
                <h5 className='sDetail'>General Weighted Average: 1.27 (First Semeseter Vice President's Lister)</h5>
                <h4>Caraga State University</h4>
                <div className='schoolData'>
                    <h5>Bachelor of Science in Computer Science</h5>
                    <h5>-</h5>
                    <h5>2021-2025</h5>
                </div>
                <h5 className='sDetail'>General Weighted Average: 1.27 (First Semeseter Vice President's Lister)</h5>
                <h4>Caraga State University</h4>
                <div className='schoolData'>
                    <h5>Bachelor of Science in Computer Science</h5>
                    <h5>-</h5>
                    <h5>2021-2025</h5>
                </div>
                <h5 className='sDetail'>General Weighted Average: 1.27 (First Semeseter Vice President's Lister)</h5>
                <h4>Caraga State University</h4>
                <div className='schoolData'>
                    <h5>Bachelor of Science in Computer Science</h5>
                    <h5>-</h5>
                    <h5>2021-2025</h5>
                </div>
                <h5 className='sDetail'>General Weighted Average: 1.27 (First Semeseter Vice President's Lister)</h5>
            </div> */}