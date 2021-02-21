import * as React from 'react'
import * as PropTypes from 'prop-types'
import Link from 'next/link'
import {
  Box,
  Center,
  Heading,
  Text,
  Image,
  Link as StyledLink
} from '@chakra-ui/react'

const Post = props => {
  return (
    <Box
      flexShrink={1}
      margin='14px 0'
      display={['block', 'flex']}
    >
      <Center
        flexGrow={1}
        flexShrink={1}
        flexBasis='auto'
      >
        <Link href={'/post/' + props.slug}>
          <StyledLink>
            {
              props.thumbnail && (
                <Image
                  src={props.thumbnail}
                  shadow='lg'
                  borderRadius='md'
                  crossOrigin='anonymous'
                />
              )
            }
          </StyledLink>
        </Link>
      </Center>
      <Box
        flexGrow={0}
        flexShrink={0}
        flexBasis={[
          '200px',
          '250px',
          '300px'
        ]}
        marginTop={2}
        marginLeft={[0, 4, 6]}
      >
        <Link href={'/post/' + props.slug}>
          <StyledLink>
            <Heading size='lg'>
              {props.title}
            </Heading>
            <Text margin='4px 0'>
              {props.sort}
            </Text>
          </StyledLink>
        </Link>
      </Box>
    </Box>
  )
}

Post.propTypes = {
  thumbnail: PropTypes.string,
  title: PropTypes.string,
  sort: PropTypes.string,
  slug: PropTypes.string
}

export default Post