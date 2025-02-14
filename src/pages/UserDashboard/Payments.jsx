import React from "react";
import { paymentData } from "../../components/UserDashboard/Payments/paymentDummyData";
import PaymentItem from "../../components/UserDashboard/Payments/PaymentItem";
import { FaAngleDown } from "react-icons/fa6";

function Payments() {
  return (
    <section className='px-4 sm:px-6 md:px-10 lg:px-20 py-10'>
      {/* Heading */}
      <h2 className='uppercase text-xl sm:text-2xl lg:text-4xl font-medium md:text-center mb-6 md:mb-10'>
        Y<span className='italic font-normal font-playfair'>o</span>ur payments
      </h2>

      {/* Filter Payments */}
      <div className='mb-6 flex justify-end'>
        <div className='flex items-center gap-2'>
          <span>Show</span>
          <div className='flex items-center gap-2'>
            <span>All</span>
            <FaAngleDown />
          </div>
        </div>
      </div>

      {/* List of payments */}
      <ul className='flex flex-col gap-8'>
        {paymentData.map((item, index) => (
          <PaymentItem key={index} {...item} />
        ))}
      </ul>
    </section>
  );
}

export default Payments;
