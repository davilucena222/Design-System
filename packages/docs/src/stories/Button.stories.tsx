import type { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonProps } from '@ignite-ui/react'

// Tudo que for colocado como configuração global dentro desse bloco será herdado por todas as variações do componente
export default {
  title: 'Form/Button',
  component: Button,
  args: {
    children: 'Button',
  },
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {}

export const big: StoryObj<ButtonProps> = {
  args: {
    size: 'big',
  },
}
