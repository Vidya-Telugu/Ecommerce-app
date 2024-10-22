import React ,{useState} from 'react'
import "./ContactForm.css";
function ContactForm({onAddContact}) {
  const[contact,setContact]=useState({Name:"",Email:"",Phno:""});
  function handleContact(e){
    setContact((prev)=>({...prev,[e.target.name]:e.target.value}));
  }
  function handleAddContact(e){
    e.preventDefault();
     onAddContact(contact);
     setContact({Name:"",Email:"",Phno:""});
  }
  return (
    <div className='form-container'>
      <form onSubmit={handleAddContact}>
        <label htmlFor='Name'>Name</label>
        <input type="text" name='Name' value={contact.Name} onChange={handleContact}></input>
        <label htmlFor="email">Email</label>
        <input type="email" name="Email" value={contact.Email} onChange={handleContact}></input>
        <label htmlFor="Phno">Phone number</label>
        <input type="tel"  name="Phno" value={contact.Phno} onChange={handleContact}></input>
        <button type="submit" className='contact-btn'>Add Contact</button>
      </form>
    </div>
  )
}

export default ContactForm
