const About = () =>{
    return (
       <div className="container_">
            <div className="row m-3 align-items-center">
                <div className="col-md-6">
                    <h1>
                        Lorem Ipsum
                    </h1>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                      when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                      </p>
                      <p>
                       It has survived not only five centuries, but also the leap into electronic typesetting, 
                       remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
                       sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
                       like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
                        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
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
                            alt="this is a image" width="600" height="350" />
                </div>
            </div>
       </div>
    )
}
export default About