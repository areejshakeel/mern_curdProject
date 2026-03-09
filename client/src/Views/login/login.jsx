import React,{useState} from "react"

const login = () =>{
     const [logindata,setLoginData] = useState({
           email:"",
           password:""
       })
       const handleInputField = (e) => {
           let name=e.target.name
           let value=e.target.value
           setLoginData({
               ...logindata,
               [name]:value
           })
       }
       const handleSubmit = (e) => {
           e.preventDefault()
           console.log(logindata)
       }
       return (
           <div>
               <div className="">
                   <img src="/images/perfoume.jpg" alt="this is a image" width="200" height="200" />
               </div>
               <div className="">
                   <h1>Login Form</h1>
                   <br/>
                   <form onSubmit={handleSubmit}>
                       <label htmlFor="email" >Email</label>
                       <input name="email" type="email"
                       id="email"
                       placeholder="Enter Your Email" 
                       required
                       autoComplete="off"
                        onChange={handleInputField}
                        value={logindata.email} ></input>
                        <br/>
                       <label htmlFor="password">Password</label>
                       <input name="password" id="password"
                        type="text"
                       placeholder="Enter Your Password" 
                       required
                       autoComplete="off"
                        onChange={handleInputField}
                        value={logindata.password} ></input>
                        <br/>
                      
                        <button type="submit">login Now</button>
                   </form>
               </div>
           </div>
       )
}
export default login