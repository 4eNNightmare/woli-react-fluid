import React from 'react'
import { Pressable, View } from 'react-native'
import useSurfaceContext from '../../../hooks/useSurfaceContext'
import useWoliFluidContext from '../../../hooks/useWoliFluidContext'
import Surface, { SurfaceProps } from '../Surface'
import Typography, { TypographyProps } from '../Typography'
import styles from './styles'


export interface TabProps extends SurfaceProps {
  title: string
  id: string
  labelProps?: TypographyProps
  selected?: boolean
  onPress: (key: string) => void
}

export default function Tab({ title, id, selected, style, onPress,  labelProps, ...rest }: TabProps) {
  const { tokens } = useWoliFluidContext()
  const parentSurface = useSurfaceContext()

  return (
    <Pressable onPress={() => onPress(id)}>
      <Surface elevation={0} containerColor={selected ? tokens.colors.primaryContainer : parentSurface.containerColor} style={[styles.container, tokens.borderRadius.halfHeight(40).all, style]} {...rest}>
        <Typography.Label.Large value={title} {...labelProps}/>
      </Surface>
    </Pressable>
  )
}