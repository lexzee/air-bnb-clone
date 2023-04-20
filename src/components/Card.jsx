import pic1 from '../assets/images/katie-zaferes.png'
import star from '../assets/images/star.png'

// const Card = (props) => {
const Card = (props) => {
  console.log(props)
  let tag
  if (props.openSpots === 0){
    tag = 'sold out'
  } else if (props.location === "Online"){
    tag = 'online'
  }

  return (
    <section className='card'>
      {tag && <div className='tag'>{tag}</div>}
      <div className='img'>
          <img src={`../src/assets/images/${props.coverImg}`} alt={props.coverImg} className='card-img'/>
          {/* {!props.openSpots && <div>sold out</div>} */}
      </div>
      <div className='rating'>
        <img src={star} />
        <p>{props.stats.rating}
        <span className='gray'>({props.stats.reviewCount}) * {props.location}</span>
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