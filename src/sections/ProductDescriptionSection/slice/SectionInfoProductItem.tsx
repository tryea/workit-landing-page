import './SectionInfoProductItem.css'

type Props = {
  title: string,
  description: string,
  number: string
}

const SectionInfoProductItem = (props: Props) => {


  return (
    <div className='SectionInfoProductItem'>
      <div
        className='SectionInfoProductItemNumber'
      >
        <div className='SectionInfoProductItemNumberWrapper'>
          <span className='SectionInfoProductItemNumber'>{props.number}</span>
        </div>
      </div>
      <div className='SectionInfoProductItemContent'>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </div>
    </div>
  )
}

export default SectionInfoProductItem