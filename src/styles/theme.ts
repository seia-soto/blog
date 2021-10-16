import { createStitches } from '@stitches/react'

export const {
  styled,
  createTheme,
  css,
  globalCss,
  getCssText
} = createStitches()

export const light = createTheme({
  colors: {
    content: 'white',
    background: 'black'
  }
})
