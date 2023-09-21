import React from 'react'

const CollectionItems = ({id, name, price, imageUrl}) => {
  return (
    <div className='w-[22%] flex flex-col h-[350px] items-center bg-amber-300 rounded pb-2 shadow-xl'>
        <div style={{backgroundImage:`url(${imageUrl})`}} className='w-full h-[95%] bg-cover bg-center m-[5px]' />
        <div className='w-[100%] h-[5%] flex justify-between text-base font-semibold px-3 '>
            <span className='w-[90%] font-condensed'>{name}</span>
            <span className='w-[10%] font-condensed '>{price}</span>
        </div>
    </div>
  )
}

export default CollectionItems