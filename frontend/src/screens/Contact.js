import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import Message from '../components/Message';

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ variant: '', text: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      emailjs.sendForm('service_zyqp3br', 'template_vivmpur', e.target, 'v-deSsPRZUe3gk7X0')
      .then((result) => {
        setMessage({ variant: 'success', text: 'Succesfully Submitted.' });
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        setTimeout(() => {
          setMessage({ variant: '', text: '' });
        }, 5000);
      })
    } catch (error) {
      setMessage({ variant: 'danger', text: 'An error occurred. Please try again later.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact-section section" id="contact">
      <div className="container">
        <div className="row">
          <div className="section-title">
            <h2 data-heading="contact">Get in Touch</h2>
          </div>
        </div>
        <div className="row">
          <div className="contact-item">
            <div className="contact-item-inner outer-shadow">
              <i className="fas fa-phone"></i>
              <span>Phone</span>
              <p>8553779725</p>
            </div>
          </div>
          <div className="contact-item">
            <div className="contact-item-inner outer-shadow">
              <i className="fas fa-envelope"></i>
              <span>Email</span>
              <p>abhuthahir6701@gmail.com</p>
            </div>
          </div>
          <div className="contact-item">
            <div className="contact-item-inner outer-shadow">
              <i className="fas fa-map-marker-alt"></i>
              <span>Address</span>
              <p>K.R Puram, Bangalore - 560036</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="contact-form">
            <form ref={form} onSubmit={handleSubmit}>
              <div className="row">
                <div className="w-50">
                  <div className="input-group outer-shadow hover-in-shadow">
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      className="input-control"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="input-group outer-shadow hover-in-shadow">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      className="input-control"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="input-group outer-shadow hover-in-shadow">
                    <input
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      className="input-control"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="w-50">
                  <div className="input-group outer-shadow hover-in-shadow">
                    <textarea
                      name="message"
                      className="input-control"
                      placeholder="Message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="submit-btn">
                  <button
                    type="submit"
                    id="submit-button"
                    className="btn-1 outer-shadow hover-in-shadow"
                    disabled={loading}
                  >
                    {loading ? 'Sending...' : 'Send Message'}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
              {message && (
                <div className={`message-popup ${message.variant}`}>
                  <Message variant={message.variant}>{message.text}</Message>
                </div>
              )}
      </div>
    </section>
  );
};

export default Contact;