import React from 'react'
import './Contact.css'
import mail from '../../assets/mail.png'
import phone from '../../assets/phone.png'
import loaction from '../../assets/location.png'

const Contact = () => {


    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "2e9ccedb-1c59-431c-9378-0c89194cbe38");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };


  return (
    <div className='contact'>
        <div className="left">
            <h3>Get in Touch <img src="" alt="" /></h3>
            <p>Have a question, suggestion, or just want to say hello? We'd love to hear from you! Reach out and our team will get back to you shortly.</p>
            <ul>
                <li><img src={mail} alt="" /> support@rasoikitchen.com</li>
                <li><img src={phone} alt="" /> +91 98765 43210</li>
                <li><img src={loaction} alt="" /> 123 Spice Street, New Delhi, India</li>
            </ul>
        </div>
        <div className="left">
            <form onSubmit={onSubmit}>
                <label>Your Name</label>
                <input type="text" name='name' placeholder='Enter Your Name' required/>
                <label >Phone Number</label>
                <input type="tel" name='phone' placeholder='Enter Your Mobile Number' required/>
                <label >Write Your Message Here.</label>
                <textarea name="message" rows="6" placeholder='enter your message' required></textarea>
                <button type='submit' className='btn'>Submit</button>
            </form>
            <span>{result}</span>
        </div>
    </div>
  )
}

export default Contact
