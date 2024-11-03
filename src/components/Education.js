import diploma from "../assets/img/diploma.jpg"; // Add an appropriate diploma or education-related image
import graduation from "../assets/img/graduation.jpeg"; // Add a graduation cap image
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png";

export const Education = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 3
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="education" id="education">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="education-bx wow zoomIn">
              <h2>Education</h2>
              <p>Here are some of my educational qualifications that have shaped my journey.<br /> I am continuously learning and growing in my field.</p>
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme education-slider">
                <div className="item">
                  <img src={diploma} alt="Diploma" className="fade-in" />
                  <h5>Bachelor of Technology in Data Science and Artificial Intelligence</h5>
                  <p>IIIT Naya Raipur, Chhattisgarh (2022-2026)</p>
                  <span>My coursework covers software development, data structures and algorithms, deep learning, mathematics, cryptography, distributed systems, graph algorithms, machine learning, and data science.</span>
                  <p>CGPA: <strong>9.08</strong> (Current)</p> {/* Update with your actual CGPA */}
                </div>
                <div className="item">
                  <img src={graduation} alt="Graduation" className="fade-in" />
                  <h5>CBSE: Higher Secondary School (10th, 12th)</h5>
                  <p>Delhi Public School, NTPC Korba (2019-2022)</p>
                  <span>In high school, my coursework covered mathematics, physics, chemistry, and computer science with Python. Also served as an academic coordinator, helping organize academic events.</span>
                  <p>Percentage: <strong>97.00</strong> (10th), <strong>93.2</strong> (12th)</p> {/* Update with your actual CGPA */}
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
}
