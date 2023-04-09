import CartDrawer from '@/Components/CommonComponents/CartDrawer/CartDrawer'
import { useState } from 'react'
import { BsHandbagFill } from 'react-icons/bs'
function FlotingCart() {

  const [openDrawer, setOpenDrawer] = useState(false);


  return (
    <div onClick={()=> setOpenDrawer(!openDrawer)} className="h-24 w-[75px] bg-gray-200 rounded-md">
      <div className=' p-2 '>
        <BsHandbagFill className='text-center mx-auto text-xl text-primary font-bold'></BsHandbagFill>
        <p className='text-sm text-center pt-2 '>0 items</p>
      </div>
      <div className='bg-green-700 py-2 rounded-b-md'>
        <p className='text-center text-white'>$00.00</p>
      </div>
      <CartDrawer
        openDrawer={openDrawer}
        setOpenDrawer={setOpenDrawer}
      ></CartDrawer>
    </div>
  )
}

export default FlotingCart