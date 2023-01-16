import { TooltipContainer, TooltipText } from './styles'
// import ArrowTooltip from './assets/arrow.png'
import { ComponentProps } from 'react'

export interface TooltipProps extends ComponentProps<typeof TooltipContainer> {}

export function Tooltip({ ...rest }: TooltipProps) {
  return (
    <TooltipContainer {...rest}>
      <TooltipText>21 de Outubro - Indisponível</TooltipText>
      {/* <ArrowContainer>
        <img src={ArrowTooltip} />
      </ArrowContainer> */}
    </TooltipContainer>
  )
}
