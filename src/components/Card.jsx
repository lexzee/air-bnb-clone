import pic1 from '../assets/images/katie-zaferes.png'
import star from '../assets/images/star.png'

const Card = () => {
  return (
    <section className='card'>
      <div className='img'>
        {/* <div className='img--overlay'> */}
          <img src={pic1} alt='Katie Zaferes' className='card-img'/>
          <div>sold out</div>
        {/* </div> */}
      </div>
      <div className='rating'>
        <img src={star} />
        <p>5.0
        <span className='gray'>(6) * USA</span>
        </p>
      </div>
      <p className='title'>
        Life lessons with Katie Zafares
      </p>
      <p className='cost-person'>
        <span className='bold'>From $136</span> / person
      </p>
    </section>
  )
}

export default Card