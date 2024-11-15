import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer(){

  return <section className="flex justify-between w-[90vw] max-w-7xl items-center h-[75vh] md:w-full  min-h-[180px] md:px-[8vw] px-[2vw] text-base md:text-lg ">
  <div className='h-[60vh] w-full '>
      <section className='h-[80%] flex flex-col md:flex-row justify-between'>
        <div>
        <div className='h-[50%]'>
            <a href="#" className="flex items-center text-gray-300 hover:text-white text-xl md:text-3xl font-bold font-baloo" >
            AtomInfra
          </a>
          <div className="py-6 ml-1 text-gray-600 text-lg font-normal">
            <h1>Ambition Forge Pvt. Ltd</h1>
            <h1> Indiranagar, Bangalore<br/>
            560038
            </h1>
          </div>  
        </div>
        <div className='text-gray-300 text-lg md:text-2xl font-medium h-[50%] flex flex-col justify-end pb-10'>
          <span>Follow us  </span>
          <div className='flex gap-4 mt-2 text-gray-600 ml-1'>
            <span><FaGithub className="h-6 w-6 hover:cursor-pointer hover:text-gray-300" /> </span>
            <span><FaLinkedin className="h-6 w-6 hover:cursor-pointer hover:text-gray-300" /> </span>
          </div>
        </div>
        </div>
        <div className='md:flex gap-20 hidden '>
          <div>
            <span className='text-gray-300 text-2xl font-medium'>Resources</span>
              <div>
                <ul className="flex flex-col  py-3 " >
                  <span   className="p-1 font-normal">
                    <a href="#products" className="flex items-center text-gray-400 hover:text-white" >
                      Products
                    </a>
                  </span>
                  <span   className="p-1 font-normal">
                    <a href="#team" className="flex items-center text-gray-400 hover:text-white" >
                      Team
                    </a>
                  </span>
                  <span   className="p-1 font-normal" >
                    <a href="#advisors" className="flex items-center text-gray-400 hover:text-white">
                      Advisors
                    </a>
                  </span>
                </ul>
              </div>
          </div>
          <div>
            <span className='text-gray-300 text-2xl font-medium'>Quick Links</span>
              <div>
                <ul className="flex flex-col  py-3 " >
                  <span   className="p-1 font-normal">
                    <a href="#products" className="flex items-center text-gray-400 hover:text-white" >
                      AI Cloudlab
                    </a>
                  </span>
                </ul>
              </div>
          </div>
          
        </div>
      </section>
      <section className='h-[20%] py-10 border-t  border-gray-800 text-gray-600 text-base font-normal flex flex-col md:flex-row  justify-between'>
        <div>
          2024 Ambition Forge Pvt. Ltd. All rights Reserved
        </div>
        <div>
        <a
          href="mailto:hello@atominfra.com"
          className=" bg-[#009ded] md:text-lg text-white px-6 py-3 rounded-full font-normal text-base hover:bg-[#3591c0] transition-colors hidden md:block"
        >
          hello@atominfra.com
        </a>
        </div>
      </section>
  </div>
</section>
}