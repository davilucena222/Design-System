import type { Meta, StoryObj } from '@storybook/react'
import { Avatar, AvatarProps } from '@davi-ignite-ui/react'

// Tudo que for colocado como configuração global dentro desse bloco será herdado por todas as variações do componente
export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/davilucena222.png',
    alt: 'Davi Luiz',
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
  },
}
