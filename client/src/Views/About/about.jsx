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
                       It has survived not only five centuries, but also the leap into electronic typesetting, 
                       remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
                       sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
                       like Aldus PageMaker including versions of Lorem Ipsum.
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