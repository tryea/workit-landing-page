import React from 'react'
import { colors, typography } from '../util/styles'

type Props = {
  title: string,
  description: string,
  number: string
}

const SectionInfoProductItem = (props: Props) => {
  const SectionInfoProductItemNumberWrapperStyle: React.CSSProperties = {
    display: 'flex',
    width: '3em',
    height: '3em',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '100%', // Make it a circle
    border: `1px solid ${colors.DavysGrey}`,
  }

  const SectionInfoProductItemNumberStyle: React.CSSProperties = {
    color: colors.DarkPurple,
    fontFamily: 'Fraunces144ptSemiBold',
    fontSize: '24px',
    lineHeight: '40px'
  }

  const SectionInfoProductItemTitleStyle: React.CSSProperties = {
    fontFamily: 'Fraunces144ptSemiBold',
    fontSize: '32px',
    lineHeight: '40px',
    textAlign: 'center',
  }

  const SectionInfoProductItemStyle: React.CSSProperties = {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
  }

  return (
    <div className='SectionInfoProductItem' style={SectionInfoProductItemStyle}>
      <div
        className='SectionInfoProductItemNumber'
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <div
          style={SectionInfoProductItemNumberWrapperStyle}
        >
          <span style={SectionInfoProductItemNumberStyle}>{props.number}</span>
        </div>
      </div>
      <div
        className='SectionInfoProductItemContent'
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-around'
        }}
      >
        <h3 style={SectionInfoProductItemTitleStyle}>{props.title}</h3>
        <p style={{ ...typography.Body, textAlign: 'center', color: colors.DarkPurple }}>{props.description}</p>
      </div>
    </div>
  )
}

export default SectionInfoProductItem