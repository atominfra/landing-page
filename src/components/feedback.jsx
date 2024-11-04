'use client'
import messageIcon from '@/assets/messageIcon.svg'
import Image from 'next/image'
import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
const FeedBack = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isLoading, setIsLoading] = useState(false)
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({ ...prevData, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (
      formData.name === '' ||
      formData.message === '' ||
      formData.email === ''
    ) {
      toast.error('Please fill the form')
      return
    }
    try {
      setIsLoading(true)
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        toast.success('Message sent successfully!')

        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        })
      } else {
        toast.error('Failed to send message. Please try again')
      }
      setIsLoading(false)
    } catch (error) {
      console.error('Error sending message:', error)
      toast.error('An error occurred. Please try again later.')
      setIsLoading(false)
    }
  }

  return (
    <div className=" w-full flex flex-col md:flex-row items-center justify-evenly p-8 bg-gray-900 min-h-screen max-w-7xl">
          <Image alt="messageIcon" src={messageIcon} width={174} height={169} />
      <form
        onSubmit={handleSubmit}
        className="md:w-2/3 w-full max-w-lg bg-gray-900 p-8 rounded-lg shadow-lg"
      >
        <h2 className="text-2xl font-semibold text-white mb-6 text-start">
          Send us a Message/Feedback
        </h2>

        <div className="flex flex-col md:flex-row md:space-x-4 mb-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name/Organization Name"
            className="bg-gray-900 border border-gray-600 rounded-[10px] p-3 text-white w-full mb-4 md:mb-0"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="E-mail address"
            className="bg-gray-900 border border-gray-600 rounded-[10px] p-3 text-white w-full"
          />
        </div>

        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="Subject"
          className="bg-gray-900 border border-gray-600 rounded-[10px] p-3 text-white w-full mb-4"
        />

        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Message"
          className=" border bg-gray-900 border-gray-600 rounded-[10px] p-3 text-white w-full mb-6 h-32"
        ></textarea>

        <button
          title='disabled'
          type="submit"
          disabled={true}
          className="w-full bg-gray-600 hover:cursor-not-allowed text-white font-semibold py-3 rounded-[10px] transition duration-300"
        >
          {isLoading === true ? (
            <div className="flex justify-center">
              <svg
                aria-hidden="true"
                class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-gray-200"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
            </div>
          ) : (
            'Send Message'
          )}
        </button>
      </form>
      <Toaster />
    </div>
  )
}

export default FeedBack