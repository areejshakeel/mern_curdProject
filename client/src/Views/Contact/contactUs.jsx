import React, { useEffect, useState } from "react"
import { useAuth } from "../../store/auth"


const ContactUs = () => {
    const { authUser } = useAuth()
    const [fetchUser, setFetchUser] = useState(true)
    const [contactData, setContactData] = useState({
        username: "",
        email: "",
        message: ""
    })
    // useEffect(() => {
    //     if (fetchUser && authUser) {
    //         setContactData({
    //             username: authUser.username,
    //             email: authUser.email,
    //             message: ""
    //         })
    //         setFetchUser(false)
    //     }
    // }, [])

    const handleInputField = (e) => {
        let name = e.target.name
        let value = e.target.value
        setContactData({
            ...contactData,
            [name]: value
        })
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await fetch("http://localhost:5000/api/form/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(contactData)
            })
            if (response.ok) {
                const data= await response.json()
                console.log(data)
                alert("Message send successfully")
                setContactData({
                    username: "",
                    email: "",
                    message: ""
                })

            }
        } catch (error) {

        }

    }
    return (
        <div className="container_">
            <div className="row p-2 align-items-center">
                <div className="col-md-6 text-center">
                    <img src="/images/homePage.png" alt="this is a image"
                        style={{ border: "2px solid peru" }}
                        width="550" height="350" />
                </div>
                <div className="col-md-6">
                    <h1 className="contact-title">Contact Us</h1>
                    <form onSubmit={handleSubmit} className="contact-form">
                        <div className="form-group">
                            <label htmlFor="username" >Username</label>
                            <input name="username" type="text"
                                id="username"
                                placeholder="Enter Your name"
                                required
                                autoComplete="off"
                                onChange={handleInputField}
                                value={contactData.username} ></input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email" >Email</label>
                            <input name="email" type="email"
                                id="email"
                                placeholder="Enter Your Email"
                                required
                                autoComplete="off"
                                onChange={handleInputField}
                                value={contactData.email} ></input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea name="message" id="message"
                                type="text"
                                placeholder="Enter Your Message"
                                required
                                autoComplete="off"
                                onChange={handleInputField}
                                cols={30}
                                rows={5}
                                value={contactData.message} ></textarea>
                        </div>

                        <button className="wgbtn" type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default ContactUs