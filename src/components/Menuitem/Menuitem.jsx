import React from 'react'
import { Link } from 'react-router-dom'
import "./Menuitem.scss"
const Menuitem = ({title, imageUrl, size, linkUrl}) => {
  return (
        <Link to={`${linkUrl}`} style={{backgroundImage: `url(${imageUrl})`}} className={`${size} menu-item hover:cursor-pointer  w-[30%] h-60 flex flex-auto felx-1 items-center justify-center mx-2 my-2 rounded-xl bg-center bg-cover scale-100 ease-in-out duration-1000 hover:-translate-y-2 shadow-md`} >
       <div className=" w-[130px] h-16 border-solid  rounded-xl flex flex-col items-center justify-center bg-white bg-opacity-70 ">
            <h1 className='uppercase text-amber-800 font-semibold  font-condensed'>{title}</h1>
            <h4 className='text-amber-800   font-condensed'>SHOP NOW</h4>
          </div>
        </Link>
  )
}

export default Menuitem ;