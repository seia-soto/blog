import { NextPage } from 'next'
import {
  title
} from '../config'
import * as Container from '../components/Container'
import * as Navigation from '../components/Navigation'

const Page: NextPage = () => {
  return (
    <Container.Row direction='horizontal'>
      <div><b>{title}</b></div>

      <Navigation.Group align='right'>
        <div>Sub-Item</div>
      </Navigation.Group>
    </Container.Row>
  )
}

export default Page
