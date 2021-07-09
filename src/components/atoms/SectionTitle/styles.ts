import styled, { css } from 'styled-components'
import { SectionTitleProps } from './interface'

const containerModifiers = {
  strong: () => css`
    font-weight: 700;
  `
}

export const Container = styled.div<SectionTitleProps>`
  ${({ theme, strong }) => css`
    color: ${theme.colors.primary[1]};
    font-family: ${theme.font.family};
    font-weight: ${theme.font.weight.light};
    font-size: 1.25rem;
    margin-bottom: 15px;

    ${!!strong && containerModifiers.strong}
  `}
`
