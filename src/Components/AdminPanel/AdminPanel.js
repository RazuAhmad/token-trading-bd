import React from 'react'
import { useForm, useWatch } from "react-hook-form";



function AdminPanel() {

  const { register, watch } = useForm();
  const selectedOption = watch("mySelectField");

  return (
    <form>
      <label htmlFor="mySelectField">Select an option:</label>
      <select id="mySelectField" {...register("mySelectField")}>
        <option value="BFIC">BFIC</option>
        <option value="BLove">BLove</option>
        
      </select>
      <label htmlFor="myInputField">Input field:</label>
      <input id="myInputField" type="text" value={selectedOption==="BFIC" ? "BFIc@lajfl" : selectedOption==="BLove" ? "BLove@alkflasdj": "BFIc@lajfl"} readOnly {...register("myInputField")} />
    </form>
  );

}

export default AdminPanel