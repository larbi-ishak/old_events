import Image from 'next/image'
import { useRouter } from 'next/router'
import React,{ useRef,useState } from 'react'

const SingleEvent = ({event}) => {
  const [show_msg, setShow_msg] = useState(false)
  const [res_msg, setRes_msg] = useState("")

  const inputEmail = useRef()
  const router = useRouter()


  const submit_handler=async (e)=>{
    e.preventDefault();
    const email_value =inputEmail.current.value;
    const eventId = router?.query.id;

    try {
        // POST fetch request    
        // body emailValue and eventId
        setShow_msg(true)
        const response = await fetch("/api/add_email",{
          method:'POST',
          headers: {
            'Content-Type': "application/json",
          },
          body: JSON.stringify({email: email_value, eventId}),
        })

        if(!response.ok) throw new Error(`error: ${response.status}`)
        const data = await response.json()
        console.log(data)
        setRes_msg(data.msg)
        inputEmail.current.value="";

    } catch (e) {
     console.log("ERROR", e) 
    }
    

  }

  return (
    <>
            <h1>{event.title.toUpperCase()}</h1>
            <Image src={`${event.image}`} width={250} height={250} alt="none" />
            <p>
                <b>This Event:</b>
                <br></br> {event.description}
            </p>
            <b>Location: {event.city}</b>
            <br></br> <b>Date: {event.date}</b><br></br>
            <form action="/api/add-email" onSubmit={submit_handler} method='POST'>
                <label htmlFor=""><b>Register your email and get your ticket for the event</b><br></br></label>
                <input ref={inputEmail} type={"text"} id="email" placeholder='type your email'/>
                <button type="submit" >Join Us</button>
                
            </form>
            <p>{show_msg && <p>{res_msg}</p>}</p>
</>
  )
}

export default SingleEvent