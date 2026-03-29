import React from "react"
// import { toast,Bounce } from "react-toastify"

const Home = () => {
//    const notify = () => {
//     toast.error("Login Successful!", {
//       position: "top-right",
//       autoClose: 3000,
//       transition: Bounce
//     });
//   };
let num =[1,2,3]
console.log(num,"num")
console.log(num.length,"num.length")
delete num[0]
console.log(num,"num")
console.log(num.length,"num.length")
    return (
        <div className="container_">
            {/* 1 section */}
            <div className="d-flex justify-content-center">
                <div className="row m-3 align-items-center">
                    <div className="col-md-6">
                        <h1>Lorem Ipsum</h1>
                        <p>
                            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
                            consectetur, adipisci velit..."
                            "There is no one who loves pain itself, who seeks after it and wants to have it,
                            simply because it is pain..."
                        </p>

                        <div className="d-flex justify-content-end gap-2">
                            <a href="/contact">
                                <button className="wganimate-btn">Connect Now</button>
                            </a>
                            <a href="/service">
                                <button className="wgbtn" >Learn More</button>
                            </a>
                        </div>
                    </div>
                    <div className="col-md-6 text-center">
                        <img src="/images/home1.jpg" className="imagebox"
                            alt="this is a image" width="550" height="300" />
                    </div>
                </div>
            </div>
            {/* 2 section */}
            <div id="section2">
                <div className="row mx-5 my-4 boxdiv">
                    <div className="col insightReport-box">
                        <i className="fa-solid fa-building report-icon"></i>
                        <label>50+</label>
                        <span>Registered Companies</span>
                    </div>

                    <div className="col insightReport-box">
                        <i className="fa-solid fa-users report-icon"></i>
                        <label>10,000</label>
                        <span>Happy Clients</span>
                    </div>

                    <div className="col insightReport-box">
                        <i className="fa-solid fa-code report-icon"></i>
                        <label>500+</label>
                        <span>Well known Developers</span>
                    </div>

                    <div className="col insightReport-box">
                        <i className="fa-solid fa-headset report-icon"></i>
                        <label>24/7</label>
                        <span>Service</span>
                    </div>
                </div>
            </div>

            {/* 3 section */}
            <div className="d-flex justify-content-center align-items-center">
                <div className="row m-3 align-items-center">
                    <div className="col-md-6 text-center">
                        <img src="/images/homePage.png" alt="this is a image"
                            className="imagebox"
                            width="500" height="300" />
                    </div>
                    <div className="col-md-6">
                        <h1>
                            Lorem Ipsum
                        </h1>
                        <p>
                            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
                            consectetur, adipisci velit..."
                            "There is no one who loves pain itself, who seeks after it and wants to have it,
                            simply because it is pain..."
                        </p>
                        <div className="d-flex justify-content-end gap-2">
                            <a href="/contact">
                                <button className="wganimate-btn">Connect Now</button>
                            </a>
                            <a href="/service">
                                <button className="wgbtn">Learn More</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home