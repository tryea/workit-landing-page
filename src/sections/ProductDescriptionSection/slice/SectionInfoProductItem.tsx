import React from 'react'
import { colors, typography } from '../../../util/styles'
import './SectionInfoProductItem.css'

type Props = {
  title: string,
  description: string,
  number: string
}

const SectionInfoProductItem = (props: Props) => {

  const SectionInfoProductItemStyle: React.CSSProperties = {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
  }

  return (
    <div className='SectionInfoProductItem' style={SectionInfoProductItemStyle}>
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