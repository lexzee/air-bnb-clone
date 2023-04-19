import pic1 from '../assets/images/katie-zaferes.png'
import star from '../assets/images/star.png'

// const Card = (props) => {
const Card = (props) => {
  console.log(props)
  return (
    <section className='card'>
      <div className='img'>
        {/* <div className='img--overlay'> */}
          {/* <img src={pic1} alt='Katie Zaferes' className='card-img'/> */}
          <img src={`../src/assets/images/${props.img}`} alt={props.img} className='card-img'/>
          <div>sold out</div>
        {/* </div> */}
      </div>
      <div className='rating'>
        <img src={star} />
        <p>{props.rating}
        <span className='gray'>({props.reviewCount}) * {props.location}</span>
        </p>
      </div>
      <p className='title'>
        {props.title}
      </p>
      <p className='cost-person'>
        <span className='bold'>{`From ${props.price}`}</span> / person
      </p>
    </section>
  )
}

export default Card