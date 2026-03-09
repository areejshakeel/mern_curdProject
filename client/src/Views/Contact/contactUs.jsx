import React, { useState } from "react"


const ContactUs = () => {
    const [contactData, setContactData] = useState({
        username: "",
        email: "",
        message: ""
    })
    const handleInputField = (e) => {
        let name = e.target.name
        let value = e.target.value
        setContactData({
            ...contactData,
            [name]: value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(contactData)
    }
    return (
        <div className="container_">
            <div className="d-flex justify-content-center">
                <div className="row m-3 align-items-center">
                    <div className="col-md-6">
                        <img src="/images/homePage.png" alt="this is a image"
                            style={{ border: "2px solid peru" }}
                            width="550" height="350" />
                    </div>
                    <div className="col-md-6">
                        <h1>hello ContactUs page</h1>
                        <form onSubmit={handleSubmit}>
                            <label htmlFor="username" >Username</label>
                            <input name="username" type="text"
                                id="username"
                                placeholder="Enter Your name"
                                required
                                autoComplete="off"
                                onChange={handleInputField}
                                value={contactData.username} ></input>
                            <br />
                            <label htmlFor="email" >Email</label>
                            <input name="email" type="email"
                                id="email"
                                placeholder="Enter Your Email"
                                required
                                autoComplete="off"
                                onChange={handleInputField}
                                value={contactData.email} ></input>
                            <br />
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
                            <br />

                            <button type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ContactUs