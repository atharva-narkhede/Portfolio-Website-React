// import React,{useState, useRef} from 'react'
// import emailjs from "@emailjs/browser";
// import { Container, Row, Col } from "react-bootstrap";
// import Button from 'react-bootstrap/Button';
// import './Contact.css'

// const Contact = () => {
//     const form = useRef();
//     const [done, setDone] = useState(false)
//     const [notDone, setNotDone] = useState(false)
//     const [formData, setFormData] = useState({});

//     const handleChange = (e) => {
//         setFormData({...formData, [e.target.name] : e.target.value})
//         setDone(false)
//         setNotDone(false)
//     }

//     const sendEmail = (e) => {
//     e.preventDefault();
    
//     if(!formData.from_name || !formData.reply_to ||!formData.message){
//       setNotDone(true)
//     } else {
      
//       //  Please use your own credentials from emailjs or i will recive your email
      
//     emailjs
//       .sendForm(
//         "service_7aclukr",
//         "template_tlwrob8",
//         form.current,
//         "q0Mej0SqPWdJ9gjaI-"
//       )
//       .then(
//         (result) => {
//           console.log(result.text);
//           setDone(true);
//         },
//         (error) => {
//           console.log(error.text);
//         }
//       );
//     }
//     };
    

//     return(
//         <Container style={{paddingTop: '50px'}} >
//             <Row >
//             <Col md={6} className="c-left" >
//             <h1 >Get in Touch</h1>
//             <h1 className="yellow">Contact me</h1>
//             </Col>
//             <Col md={6} className="c-right">
//                 <form ref={form} onSubmit={sendEmail}>
//                 <input type="text" name="from_name" className="user"  placeholder="Name" onChange={handleChange}/>
//                 <input type="email" name="reply_to" className="user" placeholder="Email" onChange={handleChange} />
//                 <textarea name="message" className="user" placeholder="Message" onChange={handleChange} />
//                 <span className='not-done' >{notDone && "Please, fill all the input field"}</span>
//                 <Button type="submit" className="button" disabled={done}>Send</Button>
//                 <span className='done'>{done && "Thanks for contacting me and be sure i have recieved your mail. If you are testing this functionality then i am confirming this thing working perfectly fine. If you have any serious query then i will reply. Also if you need me, you can conatct me on Linkedin."}</span>
//                 </form>
//             </Col>
//             </Row>
//         </Container>
//     )
// }

// export default Contact



import React, { useState, useRef } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import './Contact.css';

const Contact = () => {
    const form = useRef();
    const [done, setDone] = useState(false);
    const [notDone, setNotDone] = useState(false);
    const [formData, setFormData] = useState({
        from_name: '',
        reply_to: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setDone(false);
        setNotDone(false);
    };

    const sendEmail = async (e) => {
        e.preventDefault();
        
        if (!formData.from_name || !formData.reply_to || !formData.message) {
            setNotDone(true);
        } else {
            const formDataObj = new FormData(form.current);
            formDataObj.append('service_id', 'service_7aclukr');
            formDataObj.append('template_id', 'template_tlwrob8');
            formDataObj.append('user_id', 'q0Mej0SqPWdJ9gjaI');

            try {
                const response = await fetch('https://api.emailjs.com/api/v1.0/email/send-form', {
                    method: 'POST',
                    body: formDataObj,
                    headers: {
                        'Accept': 'application/json'
                    }
                });

                if (response.ok) {
                    setDone(true);
                    setNotDone(false);
                    setFormData({ from_name: '', reply_to: '', message: '' });
                } else {
                    setNotDone(true);
                }
            } catch (error) {
                console.error('Error sending email:', error);
                setNotDone(true);
            }
        }
    };

    return (
        <Container style={{ paddingTop: '50px' }}>
            <Row>
                <Col md={6} className="c-left">
                    <h1>Get in Touch</h1>
                    <h1 className="yellow">Contact me</h1>
                </Col>
                <Col md={6} className="c-right">
                    <form ref={form} onSubmit={sendEmail}>
                        <input 
                            type="text" 
                            name="from_name" 
                            className="user"  
                            placeholder="Name" 
                            onChange={handleChange} 
                            value={formData.from_name}
                        />
                        <input 
                            type="email" 
                            name="reply_to" 
                            className="user" 
                            placeholder="Email" 
                            onChange={handleChange} 
                            value={formData.reply_to}
                        />
                        <textarea 
                            name="message" 
                            className="user" 
                            placeholder="Message" 
                            onChange={handleChange} 
                            value={formData.message}
                        />
                        <span className='not-done'>{notDone && "Please, fill all the input fields"}</span>
                        <Button type="submit" className="button" disabled={done}>Send</Button>
                        <span className='done'>
                            {done && "Thanks for contacting me. I have received your mail. If you are testing this functionality, it is working perfectly fine. If you have any serious query, I will reply. Also, you can contact me on LinkedIn."}
                        </span>
                    </form>
                </Col>
            </Row>
        </Container>
    );
};

export default Contact;
