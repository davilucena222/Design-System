import { ArrowContainer, TooltipContainer, TooltipText } from './styles'
import { ComponentProps } from 'react'
import { VscTriangleDown } from 'react-icons/vsc'

export interface TooltipProps extends ComponentProps<typeof TooltipContainer> {
  content: string
}

export function Tooltip({ content, ...rest }: TooltipProps) {
  return (
    <>
      <TooltipContainer {...rest}>
        <TooltipText>{content}</TooltipText>
      </TooltipContainer>

      <ArrowContainer>
        <VscTriangleDown size="1.5rem" />
      </ArrowContainer>
    </>
  )
}
