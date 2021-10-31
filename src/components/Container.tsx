import { styled } from '../styles/theme'

export const Wrap = styled('div', {
  margin: '0 auto',
  padding: '16px',

  maxWidth: '900px',

  variants: {
    size: {
      sm: {
        maxWidth: '750px'
      },
      md: {
        maxWidth: '900px'
      },
      lg: {
        maxWidth: '1200px'
      }
    },
    nowrap: {
      true: {
        margin: 0,
        padding: 0
      }
    }
  }
})

export const Row = styled(Wrap, {
  display: 'flex',
  gap: '12px',

  variants: {
    direction: {
      vertical: {
        flexDirection: 'column'
      },
      horizontal: {
        flexDirection: 'row'
      }
    }
  }
})
