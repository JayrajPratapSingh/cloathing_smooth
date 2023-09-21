import React from 'react'
import CollectionItems from '../collection-items/CollectionItems'
const PreviewCollection = ({title, items}) => {
  return (
    <div className='flex flex-col mb-[30px]'>
        <h1 className='uppercase font-semibold font-condensed text-[28px] my-4 px-20'>{title}</h1>
        <div className='flex justify-between px-20 py-4' >
             {
                items.filter((item, idx)=> idx < 4).map(({id, ...otherItemPorps}) => (
                    <CollectionItems key={id} {...otherItemPorps} />
                ))
             }
        </div>
    </div>
  )
}

export default PreviewCollection