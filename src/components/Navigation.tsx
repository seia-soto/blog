import { styled } from '../styles/theme'

export const Group = styled('div', {
  display: 'flex',
  gap: '14px',

  variants: {
    align: {
      right: {
        marginLeft: 'auto'
      }
    }
  }
})
