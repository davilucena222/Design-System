import { X } from 'phosphor-react'
import { ComponentProps } from 'react'
import { Date, Header, TextToast, ToastContainer } from './styles'

export interface ToastProps extends ComponentProps<typeof ToastContainer> {
  title: string
  dateToast: string
}

export function Toast({ title, dateToast }: ToastProps) {
  return (
    <ToastContainer>
      <Header>
        <TextToast>{title}</TextToast>
        <X />
      </Header>

      <Date>{dateToast}</Date>
    </ToastContainer>
  )
}
