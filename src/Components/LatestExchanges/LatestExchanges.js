import React from 'react'

function LatestExchanges() {
  return (
  

<>
<form class="max-w-md mx-auto px-4">
  <label class="block mb-2 font-bold text-gray-700" for="username">
    Username
  </label>
  <input class="w-full py-2 px-4 mb-6 leading-tight border border-gray-500 rounded appearance-none focus:outline-none focus:border-gray-800" id="username" type="text" placeholder="Username"/>

  <label class="block mb-2 font-bold text-gray-700" for="password">
    Password
  </label>
  <input class="w-full py-2 px-4 mb-6 leading-tight border border-gray-500 rounded appearance-none focus:outline-none focus:border-gray-800" id="password" type="password" placeholder="Password"/>

  <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
    Sign In
  </button>
</form>

</>

  )
}

export default LatestExchanges