import React from 'react'
import edit from '../../assets/images/edit.svg'

import { useNavigate } from 'react-router-dom';
export default function AboutCommon({ profile }) {
    console.log('====================================');
    console.log("skills", profile);
    console.log('====================================');
    const navigate = useNavigate()
    return (
        <div><div className='d-flex justify-content-sm-between p-3'>
            <h5> About Me </h5>  <img src={edit} onClick={() => navigate("/EditBio")} />
        </div>
            <div className='aboutText'>
                {profile && profile.about
                    && profile.about.length
                    ? profile.about :
                    "Please add something about yorself"
                }
            </div>
            <hr /></div>
    )
}
