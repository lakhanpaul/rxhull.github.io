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
      heading: 'Design your vision',
      description:
        'We will collaborate with you to design and tailor a site that suits you',
    },
    {
      heading: 'Launch',
      description:
        'Our expert team will code and launch your website, keeping you updated along the way ',
    },
  ]

  const expertiseCards = [
    {
      imageSrc:
        'https://www.popwebdesign.net/popart_blog/wp-content/uploads/2017/04/React.jpg',
      title: 'React',
      description: '',
      url: '/',
    },
    {
      imageSrc:
        'https://i-lab.harvard.edu/innolabs/wp-content/uploads/sites/5/2019/02/aws_logo.png',
      title: 'HTML, CSS and JavaScript',
      description: '',
      url: '/',
    },
    {
      imageSrc: '',
      title: 'AWS',
      description: '',
      url: '/',
    },
  ]
  return (
    <AnimationRevealPage>
      {/* Background Image with centered content, A large hero image and with a short intro and call to action */}
      <Hero
        heading='Your audience is online,'
        semiHeading='you should be too.'
        action='Apply to our tech program now'
        backgroundImageSrc='https://images.unsplash.com/photo-1549299513-83dceea1f48b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1054&q=80'
      />
      {/* TwoColWithSteps, provides some information regarding how the service is carried out */}
      <ServiceLayout
        imageBorder={true}
        imageDecoratorBlob={true}
        imageShadow={true}
        steps={serviceSteps}
        imageSrc='https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80'
      />

      {/* ThreeColWithSideImage, states what areas and programs we have expertise in */}
      <Expertise
        heading='Expertise'
        subheading='A few of the technologies we use'
        cards={expertiseCards}
      />
      {/* <Portfolio heading='Our Portfolio' /> */}
      {/* Two Col With Button, gives a short intro about who Frameless is */}
      <MainFeature1
        subheading={<Subheading>About Frameless Technology Program</Subheading>}
        heading='A launchpad for student-led startups'
        buttonRounded={false}
        description='We strive to boost organizations towards their visions, and  it is vital for them to have a strong, contemporary online presence, especially with the increasing rates of online browsing. Potential members and consumers are more likely to find you online now than through any other means, so having an identifiable presence is important.'
        primaryButtonText='Apply Now'
        primaryButtonUrl='/components/blocks/Form/TechnologyProgramSignUp'
        imageSrc='https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80'
      />
      <MainFeature1
        subheading={
          <Subheading>Our Vision for the Technology Program</Subheading>
        }
        heading='Design modern online presences '
        description='As a young, vibrant, powerful new startup we understand that you need to make a statement, and what better place to do that than online, where the world is your audience. So, we have created this program to support you along your launch onto the online stage'
        buttonRounded={false}
        primaryButtonText='Contact Us'
        imageSrc='https://images.unsplash.com/3/doctype-hi-res.jpg?ixlib=rb-1.2.1&auto=format&fit=crop&w=768&q=80'
        textOnLeft={false}
      />
      {/* Three Columns Simple, displays a heading along with a three card that have icons and text displaying our values */}
      <Features
        subheading={<Subheading>Our Technological Promises</Subheading>}
        heading='Focus on your vision, leave the tech to us. '
        description='We know that managing a new startup is arduous and tiring, so we promise to take lighten the load on your shoulders, and allow you and your organization to spread your wings.'
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
              'It is of great importance that all our clients are satisfied with our services, and so we place them at the center of all our decisions',
            url: '/',
          },
        ]}
        linkText=''
      />
      {/* Profile Three Col Grid, an arrangement of profile cards in three columns, used to portray our members */}
      <TeamCardGrid subheading={<Subheading>Our Team</Subheading>} />
      {/* a call to action get started component */}
      <GetStartedLight
        subheading='Ready to turn on ?'
        heading='Launch your custom site today'
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
