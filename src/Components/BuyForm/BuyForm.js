import React from "react";
import { useForm } from "react-hook-form";

function BuyForm() {

  const { register, handleSubmit ,watch,reset} = useForm({
    defaultValues:{
      currency:"BFIC",
    }
  });

  const currencyOptionValue=watch("currency");
  const paymentMethodOptionValue=watch("paymentMethod");

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <>
      <h2 className="font-bold text-center text-white text-3xl mx-5 mb-4">
        Buy Your Token Now!
      </h2>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="SellForm-container_main border-4 border-white rounded-3xl shadow-md bg-gray-900 max-w-xl  mx-auto 
      p-4 sm:p-8 md:p-12 lg:p-16 bg-white-700"
      >
        <p>
          <label htmlFor="currency">Select Currency</label>
          <select
            {...register("currency")}
            className='class="w-full block px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
            id="currency"
          >
            <option value="BFIC">BFIC</option>
            <option value="BLove">BLove</option>
          </select>
          <div >
            {currencyOptionValue === 'BFIC' && <span className='text-white'>You have selected BFIC</span>}
          {currencyOptionValue === 'BLove' && <span className='text-white'>You have selected BLove</span>}
            </div>
        </p>

        <p>
          <label htmlFor="amount">Amount</label>
          <br />
          <input
            {...register("amount",{min:1},{required:true})}
            className="w-full  py-2 px-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            type="number"
            id="amount"
            placeholder="Enter Your amount"
            required
          />
        </p>

        <p>
          <label htmlFor="wallet">Wallet Address</label>
          <br />
          <input
            {...register("walletAddress")}
            className="w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            type="text"
            id="wallet"
            value={
              currencyOptionValue === 'BFIC' ? "BFIC@hlaflajlfd" : currencyOptionValue==="BLove" ? "Blove@ljafldj" : "BFIC@hlaflajlfd"
            }
           readOnly
          />
        </p>

        <p>
          <label htmlFor="phone">Active Phone Number</label>
          <br />
          <input
            {...register("activePhone",{required:true})}
            className="w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            type="tel"
            id="phone"
            placeholder="Enter Your Phone Number"
            required
          />
        </p>

        <p>
          <label htmlFor="paymentMethod">Payment Method:</label>
          <br />
          <select
            {...register("paymentMethod")}
            className="bg-gray-700 text-white text-bold rounded rounded-5"
            id="paymentOption"
          >
            <option value="Bkash">Bkash</option>
            <option value="Nagad">Nagad</option>
            <option value="Bank Transfer">Bank Transfer</option>
          </select>
        </p>
        <div style={{marginTop:"-12px"}} className='text-white '>
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
          <label>Date of Buy</label>
          <br />
          <input
            className="w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            type="date"
            defaultValue={new Date().toISOString().slice(0, 10)}
            {...register("buyingDate")}
            readOnly
          />
        </p>

        <div>
          <input
            className="text-white  bg-green-700 border-2 border-red-450 px-12 py-2 rounded cursor-pointer"
            type="submit"
            value="Submit"
          />
        </div>
      </form>
    </>
  );
}

export default BuyForm;
