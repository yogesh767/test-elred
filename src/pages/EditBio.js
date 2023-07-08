import React, { useEffect, useState } from 'react'
import AboutCommon from '../api/components/AboutCommon'
import BloodgroupCmn from '../api/components/BloodgroupCmn'
import { simpleGetCall } from '../api/apiServices'
import Multiselect from 'multiselect-react-dropdown'
import { useNavigate } from 'react-router-dom'

export default function ({ profile, setprofile }) {
  const [skills, setskills] = useState([])
  const [hobies, sethobies] = useState([])
  const [subject, setsubject] = useState([])
  const [editData, setEditData] = useState({...profile})
  const navigate=useNavigate()
  useEffect(() => {
    getSkills()
  }, [])

  const getSkills = () => {
    simpleGetCall("https://newpublicbucket.s3.us-east-2.amazonaws.com/reactLiveAssignment/JsonFiles/GetProfessionalSkillsResponse.json")
      .then(res => {
        if (res.success) {
          setskills(res.result[0].skills)
        }
      })
    simpleGetCall("https://newpublicbucket.s3.us-east-2.amazonaws.com/reactLiveAssignment/JsonFiles/GetHobbiesResponse.json")
      .then(res => {
        if (res.success) {
          sethobies(res.result[0].hobbies)
        }
      })

    simpleGetCall("https://newpublicbucket.s3.us-east-2.amazonaws.com/reactLiveAssignment/JsonFiles/GetSubjectsResponse.json")
      .then(res => {
        if (res.success) {
          setsubject(res.result[0].subjects)
        }
      })
  }
  console.log('====================================');
  console.log(editData);
  console.log('====================================');
  function onSelect(selectedList, selectedItem, key) {
    let current = editData;
    current[key] = selectedList
    setEditData({ ...current })
  }

  function onRemove(selectedList, removedItem, key) {
    let current = editData;
    current[key] = selectedList
    setEditData({ ...current })
  }
 
  return (
    <div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">About me</label>
        <input type="texteara"
          value={profile.about}
          onChange={(e) => setEditData({ ...profile, about: e.target.value })}
          className="form-control" id="exampleFormControlInput1" placeholder="Enter something about you" />
      </div>

      <BloodgroupCmn />
      <div className='skills'>
        <label htmlFor="exampleFormControlInput1" className="form-label">Skills</label>
        <Multiselect
        selectedValues={editData.skills}
          options={skills.map((skill) => { return { id: skill._id, name: skill.value } })}
          displayValue="name" // Property name to display in the dropdown options
          onSelect={(selectedList, selectedItem, )=> onSelect(selectedList, selectedItem, "skills")}
          onRemove={onRemove}
        />
      </div>
      <div className='skills'>
        <label htmlFor="exampleFormControlInput1" className="form-label">Hobies</label>
        <Multiselect
         selectedValues={editData.hobies}
          options={hobies.map((skill) => { return { id: skill._id, name: skill.value } })}
          displayValue="name" // Property name to display in the dropdown options
          onSelect={(selectedList, selectedItem, )=> onSelect(selectedList, selectedItem, "hobies")}
          onRemove={onRemove}
        />
      </div>
      <div className='skills'>
        <label htmlFor="exampleFormControlInput1" className="form-label">Subjects</label>
        <Multiselect
         selectedValues={editData.Subjects}
          options={subject.map((skill) => { return { id: skill._id, name: skill.value } })}
          displayValue="name" // Property name to display in the dropdown options
          onSelect={(selectedList, selectedItem, )=> onSelect(selectedList, selectedItem, "Subjects")}
          onRemove={onRemove}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">Resume</label>
        <input type="file"
          // value={profile.resume}
          onChange={(e) => setEditData({ ...editData, resume: e.target.files[0] })}
          className="form-control" id="exampleFormControlInput1" placeholder="Enter something about you" />
      </div>
      <div className='text-center m-5'>
      <button className='btn btn-danger' onClick={()=>{
        setprofile(editData)
        navigate("/")
      }}>Submit</button>
      </div>
    </div>
  )
}

