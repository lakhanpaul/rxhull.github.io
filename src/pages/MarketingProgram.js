import React from 'react'
import AnimationRevealPage from '../helpers/AnimationRevealPage.js'
import tw from 'twin.macro'
import styled from 'styled-components' //eslint-disable-line
import { css } from 'styled-components/macro' //eslint-disable-line
import Header from '../components/headers/light.js'
import Hero from '../components/hero/BackgroundAsImageWithCenteredContent'
import Footer from '../components/footers/MiniCenteredFooter'
import MainFeature1 from '../components/features/TwoColWithButton.js'
// import MainFeature2 from "../components/features/TwoColSingleFeatureWithStats.js";
// import MainFeature3 from "../components/features/TwoColSingleFeatureWithStats2.js";
import Features from '../components/features/ThreeColSimple.js'
import ServiceLayout from '../components/features/TwoColWithSteps'
import Expertise from '../components/features/ThreeColWithSideImage'
// import Features from "../components/features/ThreeColWithSideImage.js";
import TeamCardGrid from '../components/cards/ProfileThreeColGrid.js'
import Portfolio from '../components/cards/ThreeColSlider'
import GetStartedLight from '../components/cta/GetStartedLight'

import SupportIconImage from '../images/support-icon.svg'
import ShieldIconImage from '../images/shield-icon.svg'
import CustomerLoveIconImage from '../images/simple-icon.svg'

// The purpose of this page is to display information about our organization's mission, vision, values and team.
// The majority of this is done using simple cards, it consists of two large columns followed by card grids

const Subheading = tw.span`uppercase tracking-wider text-sm`
export default () => {
  const serviceSteps = [
    {
      heading: 'Apply now',
      description:
        'Fill out our quick application form so we can learn more about your visions',
    },
    {
      heading: 'Concept Ideation',
      description:
        'Our team will collaborate with you to create innovative and intricate specifications for your marketing and design aims',
    },
    {
      heading: 'Takeoff',
      description:
        'Our expert team will launch your marketing, design and branding campaign, carefully guiding and mentoring you along the way ',
    },
  ]

  const expertiseCards = [
    {
      imageSrc:
        'https://images.unsplash.com/photo-1615445167846-6e8a8f27c004?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80',
      title: '24/7 Support',
      description: '',
      url: '/',
    },
    {
      imageSrc:
        'https://images.unsplash.com/photo-1615445167846-6e8a8f27c004?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80',
      title: '24/7 Support',
      description: '',
      url: '/',
    },
    {
      imageSrc:
        'https://images.unsplash.com/photo-1615445167846-6e8a8f27c004?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80',
      title: '24/7 Support',
      description: '',
      url: '/',
    },
  ]
  return (
    <AnimationRevealPage>
      {/* Background Image with centered content, A large hero image and with a short intro and call to action */}
      <Hero
        heading='Take your marketing to the next level'
        semiHeading='and make your brand a statement'
        action='Apply to our marketing program now'
      />
      {/* TwoColWithSteps, provides some information regarding how the service is carried out */}
      <ServiceLayout
        imageBorder={true}
        imageDecoratorBlog={true}
        imageShadow={true}
        imageBorder={true}
        steps={serviceSteps}
        imageSrc='https://images.unsplash.com/photo-1551125735-900f662aeb07?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1502&q=80'
      />

      {/* ThreeColWithSideImage, states what areas and programs we have expertise in */}
      <Expertise
        heading='Expertise'
        subheading='some of the technologies we use'
        cards={expertiseCards}
      />
      <Portfolio heading='Our Portfolio' />
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
      {/* a call to action get started component */}
      <GetStartedLight
        subheading='Interested in making a statement ?'
        heading='Take your brand to the next level'
        primaryLinkText='Get Started'
        primaryLinkUrl='http://timerse.com'
        secondaryLinkText='Contact Us'
        secondaryLinkUrl='http://google.com'
      />
      {/* Five Column, the footer */}
      <Footer />
    </AnimationRevealPage>
  )
}
