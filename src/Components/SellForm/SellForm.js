import React, { useState } from 'react'
import "./SellForm.css";

function SellForm() {
  const [currentDate,setCurrentDate]=useState(new Date().toISOString().slice(0,10));
  return (
    <>
      <h2 className='font-bold text-center text-white text-3xl mx-5 mb-4'>Sell Your Token Now!</h2>
        <form className="max-w-xl mx-auto 
      p-4 sm:p-8 md:p-12 lg:p-16 border-4 border-white rounded-3xl shadow-md bg-gray-900 SellForm-container_main ">
            
            <p>
            <label for="payment"></label><br />
          <select className='class="w-full block px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm' id="payment">
            <option value="volvo">BFIC</option>
            <option value="saab">BLove</option>
  
          </select>
            </p>

            <p>
            <label>Wallet Address</label><br />
            <input className='w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500' type="text"  placeholder='Your Wallet Address'/>
            </p>

            <p >
            <label>Amount</label><br />
            <input className='w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500' type="number" step="0.01" min="10" max="100" required  placeholder='Enter Your amount'/>
            </p>
            <p>
            <label className='font-bold'>Transaction ID</label><br />
            <input className='w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500' type="text"  placeholder='Enter Your Transaction id'/>
            <p className=' text-white mb-4 font-bold'>Or, Upload SS</p>
            <input className="w-full sm:w-2/3 py-2 px-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white rounded-lg shadow-md p-3"   type="file" name="" id="" />
            
            </p>
            <p>
            <label>Active Phone Number</label><br />
            <input className='w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500' type="tel"  placeholder='Enter Your Phone Number'/>
            </p>
           
            <p >
            <label>Date Of Sale</label><br />
            <input className='w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500' type="date" defaultValue={currentDate} onChange={(e) => setCurrentDate(e.target.value)}/>
            </p>
            <p className='w-full sm:w-1/2 lg:w-1/3 p-2'>
            <label for="payment">Payment Option:</label><br />
            <select className='bg-gray-700 text-white text-bold text-md rounded '  id="payment">
            <option   value="Bkash">Bkash</option>
            <option value="Nagad" >Nagad</option>
  
  
</select>

            </p>
            <p>
            <label>Payment Details</label><br />
            
            <textarea className='w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500' name="fieldname" rows="3" cols="50" maxlength="180" placeholder='write your payment details'></textarea>
            </p>
            <div >
            <input  className='text-white   bg-green-700 border-2 ml-2 px-12 py-2 rounded cursor-pointer'  type="submit" value="Submit" />
            </div>
        </form>
    </>
  )
}

export default SellForm



// */
// bfic and blove any one when selected will pop up wallet address changed automatically
// your pin order canel

// payment option bank transfer

// our wallet Address(default..change kra jabe na)===>copy korar option....


// */