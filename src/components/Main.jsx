import React from 'react';
import imageDevices from '../assets/images/illustration-devices.svg';


const Main = () => {
  
  return (
    <main className='w-full flex flex-col justify-center items-center overflow-hidden '>

       
        <div className='absolute top-0 right-0 overflow-hidden bg-LightGrayishBlue w-[50%] h-[46%] rounded-bl-[5rem] -z-10 '>
        
        </div>
        <img className=' -mr-[17rem]  md:-mr-[32rem] lg:-mr-[44rem] mb-24 'id='imgDevice' src={imageDevices} title="Image devices" alt="Image Devices" />
        <div className=' pt-0 pb-0 w-[80%] p-[2rem] '>
            <div className='uppercase font-Condensed  '>
                <h2 className='text-xl flex items-center gap-5 font-[400] tracking-[.2rem] text-GrayishBlue mb-3'><span className='bg-VeryDarkBlue font-[500] text-white  p-1 pl-2 pr-2 rounded-full '>new</span> monograph dashboard</h2>
                <h1 className='text-[2.1rem] leading-10 font-bold text-VeryDarkBlue mb-4'>powerful insights into your team</h1>
                <p className='lowercase font-Barlow leading-8 first-letter:uppercase text-[1.36rem] text-GrayishBlue font-light mb-5'>proyect planning and time tracking for agile teams</p>
                <div className='flex  justify-between gap-1 text-[.77rem] w-full max-w-[350px]' >
                  <button className='uppercase  bg-Red p-3 pr-4 pl-4 rounded-lg tracking-[.1rem] text-white font-bold  hover:bg-opacity-[.7]' >
                    <p>shedule a demo</p>
                  </button>
                    
                    <button className='uppercase btn-login pr-3 pl-3 rounded-lg tracking-[.1rem] text-GrayishBlue '>
                    <p>to see a preview</p>
                    </button>
                </div>
            </div>
        </div>

    </main>
  )
}

export default Main