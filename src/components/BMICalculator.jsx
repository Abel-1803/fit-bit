import React, { useState } from 'react'
import { toast } from 'react-toastify'

const BMICalculator = () => {
  const [height,setHeight] = useState("")
  const [weight,SetWeight] = useState("")
  const [gender,setGender] = useState("")
  const [bmi,setBmi] = useState("")

  const calculateBMI =(e)=>{
    e.preventDefault();
    if(!height|| !weight|| !gender){
      toast.error("Please enter valid height,weight and gender");
      return
    }
    const heightInMeters= height/100;
    const bmiValue=(weight/(heightInMeters*heightInMeters)).toFixed(2)
    setBmi(bmiValue)

    if(bmiValue<18.5){
      toast.warning(`${bmiValue} You are underweight`)
    }
     else if(bmiValue>=18.5 && bmiValue < 25){
      toast.success(`${bmiValue} You have Normal weight`)
    }
    else if(bmiValue>25 && bmiValue < 29){
      toast.warning(`${bmiValue} You have Overweight`)
    }
    else {
      toast.warning(`${bmiValue} You are Obese`)
    }

  }
  return (
    <section className='bmi'>
      <h1>BMI CALCULATOR</h1>
      <div className="container">
        <div className="wrapper">
          <form onSubmit={calculateBMI}>
            <div>
              <label>Height(cm)</label>
              <input type="number" value={height} onChange={(e)=>setHeight(e.target.value)}/>
            </div>
            <div>
              <label>Weight(Kg)</label>
              <input type="number" value={weight} onChange={(e)=>SetWeight(e.target.value)}/>
            </div>
            <div>
              <label>Gender</label>
              <select value={gender} onChange={(e)=>setGender(e.target.value)}>
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              </select>
            </div>
            <button type='submit'>Calculate BMI</button>
          </form>
        </div>
        <div className="wrapper">
          <img style={{height:500}} src="/bmi.jpg" alt="bmi" />
        </div>
      </div>

    </section>
  )
}

export default BMICalculator