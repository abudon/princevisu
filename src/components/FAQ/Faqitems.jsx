import React from 'react'
import { useState } from 'react'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'

const Faqitems = ({item}) => {

  const [isOpne, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpne);
  }

  return (
    <div className='p-3 lg:p-3 rounded-[12px] border border-solid border-[#d9dce2] mb-5 cursor-pointer'>
        <div className='flex items-center justify-between gap-5' onClick={toggleAccordion}>
          <h4 className='text-[16px] leading-2 lg:text-[14px] lg:left-8 font-bold text-primary'>{item.question}</h4>
          <div className={`${isOpne && 'bg-primary text-white border-none'}  w-7 h-7 lg:w-8 lg:h-8 border border-solid  border-[#454b4c] 
          rounded flex items-center`}>{ isOpne ?  <AiOutlineMinus className=' ml-[3px] md:ml-[7px]' /> : <AiOutlinePlus className='ml-[3px] md:ml-[7px]' />}</div>
        </div>

        {isOpne && (
            <div className='mt-4'>
                <p className='text-[11px] leading-6 lg:text-[12px] lg-leading-7 font-[400] text-gray-900'>
                  {item.answer}
                </p>
            </div>
        )}
    </div>
  )
}

export default Faqitems