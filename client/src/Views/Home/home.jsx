const Home = () => {
    return (
        <div>
            <div>
                {/* 1 section */}
                <div className="">
                    <h1>
                        Lorem Ipsum
                    </h1>
                    <span>
                        "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
                        consectetur, adipisci velit..."
                        "There is no one who loves pain itself, who seeks after it and wants to have it,
                        simply because it is pain..."
                    </span>
                    <a href="/contact">
                        <button >Connect Now</button>
                    </a>
                    <a href="/service">
                        <button >Learn More</button>
                    </a>
                </div>
                <div className="">
                    <img src="/images/homePage.png" alt="this is a image" width="200" height="200" />
                </div>
            </div>
            {/* 2 section */}
            <div className="section-analytics">
                <div>
                    <div>
                        <h2>50+</h2>
                        <p>Registered Companies</p>
                    </div>
                    <div>
                        <h2>10,000</h2>
                        <p>Happy Clients</p>
                    </div>
                    <div>
                        <h2>500+</h2>
                        <p>Well known Developers</p>
                    </div>
                    <div>
                        <h2>24/7</h2>
                        <p>Service</p>
                    </div>
                </div>

            </div>
            {/* 3 section */}
            <div>
                <div className="">
                    <img src="/images/homePage.png" alt="this is a image" width="200" height="200" />
                </div>
                <div className="">
                    <h1>
                        Lorem Ipsum
                    </h1>
                    <span>
                        "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
                        consectetur, adipisci velit..."
                        "There is no one who loves pain itself, who seeks after it and wants to have it,
                        simply because it is pain..."
                    </span>
                    <a href="/contact">
                        <button >Connect Now</button>
                    </a>
                    <a href="/service">
                        <button >Learn More</button>
                    </a>
                </div>
            </div>
        </div>
    )
}
export default Home