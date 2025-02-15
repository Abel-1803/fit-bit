import React from 'react'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {BrowserRouter as Router} from "react-router-dom"
import './App.css';
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WorkoutSession from './components/WorkoutSession'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import DietPlan from './components/DietPlan';
import BMICalculator from './components/BMICalculator'
import Pricing from './components/Pricing'
import Footer from './components/Footer'


const App = () => {

  return (
    <Router>
      <Navbar/>
      <Hero/>
      <WorkoutSession/>
      <Gallery/>
      <BMICalculator/>
      <DietPlan/>
      <Pricing/>
      <Contact/>
      <Footer/>
      <ToastContainer theme='dark' position='top-center'/>
    </Router>
  )
}

export default App