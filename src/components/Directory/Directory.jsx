import React from 'react'
import Menuitem from '../Menuitem/Menuitem'


class Directory extends React.Component {
  constructor(){
    super()
    this.state = {
        sections: [
            {
                title:"hats",
                imageUrl:"https://blog.lids.com/wp-content/uploads/2018/09/Outside-the-US-3.jpg",
                id:1,
                linkUrl:""
            },
            {
                title:"jackets",
                imageUrl:"https://media.istockphoto.com/id/1134408245/photo/little-boys-child-size-jackets-coats-and-sweaters-hanging-in-a-kids-closet-with-colorful.jpg?s=612x612&w=0&k=20&c=_tDiqcDv1IZ_KyadbtlaBHgSc_q9yQAn7MmxRJ-MxHs=",
                id:2,
                linkUrl:""
            },
            {
                title:"sneakers",
                imageUrl:"https://media.king5.com/assets/KING/images/b8f87984-cbb4-41ba-a619-4a86942e12e0/b8f87984-cbb4-41ba-a619-4a86942e12e0_1920x1080.jpg",
                id:3,
                linkUrl:""
            },
            {
                title:"womens",
                size:"large",
                imageUrl:"https://img.freepik.com/free-photo/studio-close-up-portrait-young-fresh-blonde-woman-brown-straw-poncho-wool-black-trendy-hat-round-glasses-looking-camera-green-leather-had-bag_273443-1121.jpg",
                id:4,
                linkUrl:""
            },
            {
                title:"mens",
                size:"large",
                imageUrl:"https://manofmany.com/wp-content/uploads/2016/02/what-people-need-to-know-about-mens-fashion-week.jpg",
                id:5,
                linkUrl:""
            }
        ]
    }
  }

  render(){
    return(
        <div className='w-full flex flex-wrap'>
            {
                this.state.sections.map(({ id, ...otherSectionProps})=>(
                    <Menuitem key={id} {...otherSectionProps} />
                ))
            }
        </div> 
    )
  }
}

export default Directory