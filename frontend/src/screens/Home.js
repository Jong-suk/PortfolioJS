import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Image } from 'react-bootstrap'

const Home = () => {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await fetch('/api/home');
        const data = await response.blob();
        const url = URL.createObjectURL(data);
        setImageUrl(url);
      } catch (error) {
        console.error('Error fetching image:', error);
      }
    };

    fetchImage();
  }, []);

  return (
    <section className="home-section section active" id="home">
      {/* Effect Wrap Start*/}
      <div className="effect-wrap">
        <div className="effect effect-1"></div>
        <div className="effect effect-2">
          {[...Array(24)].map((_, index) => (
            <div key={index}></div>
          ))}
        </div>
        <div className="effect effect-3"></div>
        <div className="effect effect-4"></div>
        <div className="effect effect-5">
          {[...Array(10)].map((_, index) => (
            <div key={index}></div>
          ))}
        </div>
      </div>
      {/* Effect Wrap End*/}
      <div className="container">
        <div className="row full-screen align-items-center">
          <div className="home-text">
            <p>Hello</p>
            <h2>I'm Abhuthahir</h2>
            <h1>A Fresher & An Enthusiastic Learner</h1>
            <Link to="/about" className="link-item btn-1 outer-shadow hover-in-shadow">
              More About Me
            </Link>
          </div>
          <div className="home-img">
            <div className="img-box inner-shadow">
              <Image src={imageUrl} className="outer-shadow" alt="Profile Picture" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home