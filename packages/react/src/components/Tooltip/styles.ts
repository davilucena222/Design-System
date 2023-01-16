import { styled } from '../../styles'

export const TooltipContainer = styled('div', {
  diplay: 'flex',
  alignItems: 'center',
  flexDirection: 'row',
  padding: '0.75rem 0.238rem',

  width: '13.68rem',

  background: '$gray900',
  borderRadius: '$sm',
})

export const TooltipText = styled('p', {
  display: 'flex',
  alignItens: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  fontFamily: '$tooltip',
  fontWeight: '$medium',
  fontSize: '$sm',
  lineHeight: '$short',

  color: '$gray100',
})

// export const ArrowContainer = styled('div', {

// })
