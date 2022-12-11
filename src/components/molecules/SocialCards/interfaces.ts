import { SvgIconProps } from '@material-ui/core'
import React from 'react'

export interface SocialDataProps {
  link: string
  title: string
  subtitle: string
  icon: React.ReactElement<SvgIconProps>
}
