import React from 'react'

function BuyForm() {
  return (
    <>
      <h2 className='font-bold text-center text-white text-3xl mx-5 mb-4'>Buy Your Token Now!</h2>

      <form className='SellForm-container_main
      max-w-xl  mx-auto 
      p-4 sm:p-8 md:p-12 lg:p-16 '>
        <p className=''>
            <label>Amount</label><br />
            <input  className='w-full  py-2 px-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500' type="number"  placeholder='Enter Your amount'/>
            </p>

            <p>
            <label>Wallet Address</label><br />
            <input className='w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500' type="text"  placeholder='Your Wallet Address'/>
            </p>

            <p>
            <label for="phone">Active Phone Number</label><br />
            <input className='w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500' type="tel"  placeholder='Enter Your Phone Number'/>
            </p>

            <p>
            <label for="payment">Payment Option:</label><br />
            <select className='bg-gray-700 text-white text-bold ' id="payment">
  <option value="volvo">Bkash</option>
  <option value="saab">Nagad</option>
  
</select>
            </p>

            <p>
            <label>Amount to be Paid:</label><br />
            <input className='w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500' type="text"  placeholder='Enter Your amount'/>
            </p>
            
            <p>
            <label>Transaction ID/Upload SS</label><br />
            <input className='w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500' type="text"  placeholder='Enter Your Transaction id'/>
            <p className='text-white mb-4 font-bold'>Or, Upload SS</p>
            <input className='bg-red-500 rounded-lg shadow-md' type="file" name="" id="" />
            </p>
          
            <p>
            <label>Your Name(optional)</label><br />
            <input className='w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500' type="text"  placeholder='Enter your Name'/>
            </p>
           
            <p>
            <label>Payment Details</label><br />
            <input className='w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500' type="text"  placeholder='Your Payment Details'/>
            </p>
            
            <div className=''>
            <input className='text-white   bg-green-700 border-2 border-red-450 px-12 py-2 rounded'  type="submit" value="Submit" />
            </div>
            
        </form>
    </>
  )
}

export default BuyForm