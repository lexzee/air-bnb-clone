import showcase from '../assets/images/photo-grid.png';

const Hero = () => {
  return (
    <section className="hero">
      <img src={showcase} alt="showcase" className='hero--image'/>
      <div className='hero--text'>
        <h1>Online Experiences</h1>
        <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
      </div>
    </section>
  );
};

export default Hero;