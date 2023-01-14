import type { Meta, StoryObj } from '@storybook/react'
import { Box, BoxProps, Text } from '@ignite-ui/react'

// Tudo que for colocado como configuração global dentro desse bloco será herdado por todas as variações do componente
export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: (
      <>
        <Text>Testando o componente de Box!</Text>
      </>
    ),
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
