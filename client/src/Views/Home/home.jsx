const Home = () => {
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
                                <button className="wgbtn">Learn More</button>
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
            <div className="section-analytics p-4 col-12">
                <div className="col-3">
                    <h2>50+</h2>
                    <p>Registered Companies</p>
                </div>
                <div className="col-3">
                    <h2>10,000</h2>
                    <p>Happy Clients</p>
                </div>
                <div className="col-3">
                    <h2>500+</h2>
                    <p>Well known Developers</p>
                </div>
                <div className="col-3">
                    <h2>24/7</h2>
                    <p>Service</p>
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