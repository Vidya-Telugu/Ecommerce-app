import React, { useEffect, useState } from 'react'
import ContactForm from './ContactForm';

function Contact() {
  const[contacts,setContacts]=useState([]);
    async function fetchContacts(){
      try{
      const response=await fetch("https://react-ecommerce-c8c33-default-rtdb.firebaseio.com/contacts.json");
      if(!response.ok){
        throw new Error("Unable to fetch contacts")
      }
      const data=await response.json();
      const updatedContacts=Object.keys(data).map((key)=>{
           return{
            id:key,
            Name:data[key].name,
            Email:data[key].email,
            Phno:data[key].phno,
           }
      })
      setContacts(updatedContacts);
    }catch(error){
      console.log(error.message);
    }
  }
  useEffect(()=>{
    fetchContacts();
  },[])
    async function handlePost(contact){
      try{
        const response=await fetch("https://react-ecommerce-c8c33-default-rtdb.firebaseio.com/contacts.json",{
          method:"POST",
          body:JSON.stringify(contact),
        })
        const data=await response.json();
        console.log(data)
        setContacts((prev)=>([...prev,{id:data.key,...contact}]));
      }
      catch(error){
        console.log(error.message);
      }
    }
  return (
    <div>
      <ContactForm onAddContact={handlePost}></ContactForm>
      <table>
        <thead>
         <th>Name</th>
         <th>Email:</th>
         <th>Phno</th>
        </thead>
        <tbody>
          {
            contacts.map((item)=>(
              <tr key={item.id}>
                 <td>{item.Name}</td>
                 <td>{item.Email}</td>
                 <td>{item.Phno}</td>
              </tr>)
            )
          }
        </tbody>
      </table>
    </div>
  )
}

export default Contact
