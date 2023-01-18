import { styled } from '../../styles'

export const ToastContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  padding: '$3 $4',
  gap: '$1',

  width: '360px',

  background: '$gray800',

  border: '1px solid $gray600',
  borderRadius: '$sm',
})

export const Header = styled('header', {
  width: '100%',
  height: '$8',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  svg: {
    width: '$xl',
    color: '$gray200',
  },
})

export const TextToast = styled('p', {
  fontFamily: '$default',
  fontWeight: '$bold',
  fontSize: '$xl',
  lineHeight: '$base',

  color: '$white',
})

export const Date = styled('span', {
  fontFamily: '$default',
  fontWeight: '$regular',
  fontSize: '$sm',
  lineHeight: '$base',

  color: '$gray200',
})
