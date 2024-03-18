import React from 'react';

const Services = () => {
  return (
    <section className="service-section section" id="services">
      <div className="container">
        <div className="row">
          <div className="section-title">
            <h2 data-heading="Services">What I do</h2>
          </div>
        </div>
        <div className="row">
          {/* Responsive Design */}
          <div className="service-item">
            <div className="service-item-inner outer-shadow">
              <div className="icon inner-shadow">
                <i className="fas fa-mobile-alt"></i>
              </div>
              <h3>Responsive Design</h3>
              <p>Create visually stunning and user-friendly mobile-responsive websites that adapt seamlessly to various screen sizes, ensuring a great user experience on all devices.</p>
            </div>
          </div>

          {/* Web Design */}
          <div className="service-item">
            <div className="service-item-inner outer-shadow">
              <div className="icon inner-shadow">
                <i className="fas fa-laptop-code"></i>
              </div>
              <h3>Web Design</h3>
              <p>Design and develop modern, elegant, and fully functional websites with a focus on user interface (UI) and user experience (UX) design principles.</p>
            </div>
          </div>

          {/* Coding */}
          <div className="service-item">
            <div className="service-item-inner outer-shadow">
              <div className="icon inner-shadow">
                <i className="fas fa-code"></i>
              </div>
              <h3>Coding</h3>
              <p>Write clean and efficient code using the latest programming languages and best practices to create robust and scalable web applications and software solutions.</p>
            </div>
          </div>

          {/* Data Analysis */}
          <div className="service-item">
            <div className="service-item-inner outer-shadow">
              <div className="icon inner-shadow">
                <i className="fas fa-search"></i>
              </div>
              <h3>Data Analysis</h3>
              <p>Utilize data analysis techniques to extract valuable insights from data sets, helping businesses make informed decisions and drive growth.</p>
            </div>
          </div>

          {/* Face Recognition */}
          <div className="service-item">
            <div className="service-item-inner outer-shadow">
              <div className="icon inner-shadow">
                <i className="fas fa-robot"></i>
              </div>
              <h3>Face Recognition</h3>
              <p>Implement cutting-edge face recognition algorithms and technologies for security, access control, and personalized user experiences.</p>
            </div>
          </div>

          {/* Teaching */}
          <div className="service-item">
            <div className="service-item-inner outer-shadow">
              <div className="icon inner-shadow">
                <i className="fas fa-book"></i>
              </div>
              <h3>Teaching</h3>
              <p>Share knowledge and expertise through engaging and interactive teaching sessions, empowering others to acquire new skills and grow in their careers.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;