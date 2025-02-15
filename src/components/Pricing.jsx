import React from 'react';
import { Check } from 'lucide-react';

const Pricing = () => {
  const pricing = [
    {
      imgUrl: "/pricing.jpg",
      title: "QUARTERLY",
      price: 6000,
      length: 3
    },
    {
      imgUrl: "/pricing.jpg",
      title: "HALF_YEARLY",
      price: 10000,
      length: 6
    },
    {
      imgUrl: "/pricing.jpg",
      title: "YEARLY",
      price: 20000,
      length: 12
    },
  ];

  // Open Gmail with pre-filled email
  const handleJoinNow = (plan) => {
    const recipient = "abeldavid1803200@gmail.com";
    const subject = `Join Fitness Plan: ${plan.title}`;
    const body = `Hello,\n\nI would like to join the ${plan.title} package.\n\nPlan Details:\n- Price: Rs.${plan.price}\n- Duration: ${plan.length} months\n\nPlease provide further instructions.\n\nThank you.`;

    // Gmail URL format for pre-filled emails
    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(recipient)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Open Gmail in a new tab
    window.open(gmailLink, "_blank");

  };

  return (
    <section id='price' className='pricing'>
      <h1 className='price_title'>FITNESS PLANS</h1>
      <div className="wrapper">
        {pricing.map((plan) => (
          <div className="card" key={plan.title}>
            <img src={plan.imgUrl} alt={plan.title} />
            <div className="title">
              <h1>{plan.title}</h1>
              <h1>PACKAGE</h1>
              <h3>RS: {plan.price}</h3>
              <p>For {plan.length} Months</p>
            </div>
            <div className='description'>
              <p><Check /> Equipment</p>
              <p><Check /> All Day Training</p>
              <p><Check /> Free Restroom</p>
              <p><Check /> 24/7 Skilled Support</p>
              <button className='join' onClick={() => handleJoinNow(plan)}>JOIN NOW</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
