import React, { useState } from 'react'
import { ClipLoader } from 'react-spinners'
import { toast } from 'react-toastify'
import axios from 'axios'

const Contact = () => {
  const [name,setName] =useState("")
  const [email,setEmail] =useState("")
  const [message,setMessage] =useState("")
  const [loading,setLoading] =useState(false)

  const sendMail = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await axios.post(
        "https://fit-server-vi6n.onrender.com/send/mail",
        {
          name,
          email,
          message,
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      setName("");
      setEmail("");
      setMessage("");
      toast.success(data.message);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error("Mail sending error:", error); // Debugging log
      toast.error(error.response?.data?.message || "Failed to send message.");
    }
  };


  return (
    <section id='contacts' className='contact'>
        <form onSubmit={sendMail}>
          <h1>CONTACT US</h1>
          <div>
            <label>NAME</label>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
          </div>
          <div>
            <label>EMAIL</label>
            <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
          </div>
          <div>
            <label>MESSAGE</label>
            <input type="text" value={message} onChange={(e)=>setMessage(e.target.value)}/>
          </div>
          <button type='submit' disabled={loading} style={{display:"flex",justifyContent:"center",alignItems:"center",gap:"15px"}}>
            {loading && <ClipLoader size={20} color='white'/>}
            SEND MESSAGE
          </button>
        </form>
    </section>
  )
}

export default Contact