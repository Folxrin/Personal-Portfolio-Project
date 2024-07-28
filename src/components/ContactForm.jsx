import React, { useState } from 'react';
import emailjs from 'emailjs-com';

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    emailjs.sendForm('service_n6lfdgd', 'template_r9mget5', event.target)
     .then((response) => {
        setSent(true);
        console.log(response);
      })
     .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className='flex bg-black 
    flex-col px-[3rem]  '>
<div className='flex relative font-bold justify-between items-start pb-[3rem] border-b-2 ' >
    <div className=' '>
<h1 className='text-xl md:text-3xl lg:text-6xl mx-[2rem] md:mx-[3rem] lg:mx-[5rem] py-[3rem] '>Contact</h1>

<p className='relative py-[3rem] w-3/6 justify-evenly items-center mx-[4rem] '>
I would love to hear about your project and how I could help. Please fill in the form, and I'll get back to you as soon as possible. 

</p>
</div>



      <form onSubmit={handleSubmit} className='bg-transparent justify-end items-start py-[4rem] max-w-md
      '>
        <div className='flex flex-col mb-4 '>
          <label className='text-info'>Name:</label>
          <input type="text" value={name} onChange={(event) => setName(event.target.value)} className='bg-transparent border-b border-accent p-2' />
        </div>
        <div className='flex flex-col mb-4'>
          <label className='text-info'>Email:</label>
          <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} className='bg-transparent border-b border-danger p-2' />
        </div>
        <div className='flex flex-col mb-4'>
          <label className='text-info'>Message:</label>
          <textarea value={message} onChange={(event) => setMessage(event.target.value)} className='bg-transparent border-b  p-2' />
        </div>
        <button type="submit" className=" float-end hover:text-accent  text-white font-semibold py-2 px-4 border-accent border-b">
          Send Message
        </button>
      </form>
      {sent? <p className='text-info'>Message sent successfully!</p> : <p></p>}
    </div>
    </div>
  );
}

export default ContactForm;