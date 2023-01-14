import type { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from '@ignite-ui/react'

// Tudo que for colocado como configuração global dentro desse bloco será herdado por todas as variações do componente
export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    size: 'md',
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe eius vitae odio iusto voluptatum blanditiis eveniet est cum. Qui, omnis esse. Ipsam, eum maxime facilis commodi tempora dolorum necessitatibus non!',
  },
  argTypes: {
    size: {
      options: [
        'xxs',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
      ],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
}
