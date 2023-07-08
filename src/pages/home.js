import React from 'react'
import resume from '../assets/images/resume.svg';
import { useNavigate } from 'react-router-dom'
import AboutCommon from '../api/components/AboutCommon';
import BloodgroupCmn from '../api/components/BloodgroupCmn';
export default function Home({ profile }) {
    const navigate = useNavigate()
    return (
        <div className='aboutMe p-3'>
            <AboutCommon profile={profile} />
            <BloodgroupCmn />
            <hr />
            <div className='d-flex justify-content-sm-between resumeDiv'>
                <div className='d-flex justify-content-sm-between resume'><img src={resume} /> <label >Resume</label> </div>
                <span className='bloodgroup' data-bs-toggle="modal" data-bs-target="#exampleModal" > &gt;  </span>
            </div>
            <div className='d-flex'>
                <label>Skills</label>
                {profile && profile.skills && profile.skills.map((skill, index) => {
                    return (
                        <div className='skillBlud m-1'>
                            {skill.name}
                        </div>
                    )
                })}
            </div>
            <div className='d-flex'>
                <label>Hobies</label>
                {profile && profile.skills && profile.hobies.map((skill, index) => {
                    return (
                        <div className='skillBlud m-1'>
                            {skill.name}
                        </div>
                    )
                })}
            </div>
            <div className='d-flex'>
                <label>Subjects</label>
                <div className='row'>
                    {profile && profile.skills && profile.Subjects.map((skill, index) => {
                        return (
                            <div className='skillBlud  m-1'>
                                {skill.name}
                            </div>
                        )
                    })}
                </div>

            </div>
            {/* Modal */}


            <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Resume</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body">
                            <embed src={profile.resume} type="application/pdf"
                                frameBorder="0"
                                scrolling="auto"
                                height="100%"
                                width="100%" />
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}
