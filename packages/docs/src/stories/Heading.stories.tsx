import type { Meta, StoryObj } from '@storybook/react'
import { Heading, HeadingProps } from '@ignite-ui/react'

// Tudo que for colocado como configuração global dentro desse bloco será herdado por todas as variações do componente
export default {
  title: 'Typography/Heading',
  component: Heading,
  args: {
    children: 'Custom title!',
    size: 'md',
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg', '2xl', '3xl', '4xl', '5xl', '6xl'],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: 'H1 Heading',
    as: 'h1',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Por padrão o heading sempre será um `h2`, mas podemos alterar isso com a propriedade `as`.',
      },
    },
  },
}
