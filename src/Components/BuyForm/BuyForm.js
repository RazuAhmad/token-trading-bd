import React from 'react'

function BuyForm() {
  return (
    <div className='Form-container'>
      <h2 className='font-bold text-center text-white text-3xl mx-5 mb-4'>Buy Your Token Now!</h2>
        <form className='SellForm-container_main'>
        <p>
            <label>Amount</label><br />
            <input type="text"  placeholder='Enter Your amount'/>
            </p>

            <p>
            <label>Wallet Address</label><br />
            <input type="text"  placeholder='Your Wallet Address'/>
            </p>

            <p>
            <label>Active Phone Number</label><br />
            <input type="text"  placeholder='Enter Your Phone Number'/>
            </p>

            <p>
            <label for="payment">Payment Option:</label><br />
            <select id="payment">
  <option value="volvo">Bkash</option>
  <option value="saab">Nagad</option>
  
</select>
            </p>

            <p>
            <label>Amount to be Paid:</label><br />
            <input type="text"  placeholder='Enter Your amount'/>
            </p>
            
            <p>
            <label>Transaction ID/Upload SS</label><br />
            <input type="text"  placeholder='Enter Your Transaction id'/>
            <p className='text-white mb-4 font-bold'>Or, Upload SS</p>
            <input className='bg-white rounded-lg shadow-md p-3' type="file" name="" id="" />
            </p>
          
            <p>
            <label>Your Name(optional)</label><br />
            <input type="text"  placeholder='Enter your Name'/>
            </p>
           
            <p>
            <label>Payment Details</label><br />
            <input type="text"  placeholder='Your Wallet Address'/>
            </p>
            <button className='hover:bg-red-700 submit_button'><input type="submit" value="Submit" /></button>
        </form>
    </div>
  )
}

export default BuyForm