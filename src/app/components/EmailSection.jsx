"use client"
import React,  { useState, useEffect } from 'react'
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { Resend } from 'resend';

function EmailSection() {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      email,
      subject,
      message,
    };

    try {
      const response = await fetch('/api/send/route', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Handle successful email submission
        setEmailSubmitted(true);
        setEmail('');
        setSubject('');
        setMessage('');
      } else {
        // Handle errors
        console.error('Failed to send email');
      }
    } catch (error) {
      console.error('An error occurred while sending the email:', error);
    }
  };
    
  return (
    <section className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4' id="contact">
        <div className=''>
            <h1 className='text-4xl sm:text-5xl font-bold text-white mb-4'>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-purple-400">
                Let&apos;s Connect
              </span>
            </h1>
            <div className="w-20 h-1 bg-indigo-500 mb-4 rounded-full"></div>
            <p className='text-[#ADB7BE] mb-4 max-w-md'>I am currently looking for new opportunities. Whether you have a question or just want to have a coffee chat, my inbox is always open. </p>
            <p className='pb-5 text-white'>P.S. I love telling and listening to stories <span role="img" aria-label="smiley">😊</span></p>
        <div className='socials flex flex-row gap-2'>
        <a href="https://linkedin.com/in/divyam-bansal" target="_blank" rel="noopener noreferrer" className="hover:opacity-75">
                    <FaLinkedin alt="LinkedIn" className="h-10 w-10 invert-0"/>
                </a>
                <a href="https://github.com/divyamb08" target="_blank" rel="noopener noreferrer" className="hover:opacity-75">
                    <FaGithub alt="GitHub" className="h-10 w-10"/>
                </a>
        </div>
        
        </div>
        <div>
        {emailSubmitted ? (
          <p className="text-green-500 text-sm mt-2">
            Email sent successfully!
          </p>
        ) : (
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="text-white block mb-2 text-sm font-medium"
              >
                Your email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="tony.stark@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="subject"
                className="text-white block text-sm mb-2 font-medium"
              >
                Subject
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="We have a mission"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="text-white block text-sm mb-2 font-medium"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Let's save the planet using code."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="bg-white hover:bg-slate-400 text-black font-medium py-2.5 px-5 rounded-lg w-full"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  )
}

export default EmailSection
