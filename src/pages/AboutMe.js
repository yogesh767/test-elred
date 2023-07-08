import React, { useState } from 'react'
import AboutCommon from '../api/components/AboutCommon'
import BloodgroupCmn from '../api/components/BloodgroupCmn'

export default function AboutMe({profile, setprofile}) {
    console.log('====================================');
    console.log("skills", profile);
    console.log('====================================');

  return (
    <div>
        <AboutCommon profile={profile} setprofile={setprofile}/>
        <BloodgroupCmn/>
        
    </div>
  )
}
