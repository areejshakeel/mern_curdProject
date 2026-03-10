import { useState } from "react"
import {useNavigate} from "react-router-dom"

const register = () => {
    const navigate= useNavigate()
    const [registerform, setRegisterForm] = useState({
        username: "",
        email: "",
        phone: "",
        password: ""
    })
    const handleInputField = (e) => {
        let name = e.target.name
        let value = e.target.value
        setRegisterForm({
            ...registerform,
            [name]: value
        })
    }
    const handleSubmit = async (e) => {
        try {
            e.preventDefault()
            console.log(registerform)
            const response = await fetch(`http://localhost:5000/api/auth/register`, {
                method: "POST",
                headers: {
                    'Content-Type': "application/json"
                },
                body: JSON.stringify(registerform)
            })
            console.log(response, "response")
            if (response.ok) {
                setRegisterForm({
                    username: "",
                    email: "",
                    phone: "",
                    password: ""
                })
                navigate("/login")
            }
        } catch (error) {
            console.log(error, "registerform")
        }
    }

    return (
        <div>
            <div className="">
                <img src="/images/perfoume.jpg" alt="this is a image" width="200" height="200" />
            </div>
            <div className="">
                <h1>Registration Form</h1>
                <br />
                <form onSubmit={handleSubmit}>
                    <label htmlFor="username">UserName</label>
                    <input name="username"
                        type="text"
                        id="username"
                        placeholder="Enter Username"
                        required
                        autoComplete="off"
                        onChange={handleInputField}
                        value={registerform.username} ></input>
                    <br />
                    <label htmlFor="email" >Email</label>
                    <input name="email" type="email"
                        id="email"
                        placeholder="Enter Email"
                        required
                        autoComplete="off"
                        onChange={handleInputField}
                        value={registerform.email} ></input>
                    <br />
                    <label htmlFor="password">Password</label>
                    <input name="password" id="password"
                        type="text"
                        placeholder="Enter Password"
                        required
                        autoComplete="off"
                        onChange={handleInputField}
                        value={registerform.password} ></input>
                    <br />
                    <label htmlFor="phone">Phone</label>
                    <input name="phone" type="number"
                        id="phone"
                        placeholder="Enter Phone number"
                        required
                        autoComplete="off"
                        onChange={handleInputField}
                        value={registerform.phone} ></input>
                    <br />
                    <button type="submit">Register Now</button>
                </form>
            </div>
        </div>
    )
}
export default register