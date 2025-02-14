import React from "react";
import Button from "../../UI/Button";

function PaymentItem({
  paid,
  title,
  date,
  price,
  thumbnail,
  orderStatus,
  additionalServices,
}) {
  return (
    <li className='text-xs sm:text-sm bg-secondary p-4 sm:p-6 '>
      {/* isPaid? */}
      <div className='mb-4'>
        {paid ? (
          <span className='list-disc'>
            Paid {new Date(date).toLocaleDateString()}
          </span>
        ) : (
          <label className='flex gap-2 items-center'>
            <input type='checkbox' name='active' checked />
            <span>Active</span>
          </label>
        )}
      </div>
      <div className='flex flex-col md:flex-row items-center gap-3 sm:gap-6'>
        {/* left side */}
        <div className='flex-1'>
          {/* Main Div   */}
          <div className='bg-white p-3 sm:p-6 flex gap-3 sm:gap-6'>
            {/* thumbnail Image  */}
            <img
              className='w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 object-cover'
              src={thumbnail}
              alt='Thumbnail'
            />

            {/* Texts */}
            <div className='flex flex-col gap-1 '>
              <h4 className='font-semibold text-sm sm:text-base'>{title}</h4>
              {additionalServices && (
                <p className='id'>
                  <span>Additional Services</span>:{" "}
                  <span className='font-semibold '>
                    {additionalServices.join(", ")}
                  </span>
                </p>
              )}
              <p>
                Date: <span>{new Date(date).toLocaleDateString()}</span>
              </p>
              <p className='id'>
                <span>Order Status</span>:{" "}
                <span className='font-semibold '>{orderStatus}</span>
              </p>
              <p className='id'>
                <span>Price</span>:{" "}
                <span className='font-semibold '>{price} $</span>
              </p>
            </div>
          </div>
        </div>
        {/* Right Side */}
        <div className='flex flex-col sm:flex-row md:flex-col gap-4 justify-center md:w-1/3'>
          {/* Checkout button */}
          {!paid && <Button>Checkout</Button>}
          {/* View order details button */}
          <Button color='transparent'>View order details</Button>
        </div>
      </div>
    </li>
  );
}

export default PaymentItem;
