import React from 'react'
import { FiPhoneCall } from 'react-icons/fi'
import { GoLocation } from 'react-icons/go'
import { MdOutlineEmail } from 'react-icons/md'

const index = () => {
  return (

           <div className='bg-gray-50'>

             <div className="flex justify-center bg-[url('/images/page-header/page-header-bg.jpg')] bg-cover bg-no-repeat bg-bottom">
            <div className="container mx-auto px-3">
            <div className="py-20 text-center">
                <h1 className="text-3xl font-bold">Contact Us</h1>
            </div>
            </div>
            </div>

            <div className='bg-white'>
                <div className="max-w-screen-2xl mx-auto lg:py-20 py-10 px-4 sm:px-10">
                    <div className="grid md:grid-cols-2 gap-6 lg:grid-cols-3 xl:gap-8 font-primary">
                        <div className="border p-10 rounded-lg text-center">
                            <span className="flex justify-center text-4xl text-emerald-500 mb-4">
                                <MdOutlineEmail></MdOutlineEmail>
                            </span>
                            <h5 className="text-xl mb-2 font-bold">
                                Email Us
                            </h5>
                            <p className="mb-0 text-base opacity-90 leading-7">
                                <a className="text-emerald-500 mr-1" href="">kachabazar@gmail.com</a>
                                 Interactively grow empowered for process-centric total linkage.
                            </p>
                        </div>
                        <div className="border p-10 rounded-lg text-center">
                            <span className="flex justify-center text-4xl text-emerald-500 mb-4">
                                <FiPhoneCall></FiPhoneCall>
                            </span>
                            <h5 className="text-xl mb-2 font-bold">
                            Call Us
                            </h5>
                            <p className="mb-0 text-base opacity-90 leading-7">
                                <a className="text-emerald-500 mr-1" href="">029-00124667</a>
                                Distinctively disseminate focused solutions clicks-and-mortar ministate.
                            </p>
                        </div>
                        <div className="border p-10 rounded-lg text-center">
                            <span className="flex justify-center text-4xl text-emerald-500 mb-4">
                                <GoLocation></GoLocation>
                            </span>
                            <h5 className="text-xl mb-2 font-bold">
                            Location
                            </h5>
                            <p className="mb-0 text-base opacity-90 leading-7">
                            Cecilia Chapman, 561-4535 Nulla LA, United States 96522
                            </p>
                        </div>
                    </div>

                    <div className="px-0 pt-24 mx-auto items-center flex flex-col md:flex-row w-full justify-between">
                        <div className="hidden md:w-full lg:w-5/12 lg:flex flex-col h-full">
                            <img src="https://kachabazar-store.vercel.app/_next/image?url=%2Fcontact-us.png&w=1080&q=75" alt="" />
                        </div>
                        <div className="px-0 pb-2 lg:w-5/12 flex flex-col md:flex-row">
                            <form className="w-full mx-auto flex flex-col justify-center">
                                <div className='mb-12'>
                                    <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold font-primary mb-3">For any suppoort just send your query</h3>
                                    <p className="flex flex-col space-y-5">Collaboratively promote client-focused convergence vis-a-vis customer directed alignments via plagiarize strategic users and standardized infrastructures.</p>
                                </div>
                                <div className="flex flex-col space-y-5">
                                    <div className='flex flex-col md:flex-row space-y-5 md:space-y-0'>
                                        <div className='w-full md:w-1/2'>
                                            <label className="block text-gray-500 font-medium text-sm leading-none mb-2">Your Name</label>
                                            <div className='relative'> 
                                                <input name='name' type="text" placeholder='Inter Your Name' className="py-2 px-4 md:px-5 w-full appearance-none border text-sm opacity-75 text-input rounded-md placeholder-body min-h-12 transition duration-200 focus:ring-0 ease-in-out bg-white border-gray-200 focus:outline-none focus:border-emerald-500 h-11 md:h-12"/>
                                            </div>
                                        </div>
                                        <div className="w-full md:w-1/2 md:ml-2.5 lg:ml-5 mt-2 md:mt-0">
                                        <label className="block text-gray-500 font-medium text-sm leading-none mb-2">Your Email</label>
                                            <div className='relative'> 
                                                <input name='email' type="email" placeholder='Inter Your Email' className="py-2 px-4 md:px-5 w-full appearance-none border text-sm opacity-75 text-input rounded-md placeholder-body min-h-12 transition duration-200 focus:ring-0 ease-in-out bg-white border-gray-200 focus:outline-none focus:border-emerald-500 h-11 md:h-12"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='relative'>
                                    <label className="block text-gray-500 font-medium text-sm leading-none mb-2">Subject</label>
                                            <div className='relative'> 
                                                <input name='subject' type="text" placeholder='Inter Your Subject' className="py-2 px-4 md:px-5 w-full appearance-none border text-sm opacity-75 text-input rounded-md placeholder-body min-h-12 transition duration-200 focus:ring-0 ease-in-out bg-white border-gray-200 focus:outline-none focus:border-emerald-500 h-11 md:h-12"/>
                                            </div>
                                    </div>
                                    <div className='relative mb-4'>
                                    <label className="block text-gray-500 font-medium text-sm leading-none mb-2">Message</label>
                                     <textarea name="message" rows="4" placeholder='Write your message here' className="px-4 py-3 flex items-center w-full rounded appearance-none opacity-75 transition duration-300 ease-in-out text-sm focus:ring-0 bg-white border border-gray-300 focus:shadow-none focus:outline-none focus:border-gray-500 placeholder-body"></textarea>
                                    </div>
                                    <div className='relative'>
                                        <button className="md:text-sm leading-4 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-semibold text-center justify-center border-0 border-transparent rounded-md placeholder-white focus-visible:outline-none focus:outline-none bg-emerald-500 text-white px-5 md:px-6 lg:px-8 py-3 md:py-3.5 lg:py-3 hover:text-white hover:bg-emerald-600 h-12 mt-1 text-sm lg:text-base w-full sm:w-auto">
                                            Send Message
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </div>


           </div>


  )
}

export default index