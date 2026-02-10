import React from 'react'

export type TypographyFont = 'inter' | 'abel'

export type InterSize = 16 | 18 | 20 | 30
export type AbelSize = 14 | 16

export type InterColor = 'black' | 'gray' | 'green'
export type AbelColor = 'white' | 'green' | 'black'

export type TypographyWeight = 400 | 500

type TypographyBaseProps = {
  children: React.ReactNode
  weight?: TypographyWeight
  className?: string
}

type InterTypographyProps = TypographyBaseProps & {
  font: 'inter'
  size?: InterSize
  color?: InterColor
}

type AbelTypographyProps = TypographyBaseProps & {
  font: 'abel'
  size?: AbelSize
  color?: AbelColor
}

export type TypographyProps = (InterTypographyProps | AbelTypographyProps) & {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span' | 'label'
}

const interSizeMap: Record<InterSize, string> = {
  16: 'text-inter-16',
  18: 'text-inter-18',
  20: 'text-inter-20',
  30: 'text-inter-30',
}

const interColorMap: Record<InterColor, string> = {
  black: 'text-inter-black',
  gray: 'text-inter-gray',
  green: 'text-inter-green',
}

const abelSizeMap: Record<AbelSize, string> = {
  14: 'text-abel-14',
  16: 'text-abel-16',
}

const abelColorMap: Record<AbelColor, string> = {
  white: 'text-abel-white',
  green: 'text-abel-green',
  black: 'text-abel-black',
}

const weightMap: Record<TypographyWeight, string> = {
  400: 'font-normal',
  500: 'font-medium',
}

const Typography = ({
  children,
  font,
  size,
  color,
  weight = 400,
  as: Component = 'p',
  className = '',
}: TypographyProps) => {
  const weightClass = weightMap[weight]

  const fontClass = font === 'inter' ? 'font-inter' : 'font-abel'
  const sizeClass =
    font === 'inter'
      ? (size && interSizeMap[size]) ?? 'text-inter-16'
      : (size && abelSizeMap[size]) ?? 'text-abel-16'
  const colorClass =
    font === 'inter'
      ? (color && interColorMap[color]) ?? 'text-inter-black'
      : (color && abelColorMap[color]) ?? 'text-abel-black'

  return (
    <Component
      className={`${fontClass} ${sizeClass} ${colorClass} ${weightClass} ${className}`.trim()}
    >
      {children}
    </Component>
  )
}

export default Typography
