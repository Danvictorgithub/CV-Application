import React, { Component } from 'react';
import './Form.css';
function Form() {
    return (
        <div className="form">
            <div className="personalInfo info" >
                <h2>Personal Information</h2>
                <hr/>
                <form>
                    <div className="nameForm">
                        <div className="pForm">
                            <label htmlFor='fName'>First Name: </label>
                            <input type='text' id="fName"></input>
                        </div>
                        <div className="pForm">
                            <label htmlFor='lName'>Last Name: </label>
                            <input type='text' id="lName" className="last"></input>
                        </div>
                    </div>
                    <div className="nameForm">
                        <div className="pForm">
                            <label htmlFor='email'>Email Address: </label>
                            <input type='text' id="email"></input>
                        </div>
                        <div className="pForm">
                            <label htmlFor='pNumber'>Phone Number: </label>
                            <input type='number' id="pNumber" className="last"></input>
                        </div>
                    </div>
                    <div className="nameForm">
                        <div className="pForm special">
                            <label htmlFor='residence'>Residence: </label>
                            <input type='text' id="residence"></input>
                        </div>
                    </div>
                </form>
            </div>
            <div className="educationInfo info">
                <h2>Educational History</h2>
                <hr/>
                <form>
                    <div className="nameForm">
                        <div className="pForm">
                            <label htmlFor='school'>School Name: </label>
                            <input type='text' id="school"></input>
                        </div>
                        <div className="pForm">
                            <label htmlFor='degree'>Degree: </label>
                            <input type='text' id="degree" className="last"></input>
                        </div>
                    </div>
                    <div className="nameForm">
                        <div className="pForm">
                            <label htmlFor='schoolLocation'>School Location: </label>
                            <input type='text' id="schoolLocation"></input>
                        </div>
                        <div className="pForm">
                            <label htmlFor='schoolDate'>Date: </label>
                            <input type='text' id="schoolDate" className="last"></input>
                        </div>
                    </div>
                    <div className="nameForm">
                        <div className="pForm special">
                            <label htmlFor='schoolDetails'>Details: </label>
                            <input type='text' id="schoolDetails"></input>
                        </div>
                    </div>
                    <button className="addMore" type="button">+ Add more Info</button>
                </form>
            </div>
            <div className="experienceInfo info">
                <h2>Working Experience</h2>
                <hr/>
                <form>
                    <div className="nameForm">
                        <div className="pForm">
                            <label htmlFor='company'>Company Name: </label>
                            <input type='text' id="company"></input>
                        </div>
                        <div className="pForm">
                            <label htmlFor='jobTitle'>Job Title: </label>
                            <input type='text' id="jobTitle" className="last"></input>
                        </div>
                    </div>
                    <div className="nameForm">
                        <div className="pForm">
                            <label htmlFor='jobLocation'>Job Location: </label>
                            <input type='text' id="jobLocation"></input>
                        </div>
                        <div className="pForm">
                            <label htmlFor='jobDate'>Date: </label>
                            <input type='text' id="jobDate" className="last"></input>
                        </div>
                    </div>
                    <div className="nameForm">
                        <div className="pForm special">
                            <label htmlFor='jobDetails'>Details: </label>
                            <input type='text' id="jobDetails"></input>
                        </div>
                    </div>
                    <button className="addMore" type="button">+ Add more Info</button>
                </form>
            </div>
        </div>
    )
}
export default Form;