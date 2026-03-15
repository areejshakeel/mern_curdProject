import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../../store/auth"
import { toast } from "react-toastify"

const login = () => {
    const {storeTokenInLS} = useAuth()
    const navigate = useNavigate()
    const [logindata, setLoginData] = useState({
        email: "",
        password: ""
    })
    const handleInputField = (e) => {
        let name = e.target.name
        let value = e.target.value
        setLoginData({
            ...logindata,
            [name]: value
        })
    }
    const handleSubmit = async (e) => {
        try {
            e.preventDefault()
            const response = await fetch("http://localhost:5000/api/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(logindata)
            })
            if (response.ok) {
                const resp_data = await response.json()
                storeTokenInLS(resp_data.token)
                alert("Login Successfully")
                setLoginData({
                    email: "",
                    password: ""
                })
                navigate("/")
            }
            else {
                alert("Invalid Credentails")
            }
        } catch (error) {
            console.log(error, "login-side")
        }

    }
    return (
        <div>
            <div className="">
                <img src="/images/perfoume.jpg" alt="this is a image" width="200" height="200" />
            </div>
            <div className="">
                <h1>Login Form</h1>
                <br />
                <form onSubmit={handleSubmit}>
                    <label htmlFor="email" >Email</label>
                    <input name="email" type="email"
                        id="email"
                        placeholder="Enter Your Email"
                        required
                        autoComplete="off"
                        onChange={handleInputField}
                        value={logindata.email} ></input>
                    <br />
                    <label htmlFor="password">Password</label>
                    <input name="password" id="password"
                        type="text"
                        placeholder="Enter Your Password"
                        required
                        autoComplete="off"
                        onChange={handleInputField}
                        value={logindata.password} ></input>
                    <br />

                    <button type="submit">login Now</button>
                </form>
            </div>
        </div>
    )
}
export default login