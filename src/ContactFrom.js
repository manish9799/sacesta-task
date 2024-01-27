import React, { useEffect, useState } from 'react'
import './App.css';


const ContactFrom = () => {

  const [errors,setErrors] = useState({})

    const [formValue,setFormValue] = useState({
        username:'',
        email:'',
        country:'',
        terms:false,
    })

    const checkValidation =(data) => {
      let errorsCheck = {}

      if(!data.username.trim()){
        errorsCheck.username = 'Username is required'
      }
      if(data.email || data.email === ''){
        let gmailReg = /^[a-zA-Z0-9.]+@gmail.com$/
        if(!gmailReg.test(data.email)){
          errorsCheck.email = 'Invalid Email'
        }
      }
      if(!data.country){
        errorsCheck.country = 'Country is required'
      }
      if(!data.terms){
        errorsCheck.terms = 'You must be accepct terms & condition'
      }
      return errorsCheck
    }

    const handleSubmit =(e)=>{
      e.preventDefault()
     let check =  checkValidation(formValue)
        setErrors(check)
        if(check.username || check.email || check.country || check.terms){
          console.log("please check code")
        }else{
          alert(`
          Hii, ${formValue.username}
          your response is submitted and your gmail is ${formValue.email} 
          `)
          setFormValue({...formValue,username : '',email:'',country:'',terms:false})
        }
    }

    const handleChange =(e)=>{
      const {name,value,type,checked} = e.target
      setFormValue((prev)=>({
          ...prev,[name] : type === 'checkbox' ? checked : value
      }))
    }

  return (
    <>
    <div className='conatiner' >

    <h2 style={{textAlign:'center'}}>Contact Form</h2>
    <form  onSubmit={handleSubmit}>

    <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
      <div>
      <div className='inputBox'>
        <label className='label'>User Name:</label>
        <input 
        type='text'
        name='username'
        value={formValue.username}
        onChange={handleChange}
        className='inputFeild'
        />
      </div>
        {errors.username && <span style={{color:'red',fontSize:'13px'}}>{errors.username}</span>}
      <div className='inputBox'>
        <label>Email:</label>
        <input 
        type='text'
        name='email'
        value={formValue.email}
        onChange={handleChange}
        className='inputFeild'
        />

        </div>
        {errors.email && <span style={{color:'red',fontSize:'13px'}}>{errors.email}</span>}
      <div className='inputBox'>
        <label>Country:</label>
        <select className='inputFeild' name='country' onChange={handleChange} value={formValue.country}>
          <option value=''></option>
          <option value='India'>India</option>
          <option value='Pak'>Pak</option>
        </select>

        </div>
        {errors.country && <span style={{color:'red',fontSize:'13px'}}>{errors.country}</span>}
    </div>
        <div className='inputBox-terms'>

        <input
        type='checkbox'
        name='terms'
        checked={formValue.terms}
        onChange={handleChange}

        />
        <label className='label-terms' >
          Accepst Terms & Condition
        </label>

        </div>
        {errors.terms && <span style={{color:'red',fontSize:'13px'}}>{errors.terms}</span>}
    <button type='submit' className='submitBtn'>
      Submit
    </button>
    </div>
    </form>
    </div>
    </>
  )
}

export default ContactFrom