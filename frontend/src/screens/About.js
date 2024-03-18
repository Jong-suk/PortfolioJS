import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { Image } from 'react-bootstrap';

const About = () => {
  const [imageUrl, setImageUrl] = useState('');
  const [pdfUrl, setPdfUrl] = useState('');

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await fetch('/api/about/image');
        const data = await response.blob();
        const url = URL.createObjectURL(data);
        setImageUrl(url);
      } catch (error) {
        console.error('Error fetching image:', error);
      }
    };

    fetchImage();
  }, []);

  useEffect(() => {
    
    const fetchPdf = async () => {
      try {
        const response = await fetch('/api/about/pdf'); 
        const blob = await response.blob();
        const cv = URL.createObjectURL(blob);
        setPdfUrl(cv);
      } catch (error) {
        console.error('Error fetching PDF:', error);
      }
    };

    fetchPdf();
  }, [])

  useEffect(() => {
    const aboutSection = document.querySelector(".about-section");
    const tabsContainer = document.querySelector(".about-tabs");

    tabsContainer.addEventListener("click", (event) => {
      if (
        event.target.classList.contains("tab-item") &&
        !event.target.classList.contains("active")
      ) {
        const target = event.target.getAttribute("data-target");
        tabsContainer
          .querySelector(".active")
          .classList.remove("outer-shadow", "active");
        event.target.classList.add("active", "outer-shadow");
        aboutSection
          .querySelector(".tab-content.active")
          .classList.remove("active");
        aboutSection.querySelector(target).classList.add("active");
      }
    });
  }, []);

  return (
    <section className="about-section section" id="about">
      <div className="container">
        <div className="row">
          <div className="section-title">
            <h2 data-heading="main info">About Me</h2>
          </div>
        </div>
        <div className="row">
          <div className="about-img">
            <div className="img-box inner-shadow">
              <Image src={ imageUrl } className="outer-shadow" alt="profile picture" />
            </div>
            <div className="social-links">
              <Link to="https://wa.me/918553779725" className="outer-shadow hover-in-shadow" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-whatsapp"></i>
              </Link>
              <Link to="https://www.salesforce.com/trailblazer/abhu67" className="outer-shadow hover-in-shadow" target="_blank" rel="noopener noreferrer">
                <i className="fas fa-mountain"></i>
              </Link>
              <Link to="https://github.com/Jong-suk" className="outer-shadow hover-in-shadow" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </Link>
              <Link to="https://www.linkedin.com/in/abhuthahirkhan/" className="outer-shadow hover-in-shadow" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin-in"></i>
              </Link>
            </div>
          </div>
          <div className="about-info">
            <p><span>Hi! My name is Abhuthahir. I am a Fresher & an Enthusiastic Learner.</span></p>
            <br />
            <ul>
              <li>My full name is 'Mohamed Abhuthahir Khan I' and I am 22 years old.</li>
              <li>I have done 6 months of internship in AdaptIQ gaining knowledge in Salesforce Technology.</li>
              <li>I have currently completed my undergraduate studies in the field of Computer Science and Engineering in Sona College Of Technology, Salem, Tamil Nadu, India.</li>
              <li>I am mainly confident in my ability to Analyze problems and Code solutions accordingly.</li>
            </ul>
            <a href={pdfUrl} className="btn-1 outer-shadow hover-in-shadow" target="blank">Download CV</a>
            <Link to="/contact" className="link-item btn-1 outer-shadow hover-in-shadow">Hire Me</Link>
          </div>
        </div>

      {/* About Tab Start */}
        <div className="row">
          <div className="about-tabs">
            <span className="tab-item outer-shadow active" data-target=".skills">skills</span>
            <span className="tab-item" data-target=".experience">learning experience</span>
            <span className="tab-item" data-target=".education">education</span>
            <span className="tab-item" data-target=".work">work</span>
          </div>
        </div>
      {/* About Tab End */}

      {/* <!--Skills Start--> */}
      <div className="row">
        <div className="skills tab-content active">
          <div className="row">
            {/* <!--Skill-item Start--> */}
            <div className="skill-item">
              <p>SQL</p>
              <div className="progress inner-shadow">
                <div className="progress-bar" style={{width: 'calc(60% - 14px)'}}>
                  <span>60%</span>
                </div>
              </div>
            </div>
            {/* <!--Skill-item End-->
            <!--Skill-item Start--> */}
            <div className="skill-item">
              <p>React JS</p>
              <div className="progress inner-shadow">
                <div className="progress-bar" style={{width: 'calc(80% - 14px)'}}>
                  <span>80%</span>
                </div>
              </div>
            </div>
            {/* <!--Skill-item End-->
            <!--Skill-item Start--> */}
            <div className="skill-item">
              <p>bootstrap</p>
              <div className="progress inner-shadow">
                <div className="progress-bar" style={{width: 'calc(60% - 14px)'}}>
                  <span>60%</span>
                </div>
              </div>
            </div>
            {/* <!--Skill-item End-->
            <!--Skill-item Start--> */}
            <div className="skill-item">
              <p>C</p>
              <div className="progress inner-shadow">
                <div className="progress-bar" style={{width: 'calc(75% - 14px)'}}>
                  <span>60%</span>
                </div>
              </div>
            </div>
            {/* <!--Skill-item End-->
            <!--Skill-item Start--> */}
            <div className="skill-item">
              <p>C++</p>
              <div className="progress inner-shadow">
                <div className="progress-bar" style={{width: 'calc(60% - 14px)'}}>
                  <span>75%</span>
                </div>
              </div>
            </div>
            {/* <!--Skill-item End-->
            <!--Skill-item Start--> */}
            <div className="skill-item">
              <p>CSS</p>
              <div className="progress inner-shadow">
                <div className="progress-bar" style={{width: 'calc(75% - 14px)'}}>
                  <span>75%</span>
                </div>
              </div>
            </div>
            {/* <!--Skill-item End-->
            <!--Skill-item Start--> */}
            <div className="skill-item">
              <p>java</p>
              <div className="progress inner-shadow">
                <div className="progress-bar" style={{width: 'calc(75% - 14px)'}}>
                  <span>75%</span>
                </div>
              </div>
            </div>
            {/* <!--Skill-item End-->
            <!--Skill-item Start--> */}
            <div className="skill-item">
              <p>JavaScript</p>
              <div className="progress inner-shadow">
                <div className="progress-bar" style={{width: 'calc(80% - 14px)'}}>
                  <span>80%</span>
                </div>
              </div>
            </div>
            {/* <!--Skill-item End-->
            <!--Skill-item Start--> */}
            <div className="skill-item">
              <p>HTML</p>
              <div className="progress inner-shadow">
                <div className="progress-bar" style={{width: 'calc(90% - 14px)'}}>
                  <span>90%</span>
                </div>
              </div>
            </div>
            {/* <!--Skill-item End-->
            <!--Skill-item Start--> */}
            <div className="skill-item">
              <p>Python</p>
              <div className="progress inner-shadow">
                <div className="progress-bar" style={{width: 'calc(85% - 14px)'}}>
                  <span>85%</span>
                </div>
              </div>
            </div>
            {/* <!--Skill-item End-->
            <!--Skill-item Start--> */}
            <div className="skill-item">
              <p>Apex</p>
              <div className="progress inner-shadow">
                <div className="progress-bar" style={{width: 'calc(90% - 14px)'}}>
                  <span>90%</span>
                </div>
              </div>
            </div>
            {/* <!--Skill-item End-->
            <!--Skill-item Start--> */}
            <div className="skill-item">
              <p>LWC</p>
              <div className="progress inner-shadow">
                <div className="progress-bar" style={{width: 'calc(95% - 14px)'}}>
                  <span>95%</span>
                </div>
              </div>
            </div>
            {/* <!--Skill-item End--> */}
          </div>
        </div>
      </div>
      {/* <!--Skills End--> */}

      {/* <!-- Experience Start --> */}
      <div className="row">
        <div className="experience tab-content">
            <div className="row">
                <div className="timeline">
                    <div className="row">
                        {/* <!-- Timeline item start --> */}
                        <div className="timeline-item">
                            <div className="timeline-item-inner outer-shadow">
                                <i className="fas fa-book icon"></i>
                                <span>July, 2021</span>
                                <h3>Python for Data Science</h3>
                                <h4>IBM</h4>
                                <p>Completed a comprehensive course on Python for Data Science at IBM, gaining expertise in data analysis, visualization, and machine learning using Python.</p>
                            </div>
                        </div>
                        {/* <!-- Timeline item end -->
                        <!-- Timeline item start --> */}
                        <div className="timeline-item">
                            <div className="timeline-item-inner outer-shadow">
                                <i className="fas fa-book icon"></i>
                                <span>July, 2021</span>
                                <h3>Data Analysis using Python</h3>
                                <h4>IBM</h4>
                                <p>Successfully completed the Data Analysis course using Python at IBM, mastering data manipulation and statistical analysis techniques.</p>
                            </div>
                        </div>
                        {/* <!-- Timeline item end -->
                        <!-- Timeline item start --> */}
                        <div className="timeline-item">
                            <div className="timeline-item-inner outer-shadow">
                                <i className="fas fa-book icon"></i>
                                <span>July, 2021</span>
                                <h3>Data Visualization using Python</h3>
                                <h4>IBM</h4>
                                <p>Achieved proficiency in data visualization with Python through IBM's course, effectively communicating insights through charts and graphs.</p>
                            </div>
                        </div>
                        {/* <!-- Timeline item end -->
                        <!-- Timeline item start --> */}
                        <div className="timeline-item">
                            <div className="timeline-item-inner outer-shadow">
                                <i className="fas fa-book icon"></i>
                                <span>July, 2021</span>
                                <h3>Applied Data Science with Python</h3>
                                <h4>IBM</h4>
                                <p>Completed the Applied Data Science course at IBM, applying data analysis and machine learning techniques to real-world projects.</p>
                            </div>
                        </div>
                        {/* <!-- Timeline item end -->
                        <!-- Timeline item start --> */}
                        <div className="timeline-item">
                            <div className="timeline-item-inner outer-shadow">
                                <i className="fas fa-book icon"></i>
                                <span>July, 2021</span>
                                <h3>PubG Analysis with Data Science</h3>
                                <h4>Edureka</h4>
                                <p>Explored data analysis and insights generation in the context of the popular game PubG during the Edureka course.</p>
                            </div>
                        </div>
                        {/* <!-- Timeline item end -->
                        <!-- Timeline item start --> */}
                        <div className="timeline-item">
                            <div className="timeline-item-inner outer-shadow">
                                <i className="fas fa-book icon"></i>
                                <span>July, 2021</span>
                                <h3>Face Recognition using Python</h3>
                                <h4>LetsUpgrade</h4>
                                <p>Developed expertise in face recognition technologies through the LetsUpgrade course, enabling advanced security and access control.</p>
                            </div>
                        </div>
                        {/* <!-- Timeline item end -->
                        <!-- Timeline item start --> */}
                        <div className="timeline-item">
                            <div className="timeline-item-inner outer-shadow">
                                <i className="fas fa-book icon"></i>
                                <span>August, 2021</span>
                                <h3>HTML</h3>
                                <h4>LetsUpgrade</h4>
                                <p>Learned HTML and its fundamentals during the LetsUpgrade course, gaining the skills to create web content.</p>
                            </div>
                        </div>
                        {/* <!-- Timeline item end -->
                        <!-- Timeline item start --> */}
                        <div className="timeline-item">
                            <div className="timeline-item-inner outer-shadow">
                                <i className="fas fa-book icon"></i>
                                <span>August, 2021</span>
                                <h3>CSS</h3>
                                <h4>LetsUpgrade</h4>
                                <p>Mastered CSS (Cascading Style Sheets) through the LetsUpgrade course, acquiring the ability to style web pages beautifully.</p>
                            </div>
                        </div>
                        {/* <!-- Timeline item end -->
                        <!-- Timeline item start --> */}
                        <div className="timeline-item">
                            <div className="timeline-item-inner outer-shadow">
                                <i className="fas fa-book icon"></i>
                                <span>August, 2021</span>
                                <h3>JavaScript</h3>
                                <h4>LetsUpgrade</h4>
                                <p>Studied JavaScript, a dynamic programming language, at LetsUpgrade, enhancing my ability to create interactive web applications.</p>
                            </div>
                        </div>
                        {/* <!-- Timeline item end -->
                        <!-- Timeline item start --> */}
                        <div className="timeline-item">
                            <div className="timeline-item-inner outer-shadow">
                                <i className="fas fa-book icon"></i>
                                <span>August, 2021</span>
                                <h3>Bootstrap</h3>
                                <h4>LetsUpgrade</h4>
                                <p>Became proficient in Bootstrap, a popular CSS framework, during the LetsUpgrade course, streamlining web development.</p>
                            </div>
                        </div>
                        {/* <!-- Timeline item end -->
                        <!-- Timeline item start --> */}
                        <div className="timeline-item">
                            <div className="timeline-item-inner outer-shadow">
                                <i className="fas fa-book icon"></i>
                                <span>August, 2021</span>
                                <h3>React JS</h3>
                                <h4>LetsUpgrade</h4>
                                <p>Explored React JS, a JavaScript library for building user interfaces, during the LetsUpgrade course, enabling the creation of dynamic web applications.</p>
                            </div>
                        </div>
                        {/* <!-- Timeline item end -->
                        <!-- Timeline item start --> */}
                        <div className="timeline-item">
                            <div className="timeline-item-inner outer-shadow">
                                <i className="fas fa-book icon"></i>
                                <span>August, 2021</span>
                                <h3>Machine Learning Intro</h3>
                                <h4>Kaggle</h4>
                                <p>Gained insights into machine learning concepts and techniques through Kaggle's introductory course, laying the foundation for advanced data analysis.</p>
                            </div>
                        </div>
                        {/* <!-- Timeline item end -->
                        <!-- Timeline item start --> */}
                        <div className="timeline-item">
                            <div className="timeline-item-inner outer-shadow">
                                <i className="fas fa-book icon"></i>
                                <span>December, 2021</span>
                                <h3>Data Analysis on Titanic Dataset</h3>
                                <h4>SmartInternz</h4>
                                <p>Conducted in-depth data analysis on the Titanic dataset during the SmartInternz program, extracting meaningful insights and patterns.</p>
                            </div>
                        </div>
                        {/* <!-- Timeline item end -->
                        <!-- Timeline item start --> */}
                        <div className="timeline-item">
                            <div className="timeline-item-inner outer-shadow">
                                <i className="fas fa-book icon"></i>
                                <span>February, 2022</span>
                                <h3>Data Analysis on Breast Cancer</h3>
                                <h4>SmartInternz</h4>
                                <p>Performed comprehensive data analysis on breast cancer data, utilizing statistical techniques to aid in medical research.</p>
                            </div>
                        </div>
                        {/* <!-- Timeline item end -->
                        <!-- Timeline item start --> */}
                        <div className="timeline-item">
                            <div className="timeline-item-inner outer-shadow">
                                <i className="fas fa-book icon"></i>
                                <span>September, 2022</span>
                                <h3>Data Analysis on Rainfall Prediction</h3>
                                <h4>IBM</h4>
                                <p>Engaged in data analysis for rainfall prediction as part of IBM's program, applying machine learning algorithms to predict weather patterns.</p>
                            </div>
                        </div>
                        {/* <!-- Timeline item end -->
                        <!-- Timeline item start --> */}
                        <div className="timeline-item">
                            <div className="timeline-item-inner outer-shadow">
                                <i className="fas fa-book icon"></i>
                                <span>February, 2023</span>
                                <h3>Salesforce Technology</h3>
                                <h4>Trailhead</h4>
                                <p>Explored Salesforce technology and its capabilities through Trailhead, gaining proficiency in cloud-based customer relationship management (CRM) solutions.</p>
                            </div>
                        </div>
                        {/* <!-- Timeline item end --> */}
                    </div>
                </div>
            </div>
        </div>
      </div>
      {/* <!-- Experience End --> */}

      {/* <!-- Education Start --> */}
      <div className="row">
        <div className="education tab-content">
            <div className="row">
                <div className="timeline">
                    <div className="row">
                        {/* <!-- Timeline item start --> */}
                        <div className="timeline-item">
                            <div className="timeline-item-inner outer-shadow">
                                <i className="fas fa-graduation-cap icon"></i>
                                <span>2007 - 2017</span>
                                <h3>SEA International School, Bangalore, Karnataka, India</h3>
                                <h4>1st - 10th Standard</h4>
                                <p>Completed my primary and secondary education at SEA International School, acquiring a strong foundation in various subjects.</p>
                            </div>
                        </div>
                        {/* <!-- Timeline item end --> */}
                        {/* <!-- Timeline item start --> */}
                        <div className="timeline-item">
                            <div className="timeline-item-inner outer-shadow">
                                <i className="fas fa-graduation-cap icon"></i>
                                <span>2017 - 2019</span>
                                <h3>PU Narayana College, Bangalore, Karnataka, India</h3>
                                <h4>11th - 12th Standard</h4>
                                <p>Studied 11th and 12th grade at PU Narayana College, specializing in subjects that laid the groundwork for higher education.</p>
                            </div>
                        </div>
                        {/* <!-- Timeline item end --> */}
                        {/* <!-- Timeline item start (Updated) --> */}
                        <div className="timeline-item">
                            <div className="timeline-item-inner outer-shadow">
                                <i className="fas fa-graduation-cap icon"></i>
                                <span>2019 - 2023</span>
                                <h3>Sona College of Technology, Salem, Tamilnadu, India</h3>
                                <h4>Bachelor of Engineering (B.E) in Computer Science and Engineering</h4>
                                <h4>1st - 4th Year</h4>
                                <p>Completed my undergraduate studies in Computer Science and Engineering (CSE) at Sona College of Technology, aligning my education with my passion for technology and programming.</p>
                            </div>
                        </div>
                        {/* <!-- Timeline item end --> */}
                    </div>
                </div>
            </div>
        </div>
      </div>
      {/* <!-- Education End --> */}

      {/* <!--Work Experience Start--> */}
      <div className="row">
        <div className="work tab-content">
          <div className="row">
            <div className="timeline">
              <div className="row">
                {/* <!--Timeline item start--> */}
                <div className="timeline-item">
                  <div className="timeline-item-inner outer-shadow">
                    <i className="fas fa-briefcase icon"></i>
                    <span>Feb'2023 - Aug'2023</span>
                    <h3>Adapt IQ</h3>
                    <h4>Coimbatore, Tamilnadu, India</h4>
                    <p>Completed six months of internship in the domain of Salesforce Technology.</p>
                  </div>
                </div>
                {/* <!--Timeline item end--> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!--Work Experience End--> */}

      </div>
    </section>
  )
}

export default About
