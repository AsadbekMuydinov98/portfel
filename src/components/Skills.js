
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {


  return (
    <section className="skill skills" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <div className="content row">
                        <div className="column col-left reveal ">
                          <h2 className="content-title">My Skills and Experiences</h2>
                          <p>
                            I am a versatile web developer with a penchant for hard working. With 3-4 years of experience in the industry, I have honed I craft through a combination of formal education and hands-on practice. I thrive on challenges and are dedicated to delivering exceptional results in every endeavor. These are the technologies I have learned and use. 
                          </p>
                        </div>
                        <div className="column col-right reveal ">
                          <div className="bar">
                            <div className="info">
                              <span>NextJs</span>
                              <span>60%</span>
                            </div>
                            <div className="line nextjs"></div>
                          </div>
                          <div className="bar">
                            <div className="info">
                              <span>ReactJs</span>
                              <span>75%</span>
                            </div>
                            <div className="line react"></div>
                          </div>
                          <div className="bar">
                            <div className="info">
                              <span>Javascript</span>
                              <span>75%</span>
                            </div>
                            <div className="line js"></div>
                          </div>
                          <div className="bar">
                            <div className="info">
                              <span>ExpressJs</span>
                              <span>50%</span>
                            </div>
                            <div className="line express"></div>
                          </div>
                          <div className="bar">
                            <div className="info">
                              <span>Nestjs</span>
                              <span>35%</span>
                            </div>
                            <div className="line nest"></div>
                          </div>
                          <div className="bar">
                            <div className="info">
                              <span>MongoDB</span>
                              <span>60%</span>
                            </div>
                            <div className="line mongo"></div>
                          </div>
                          <div className="bar">
                            <div className="info">
                              <span>TailwindCss</span>
                              <span>65%</span>
                            </div>
                            <div className="line tailwind"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="fon" />
    </section>
  )
}
