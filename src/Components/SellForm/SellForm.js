import React from 'react'
import { useForm } from 'react-hook-form';
import "./SellForm.css";

function SellForm() {
  const { register, handleSubmit ,watch,reset} = useForm({
    defaultValues:{
      currency:"BFIC",
      paymentMethod:"Bkash"
    }
  });
  const onSubmit = (data) => {

    console.log(data);
    reset()
  };

const currencyOptionValue=watch("currency");
const paymentMethodOptionValue=watch("paymentMethod");

  return (
    <>
      <h2 className='font-bold text-center text-white text-3xl mx-5 mb-4'>Sell Your Token Now!</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-xl mx-auto 
      p-4 sm:p-8 md:p-12 lg:p-16 border-4 border-white rounded-3xl shadow-md bg-gray-900 SellForm-container_main">
            
          <p>
            <label className='ml-1' htmlFor="payment">Currency</label><br />

          <select {...register("currency")} className='class="w-full block px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm' id="payment">
         
            <option value="BFIC">BFIC</option>
            <option value="BLove">BLove</option>
           
          </select>
          <div >
            {currencyOptionValue === 'BFIC' && <span className='text-white'>You have selected BFIC</span>}
          {currencyOptionValue === 'BLove' && <span className='text-white'>You have selected BLove</span>}
            </div>
            </p>
            

            <p>
            <label htmlFor='wallet-address'>Wallet Address</label><br />
            <input {...register("walletAddress")} className='w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500' type="text" id='wallet-address'  
            value={ 
              currencyOptionValue === 'BFIC' ? "BFIC@hlaflajlfd" : currencyOptionValue==="BLove" ? "Blove@ljafldj" : "BFIC@hlaflajlfd"

            }
            readOnly
            />
             
            </p>

            <p >
            <label htmlFor='amount'>Amount</label><br />
            <input type="number" {...register("amount", { min: 1, },{required:true})} className='w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500'     placeholder='Enter Your amount' id='amount'/>
            </p>
            <p>
            <p>
            <label className='font-bold'>Transaction ID</label><br />
            <input {...register("transactionID",{ required: true })} className='w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500' type="text"  placeholder='Enter Your Transaction id' />
            </p>
            
            <p className=' text-white mb-4 font-bold'>
              <label htmlFor="uploadSS">Or, Upload SS</label>
            <input {...register("uploadedSS")}  className="w-auto ml-3 sm:w-2/3 py-2 px-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white p-3"   type="file" name="" id="" />
            </p>
            </p>
            <p>
            <label htmlFor='active-phone'>Active Phone Number</label><br />
            <input {...register("phoneNumber",{ required: true })} className='w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500' type="tel" id='active-phone' placeholder='Enter Your Phone Number'/>
            </p>
           
            <p >
            <label htmlFor='sale-date'>Date Of Sale</label><br />
            <input {...register("sellingDate")} className='w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500' type="date" id='sale-date'  defaultValue={new Date().toISOString().slice(0,10)} readOnly  />
            </p>
            <p className='w-full sm:w-1/2 lg:w-1/3 p-2'>
            <label htmlFor="payment">Payment Method:</label><br />

            <select {...register("paymentMethod")}  className='bg-gray-700 text-white text-bold text-md rounded '  id="payment">
            <option   value="Bkash">Bkash</option>
            <option value="Nagad" >Nagad</option>
            <option value="Bank Transfer" >Bank Transfer</option>
            </select>
           
            </p>
            <div style={{marginTop:"-15px"}}  className='text-white '>
              {
                paymentMethodOptionValue==="Bkash" && <p className=' '>Bkash Agent Number: 017999999999</p>
              }
              {
                paymentMethodOptionValue === "Nagad" && <p>Nagad Agent Number: 01877777777</p>
              }
              {
                paymentMethodOptionValue ==="Bank Transfer" && <p className='display-block'>Bank Transfer ID: bank@id.trade</p>
              }
            </div>
            
            <p>
            <label >Payment Details</label><br />
            
            <textarea {...register("paymentDetails" )} className='w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500' name="fieldname" rows="3" cols="50" maxLength="180" placeholder='write your payment details'></textarea>
            </p>
            <div >
            <input type="submit" className='text-white   bg-green-700 border-2 ml-2 px-12 py-2 rounded cursor-pointer'   value="Submit" />
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

// BFIC Blove BD wallet
// */