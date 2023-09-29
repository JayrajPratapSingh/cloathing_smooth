import React from 'react'

class ContactUs extends React.Component {
    constructor() {
        super();
        this.state = {
          displayName:"",
          email: "",
          password: "",
          confirmPassword:""
        };
      }
      handleSubmit = event =>{
        event.preventDefault();
        this.setState({
            name:"",
            email:"",
            message:""
            
        })
      }
      handleChange = event =>{
        const{value, name} = event.target;
        this.setState({[name]:value})
      }
  
    render() {
      return (
        <div
          style={{
            backgroundImage: `url("https://img.freepik.com/free-photo/black-friday-elements-assortment_23-2149074076.jpg?w=900&t=st=1695457540~exp=1695458140~hmac=36bfe9ae1599908a2f9b781d640d4bb6660d7edace4a677850c66ea574445b72")`,
          }}
          className="w-[100%] h-[580px]  flex justify-center items-center bg-cover bg-center"
        >
          <div className="bg-orange-500 w-[80%] md:w-[30%] h-auto   p-5  rounded-lg shadow-[0_35px_60px_-15px_rgba(0,0,0,1)]">
            <form className="w-full ">
              <div className=" flex justify-center text-3xl text-white font-condensed font-extrabold underline">
                CONTACT US
              </div>
              <div className="flex flex-col justify-center mt-3 font-condensed rounded-lg p-1">
                <input
                  type="text"
                  placeholder="Display Name"
                  name="displayName"
                  value={this.state.name}
                  onChange={this.handleChange}
                  className="border-2px  m-2 p-1 font-semibold text-orange-500 rounded-lg border-b-2"
                />
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                  className="border-2px m-2 p-1 font-semibold text-orange-500 rounded-lg  border-b-2"
                />
                <textarea
                  
                  placeholder="Your Message Here"
                  name="message"
                  value={this.state.message}
                  onChange={this.handleChange}
                  className="border-2px h-28  m-2 p-1 font-semibold text-orange-500 rounded-lg border-b-2"
                />
               
                <button className="bg-white p-1 rounded-lg text-orange-500 font-semibold font-condensed mx-2 mt-7  hover:bg-orange-200 duration-500">
                  Send
                </button>
              </div>
              
             
            </form>
          </div>
        </div>
      );
    }
}

export default ContactUs;