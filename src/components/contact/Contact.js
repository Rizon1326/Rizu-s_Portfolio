import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import Title from '../layouts/Title';
import ContactLeft from './ContactLeft';

const Contact = () => {
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Email Validation
  const emailValidation = () => {
    return String(email)
      .toLocaleLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };

  // Handle Form Submission
  const handleSend = async (e) => {
    e.preventDefault();
    
    // Reset previous messages
    setErrMsg("");
    setSuccessMsg("");

    // Validation Checks
    if (username === "") {
      setErrMsg("Username is required!");
      return;
    }
    if (phoneNumber === "") {
      setErrMsg("Phone number is required!");
      return;
    }
    if (email === "") {
      setErrMsg("Please provide your Email!");
      return;
    }
    if (!emailValidation()) {
      setErrMsg("Please provide a valid Email!");
      return;
    }
    if (subject === "") {
      setErrMsg("Please provide a subject!");
      return;
    }
    if (message === "") {
      setErrMsg("Message is required!");
      return;
    }

    // Prepare to send email
    setIsSubmitting(true);

    // Email template parameters
    const templateParams = {
      from_name: username,
      from_email: email,
      phone_number: phoneNumber,
      subject: subject,
      message: message
    };

    try {
      // Send email using EmailJS
      // eslint-disable-next-line no-unused-vars
      const response = await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID, 
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID, 
        templateParams,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      );

      // Success handling
      setSuccessMsg(`Thank you, ${username}! Your message has been sent successfully.`);
      
      // Reset form fields
      setUsername("");
      setPhoneNumber("");
      setEmail("");
      setSubject("");
      setMessage("");
    } catch (error) {
      // Error handling
      console.error("Email send error:", error);
      setErrMsg("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="CONTACT" des="Contact With Me" />
      </div>
      <div className="w-full">
        <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
          <ContactLeft />
          <div className="w-full lgl:w-[60%] h-full py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] flex flex-col gap-8 p-4 lgl:p-8 rounded-lg shadow-shadowOne">
            <form className="w-full flex flex-col gap-4 lgl:gap-6 py-2 lgl:py-5">
              {/* Error and Success Messages */}
              {errMsg && (
                <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-orange-500 text-base tracking-wide animate-bounce">
                  {errMsg}
                </p>
              )}
              {successMsg && (
                <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-green-500 text-base tracking-wide animate-bounce">
                  {successMsg}
                </p>
              )}

              {/* Name and Phone Input */}
              <div className="w-full flex flex-col lgl:flex-row gap-10">
                <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                  <p className="text-sm text-gray-400 uppercase tracking-wide">
                    Your name
                  </p>
                  <input
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                    className={`${
                      errMsg === "Username is required!" &&
                      "outline-designColor"
                    } contactInput`}
                    type="text"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                  <p className="text-sm text-gray-400 uppercase tracking-wide">
                    Phone Number
                  </p>
                  <input
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    value={phoneNumber}
                    className={`${
                      errMsg === "Phone number is required!" &&
                      "outline-designColor"
                    } contactInput`}
                    type="text"
                    placeholder="Enter phone number"
                  />
                </div>
              </div>

              {/* Email Input */}
              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide">
                  Email
                </p>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  className={`${
                    errMsg === "Please give your Email!" &&
                    "outline-designColor"
                  } contactInput`}
                  type="email"
                  placeholder="Enter your email"
                />
              </div>

              {/* Subject Input */}
              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide">
                  Subject
                </p>
                <input
                  onChange={(e) => setSubject(e.target.value)}
                  value={subject}
                  className={`${
                    errMsg === "Plese give your Subject!" &&
                    "outline-designColor"
                  } contactInput`}
                  type="text"
                  placeholder="Enter subject"
                />
              </div>

              {/* Message Textarea */}
              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide">
                  Message
                </p>
                <textarea
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                  className={`${
                    errMsg === "Message is required!" && "outline-designColor"
                  } contactTextArea`}
                  cols="30"
                  rows="8"
                  placeholder="Enter your message"
                ></textarea>
              </div>

              {/* Send Message Button */}
              <div className="w-full">
                <button
                  onClick={handleSend}
                  disabled={isSubmitting}
                  className={`w-full h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wider uppercase 
                    hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent
                    ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;