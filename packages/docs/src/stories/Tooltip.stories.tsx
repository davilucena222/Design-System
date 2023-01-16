import type { Meta, StoryObj } from '@storybook/react'
import { Tooltip, TooltipProps } from '@davi-ignite-ui/react'

// Tudo que for colocado como configuração global dentro desse bloco será herdado por todas as variações do componente
export default {
  title: 'Element Animation/Tooltip',
  component: Tooltip,
  args: {},
  argTypes: {},
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {}
