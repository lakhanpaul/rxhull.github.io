import React from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'
import { css } from 'styled-components/macro' //eslint-disable-line
import Form from '../../helpers/Form'
import TextInput from '../../helpers/TextInput'
import ResultsDisplay from '../../helpers/ResultsDisplay'
import Footer from '../footers/MiniCenteredFooter'

import Header, {
  StyledNavLink,
  NavLinks,
  PrimaryLink as PrimaryLinkBase,
  LogoLink,
  NavToggle,
  DesktopNavLinks,
} from '../headers/light.js'

const StyledHeader = styled(Header)`
  ${tw`w-full pt-8 max-w-none`}
  ${DesktopNavLinks} ${StyledNavLink}, ${LogoLink} {
    ${tw`text-gray-100 hover:border-gray-300 hover:text-gray-300`}
  }
  ${NavToggle}.closed {
    ${tw`text-gray-100 hover:text-primary-500`}
  }
`

const PrimaryLink = tw(PrimaryLinkBase)`rounded-full`

const OpacityOverlay = tw.div`z-10 absolute inset-0 bg-black opacity-25`
// px-6 sm:px-8 z-20 relative flex flex-col items-center justify-around
const HeroContainer = tw.div` bg-red-600   h-full `
const Content = tw.div`px-4 flex flex-1 flex-col justify-center items-center`

const Heading = styled.h1`
  ${tw`-mt-24 text-3xl font-black leading-snug text-center text-gray-100 sm:text-4xl lg:text-5xl xl:text-6xl sm:mt-0`}
  span {
    ${tw`inline-block mt-2`}
  }
`

const PrimaryAction = tw.button`rounded-full px-8 py-3 mt-10 text-sm sm:text-base sm:mt-16 sm:px-8 sm:py-4 bg-gray-100 font-bold shadow transition duration-300 bg-primary-500 text-gray-100 hocus:bg-primary-700 hocus:text-gray-200 focus:outline-none focus:shadow-outline`

export default ({
  heading = 'Book music & Comedy events',
  semiHeading = 'anywhere in the world',
  action = 'Search for events near me',
  backgroundImageSrc = 'https://images.unsplash.com/photo-1445112098124-3e76dd67983c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1047&q=80',
}) => {
  const navLinks = [
    <NavLinks key={1}>
      <StyledNavLink to='/components/innerPages/AboutUsPage'>
        About
      </StyledNavLink>
      <StyledNavLink to='/components/innerPages/MarketingProgramPage'>
        Marketing
      </StyledNavLink>
      <StyledNavLink to='/components/innerPages/TechnologyProgramPage'>
        Technology
      </StyledNavLink>
      <StyledNavLink to='/components/innerPages/OpportunityFinderPage'>
        Opportunity Finder
      </StyledNavLink>
      <StyledNavLink to='/components/blocks/Form/TwoColContactUsFull'>
        Contact Us
      </StyledNavLink>
    </NavLinks>,
    <NavLinks key={2}>
      <PrimaryLink to='/components/blocks/Form/OpportunitySubmission'>
        Submit an opportunity
      </PrimaryLink>
    </NavLinks>,
  ]

  // the only reason this styled is declared inside the component is because it allows different images to be passed down.
  const Container = styled.div`
    ${tw`relative flex flex-col h-auto min-h-screen -mx-8 -mt-8 bg-center bg-cover`}
    background-image: url(${backgroundImageSrc});
  `
  const inputSendEmail = false
  return (
    <Form>
      <Container>
        <StyledHeader links={navLinks} />
        <Content>
          <TextInput id='search test' sendEmail={inputSendEmail} />
          <PrimaryAction>{action}</PrimaryAction>
        </Content>{' '}
        <ResultsDisplay id='search test' />
      </Container>{' '}
      <Footer />
    </Form>
  )
}
