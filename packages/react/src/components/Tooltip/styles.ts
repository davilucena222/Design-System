import { styled } from '../../styles'

export const TooltipContainer = styled('div', {
  diplay: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: '$3 $4',

  width: '13.68rem',

  background: '$gray900',
  borderRadius: '$sm',

  textAlign: 'center',
})

export const TooltipText = styled('p', {
  margin: '0 auto',

  fontFamily: '$tooltipFont',
  fontWeight: '$medium',
  lineHeight: '$short',

  color: '$gray100',
})

export const ArrowContainer = styled('div', {
  marginTop: '-0.5rem',
  marginLeft: '7rem',

  svg: {
    color: '$gray900',
  },
})
