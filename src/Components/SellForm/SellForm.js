import React from 'react'
import "./SellForm.css";

function SellForm() {
  return (
    <>
      <h2 className='font-bold text-center text-white text-3xl mx-5 mb-4'>Sell Your Token Now!</h2>
        <form className="max-w-xl mx-auto 
      p-4 sm:p-8 md:p-12 lg:p-16 SellForm-container_main ">
            
            <p>
            <label>Wallet Address</label><br />
            <input className='w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500' type="text"  placeholder='Your Wallet Address'/>
            </p>

            <p >
            <label>Amount</label><br />
            <input className='w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500' type="number" step="0.01" min="10" max="100" required  placeholder='Enter Your amount'/>
            </p>
            <p>
            <label className='font-bold'>Transaction ID/Upload SS</label><br />
            <input className='w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500' type="text"  placeholder='Enter Your Transaction id'/>
            <p className=' text-white mb-4 font-bold'>Or, Upload SS</p>
            <input className="w-full sm:w-2/3 py-2 px-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white rounded-lg shadow-md p-3"   type="file" name="" id="" />
            
            </p>
            <p>
            <label>Active Phone Number</label><br />
            <input className='w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500' type="text"  placeholder='Enter Your Phone Number'/>
            </p>
            <p >
            <label>Your PIN for Order</label><br />
            <input className='w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500' type="text"  placeholder='Enter Your PIN'/>
            </p>
            <p >
            <label>Your Name(optional)</label><br />
            <input className='w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500' type="text"  placeholder='Enter your Name'/>
            </p>
            <p className='w-full sm:w-1/2 lg:w-1/3 p-2'>
            <label for="payment">Payment Option:</label><br />
            <select className='bg-gray-700 text-white text-bold '  id="payment">
  <option   value="Bkash">Bkash</option>
  <option value="Nagad" >Nagad</option>
  
</select>

            </p>
            <p className='w-full sm:w-1/2 lg:w-1/3 p-2'>
            <label>Payment Details</label><br />
            <input className='w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500' type="text"  placeholder='Your Wallet Address'/>
            </p>
            <div >
            <input className='text-white   bg-green-700 border-2 ml-2 px-12 py-2 rounded'  type="submit" value="Submit" />
            </div>
        </form>
    </>
  )
}

export default SellForm