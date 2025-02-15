import { Columns } from 'lucide-react';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

function DietPlan() {
  const [bmi, setBmi] = useState('');
  const [foodChart, setFoodChart] = useState('');

  // Function to generate 7-day food chart based on BMI
  const generateFoodChart = (bmi) => {
    let chart = '';
    
    if(!bmi){
      toast.error('Please provide your BMI value')
      return
    }

    // Food chart for Underweight (BMI < 18.5)
    if (bmi < 18.5) {
      chart = (
        <div style={{display:'flex',flexDirection:'column',textAlign:'center',}}>
          <h3 style={{fontSize:'2rem',textTransform:'uppercase',fontWeight:800,marginLeft:'1rem',color:'white'}}>Food Chart (Underweight)</h3>
          <ul style={{fontSize:'1.8rem',lineHeight:'2.5rem',fontWeight:600,marginLeft:'1rem',color:'white',textAlign:'start'}}>
          <li>Day 1: Breakfast: Idiyappam with coconut milk, Banana | Lunch: Boiled eggs, Rice with fish curry | Dinner: Chapati with vegetable curry</li>
                            <li>Day 2: Breakfast: Puttu with kadala curry | Lunch: Fish curry with rice, Curd | Dinner: Chicken stew with appam</li>
                            <li>Day 3: Breakfast: Dosa with ghee and sambar | Lunch: Avocado smoothie, Chicken stew with rice | Dinner: Roti with mutton curry</li>
                            <li>Day 4: Breakfast: Appam with egg curry | Lunch: Rice with sambar and curd | Dinner: Vegetable stir-fry with chapati</li>
                            <li>Day 5: Breakfast: Idli with coconut chutney | Lunch: Kerala parotta with beef fry | Dinner: Kheer with dry fruits</li>
                            <li>Day 6: Breakfast: Neychoru with mutton curry | Lunch: Fresh fruit salad with rice | Dinner: Tapioca with fish curry</li>
                            <li>Day 7: Breakfast: Pathiri with chicken curry | Lunch: Rice with vegetable stir-fry | Dinner: Coconut water with snacks</li>
                        </ul>
        </div>
      );
    } 
    
    // Food chart for Normal (BMI 18.5 - 24.9)
    else if (bmi >= 18.5 && bmi < 24.9) {
      chart = (
        <div style={{display:'flex',flexDirection:'column',textAlign:'center',}}>
          <h3 style={{fontSize:'2rem',textTransform:'uppercase',fontWeight:800,marginLeft:'1rem',color:'white'}}>Food Chart (Normal Weight)</h3>
          <ul style={{fontSize:'1.8rem',lineHeight:'2.5rem',fontWeight:600,marginLeft:'1rem',color:'white',textAlign:'start'}}>
          <li>Day 1: Breakfast: Idli with sambar | Lunch: Rice  with fish curry, Buttermilk | Dinner: Chapati with dal</li>
                            <li>Day 2: Breakfast: Dosa with coconut chutney | Lunch: Vegetable thoran with rice | Dinner: Fresh fruit juice and wheat dosa</li>
                            <li>Day 3: Breakfast: Puttu with green gram curry | Lunch: Kerala-style chicken curry with rice | Dinner: Tender coconut with snacks</li>
                            <li>Day 4: Breakfast: Appam with stew | Lunch: Rice with curd and pappadam | Dinner: Seasonal fruits with boiled eggs</li>
                            <li>Day 5: Breakfast: Idiyappam with egg curry | Lunch: Fish curry with brown rice | Dinner: Buttermilk and mixed salad</li>
                            <li>Day 6: Breakfast: Chapati with vegetable curry | Lunch: Rice with dal and pickle | Dinner: Herbal tea with banana</li>
                            <li>Day 7: Breakfast: Wheat dosa with jaggery | Lunch: Rice with avial | Dinner: Fresh coconut water with light meal</li>
          </ul>
        </div>
      );
    } 
    
    // Food chart for Overweight (BMI 25 - 29.9)
    else if (bmi >= 25 && bmi < 29.9) {
      chart = (
        <div style={{display:'flex',flexDirection:'column',textAlign:'center',}}>
          <h3 style={{fontSize:'2rem',textTransform:'uppercase',fontWeight:800,marginLeft:'1rem',color:'white'}}>Food Chart (Overweight)</h3>
          <ul style={{fontSize:'1.8rem',lineHeight:'2.5rem',fontWeight:600,marginLeft:'1rem',color:'white',textAlign:'start'}}>
          <li>Day 1:Breakfast: Ragi dosa with chutney | Lunch: Brown rice with vegetable stir-fry | Dinner: Buttermilk with light chapati</li>
                            <li>Day 2:Breakfast: Oats upma | Lunch: Fish curry with red rice | Dinner: Herbal tea with salad</li>
                            <li>Day 3:Breakfast: Moong dal dosa | Lunch: Vegetable soup | Dinner: Grilled fish with quinoa</li>
                            <li>Day 4:Breakfast: Red rice idli | Lunch: Vegetable stir-fry | Dinner: Green tea and boiled veggies</li>
                            <li>Day 5:Breakfast: Wheat puttu with banana | Lunch: Rice with dal and salad | Dinner: Fresh fruit juice with chapati</li>
                            <li>Day 6:Breakfast: Broken wheat upma | Lunch: Grilled chicken with vegetables | Dinner: Cucumber raita with roti</li>
                            <li>Day 7:Breakfast: Oats dosa with chutney | Lunch: Brown rice with lentil soup | Dinner: Buttermilk and boiled vegetables</li>
          </ul>
        </div>
      );
    } 
    
    // Food chart for Obese (BMI >= 30)
    else {
      chart = (
        <div style={{display:'flex',flexDirection:'column',textAlign:'center',}}>
          <h3 style={{fontSize:'2rem',textTransform:'uppercase',fontWeight:800,marginLeft:'1rem',color:'white'}}>Food Chart (Obese)</h3>
          <ul style={{fontSize:'1.8rem',lineHeight:'2.5rem',fontWeight:600,marginLeft:'1rem',color:'white',textAlign:'start'}}>
          <li>Day 1:Breakfast: Ragi porridge | Lunch: Steamed vegetables | Dinner: Grilled fish</li>
                            <li>Day 2:Breakfast: Millets dosa | Lunch: Dal with salad | Dinner: Herbal tea with chapati</li>
                            <li>Day 3:Breakfast: Oats idli | Lunch: Vegetable soup | Dinner: Grilled chicken with stir-fried vegetables</li>
                            <li>Day 4:Breakfast: Broken wheat upma | Lunch: Green salad | Dinner: Cucumber juice</li>
                            <li>Day 5:Breakfast: Red rice with dal | Lunch: Boiled vegetables | Dinner: Buttermilk and light chapati</li>
                            <li>Day 6:Breakfast: Vegetable smoothie | Lunch: Grilled fish with quinoa | Dinner: Fresh coconut water</li>
                            <li>Day 7:Breakfast: Wheat dosa with chutney | Lunch: Lentil soup with brown rice | Dinner: Herbal tea and steamed veggies</li>
          </ul>
        </div>
      );
    }

    setFoodChart(chart);
  };

  return (
    <div className='diet'>
      <h1>Food Chart Based on BMI</h1>
      <div className='content'>
        <label>BMI:</label>
        <input
          type="number"
          value={bmi}
          onChange={(e) => setBmi(e.target.value)}
          placeholder="Enter your BMI"
        />
   
      </div>
      <button onClick={() => generateFoodChart(parseFloat(bmi))}>Get Food Chart</button>

      {foodChart && (
        <div>
          {foodChart}
        </div>
      )}
    </div>
  );
}

export default DietPlan;
