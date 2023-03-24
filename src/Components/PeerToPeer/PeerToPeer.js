import React from 'react'
import { useForm } from 'react-hook-form';

function PeerToPeer() {
  const { register, handleSubmit ,watch,reset} = useForm({
    defaultValues:{
      currency:"BFIC",
      buyOrSell:"buy"
    }
  });

  const onSubmit = (data) => {

    console.log(data);
    reset()
  };

//   const currencyOptionValue=watch("currency");
// const buyOrSellOptionValue=watch("buyOrSell");

// const coinRate={
//   if(currencyOptionValue ==="BFIC" &&buyOrSellOptionValue==="buy" ) {
//     "bfic buying rate $3223"
//   }
//     if(currencyOptionValue ==="BFIC" &&buyOrSellOptionValue==="sell"){
//       "bfic coin rate for selling $345"
//     }
    
//     if(currencyOptionValue ==="BLove" &&buyOrSellOptionValue==="buy"){
//       "blove buying rate $543"
//     } 
//     if (currencyOptionValue ==="BLove" &&buyOrSellOptionValue==="sell"){
//       "blove selling rate $576"
//     }  
// }

  return (
    <>
    <h2 className='font-bold text-center text-white text-3xl mx-5 mb-4'>Peer To Peer(P2P)</h2>
    
    <form onSubmit={handleSubmit(onSubmit
    )} className="max-w-xl mx-auto 
      p-4 sm:p-8 md:p-12 lg:p-16 border-4 border-white rounded-3xl shadow-md bg-gray-900 SellForm-container_main ">

      <div className='flex justify-center gap-4'>
      <p>
            <label for="payment"></label><br />
          <select {...register("currency")}  className='class="w-full block px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm' id="payment">
            <option value="BFIC">BFIC</option>
            <option value="BLove">Blove</option>
  
          </select>
            </p>
            
            <p>
            <label for="payment"></label><br />
          <select {...register("buyOrSell")} className='class="w-full block px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm' id="payment">
            <option value="buy">Buy</option>
            <option value="sell">Sell</option>
  
          </select>
            </p>
      </div>

            <p >
            <label>Per Coin Rate</label><br />
            <input className='w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500' type="number" step="0.01" min="10" max="100" required  
            
            />
            </p>
           
            <p>
            <label>Active Phone Number</label><br />
            <input className='w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500' type="text"  placeholder='Enter Your Phone Number'/>
            </p>
            
            <div >
            <input  className='text-white   bg-green-700 border-2 ml-2 px-12 py-2 rounded cursor-pointer'  type="submit" value="Submit" />
            </div>
        </form>

    </>
  )
}

export default PeerToPeer