import { createStitches } from '@stitches/react'

export const {
  styled,
  createTheme,
  css,
  globalCss,
  getCssText
} = createStitches()

export const globals = globalCss({
  '*': {
    fontFamily: '-apple-system, BlinkMacSystemFont, system-ui, Pretendard, Roboto, \'Helvetica Neue\', \'Segoe UI\', \'Apple SD Gothic Neo\', \'Noto Sans KR\', \'Malgun Gothic\', sans-serif',
    boxSizing: 'border-box',
    wordBreak: 'keep-all',
    wordWrap: 'break-word'
  },
  body: {
    color: '$content',
    background: '$background',

    minHeight: '100vh'
  },
  a: {
    color: 'inherit',
    textDecoration: 'none'
  },

  '@import': 'url(\'https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard-dynamic-subset.css\')'
})

export const light = createTheme({
  colors: {
    content: 'black',
    background: 'white'
  }
})
