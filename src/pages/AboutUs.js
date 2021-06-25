import React from 'react'
import AnimationRevealPage from '../helpers/AnimationRevealPage.js'
import tw from 'twin.macro'
import styled from 'styled-components' //eslint-disable-line
import { css } from 'styled-components/macro' //eslint-disable-line
import Header from '../components/headers/light.js'
import Footer from '../components/footers/MiniCenteredFooter'
import MainFeature1 from '../components/features/TwoColWithButton.js'
// import MainFeature2 from "../components/features/TwoColSingleFeatureWithStats.js";
// import MainFeature3 from "../components/features/TwoColSingleFeatureWithStats2.js";
import Features from '../components/features/ThreeColSimple.js'
// import Features from "../components/features/ThreeColWithSideImage.js";
import TeamCardGrid from '../components/cards/ProfileThreeColGrid.js'

import SupportIconImage from '../images/support-icon.svg'
import ShieldIconImage from '../images/shield-icon.svg'
import CustomerLoveIconImage from '../images/simple-icon.svg'

// The purpose of this page is to display information about our organization's mission, vision, values and team.
// The majority of this is done using simple cards, it consists of two large columns followed by card grids

const Subheading = tw.span`uppercase tracking-wider text-sm`
const StyledHeader = styled(Header)`
  ${tw`bg-white bg-opacity-75`}
`
export default () => {
  return (
    <AnimationRevealPage>
      <StyledHeader />
      {/* Two Col With Button, gives a short intro about who Frameless is */}
      <MainFeature1
        subheading={<Subheading>About Frameless</Subheading>}
        heading='We are a contemporary accelerator for student-led organizations..'
        buttonRounded={false}
        description='We strive to help budding organizations spread their wings and break through barriers.'
        primaryButtonText='See Portfolio'
        imageSrc='https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80'
      />
      <MainFeature1
        subheading={<Subheading>Our Vision</Subheading>}
        heading='Create success'
        buttonRounded={false}
        primaryButtonText='Contact Us'
        imageSrc='https://images.unsplash.com/3/doctype-hi-res.jpg?ixlib=rb-1.2.1&auto=format&fit=crop&w=768&q=80'
        textOnLeft={false}
      />
      {/* Three Columns Simple, displays a heading along with a three card that have icons and text displaying our values */}
      <Features
        subheading={<Subheading>Our Values</Subheading>}
        heading='These are of great importance to us, and we take pride in following them.'
        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        cards={[
          {
            imageSrc: SupportIconImage,
            title: '24/7 Support',
            description:
              'Any time you are concerned or encounter a problem, our team is on-call to propel you forward and launch you back onto the path towards success',
            url: '/',
          },
          {
            imageSrc: ShieldIconImage,
            title: 'Strong Teams',
            description:
              'We have developed resilient, hard-working, and proficient teams to boost you through your journey, so you that you can focus on what really matters',
            url: '/',
          },
          {
            imageSrc: CustomerLoveIconImage,
            title: 'Customer Satisfaction',
            description:
              'It is of great importance that all our clients are satisified with our services, and so we place them at the center of all our decisions',
            url: '/',
          },
        ]}
        linkText=''
      />
      {/* Profile Three Col Grid, an arrangement of profile cards in three columns, used to portray our members */}
      <TeamCardGrid subheading={<Subheading>Our Team</Subheading>} />
      {/* Five Column, the footer */}
      <Footer />
    </AnimationRevealPage>
  )
}
