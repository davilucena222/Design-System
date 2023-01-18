import type { Meta, StoryObj } from '@storybook/react'
import { Toast, ToastProps } from '@davi-ignite-ui/react'

// Tudo que for colocado como configuração global dentro desse bloco será herdado por todas as variações do componente
export default {
  title: 'Element Animation/Toast',
  component: Toast,
  args: {},
  argTypes: {},
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {
  args: {
    title: 'Agendamento realizado',
    dateToast: 'Quarta-feira, 23 de Outubro às 16h',
  },
}

// export const Secondary: StoryObj<ToastProps> = {
//   args: {
//     content: '26 de Outubro - Disponível',
//   },
// }
