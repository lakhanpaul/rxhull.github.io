import React from 'react'
import tw from 'twin.macro'
import { css } from 'styled-components/macro' //eslint-disable-line
import AnimationRevealPage from '../helpers/AnimationRevealPage.js'
import Hero from '../components/hero/TwoColumnWithVideo.js'
import Features from '../components/features/ThreeColSimple.js'
import MainFeature from '../components/features/TwoColWithButton.js'
import MainFeature2 from '../components/features/TwoColSingleFeatureWithStats2.js'
import TabGrid from '../components/cards/TabCardGrid.js'
import Testimonial from '../components/testimonials/ThreeColumnWithProfileImage.js'
import GetStarted from '../components/cta/GetStartedLight'
import Footer from '../components/footers/MiniCenteredFooter'
import { ToastContainer, toast } from 'react-toastify'

import Form from '../helpers/Form'
import TextInput from '../helpers/TextInput'
import SubmissionHandler from '../helpers/SubmissionHandler'

import chefIconImageSrc from '../images/chef-icon.svg'
import celebrationIconImageSrc from '../images/celebration-icon.svg'
import shopIconImageSrc from '../images/shop-icon.svg'

export default () => {
  const Subheading = tw.span`tracking-wider text-sm font-medium`
  const HighlightedText = tw.span`bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block`
  const HighlightedTextInverse = tw.span`bg-gray-100 text-primary-500 px-4 transform -skew-x-12 inline-block`
  const Description = tw.span`inline-block mt-8`
  const imageCss = tw`rounded-4xl `

  // the cards used in the grid that displays our programs
  const programTabs = {
    All: [
      {
        imageSrc:
          'https://images.unsplash.com/photo-1506377872008-6645d9d29ef7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
        title: 'Opportunity Finder',
        content:
          'Checkout our community driven opportunity finder and launch yourself into something new today',
        url: '/components/innerPages/OpportunityFinderPage',
        rating: '4.8',
        buttonAction: 'Use now',
      },
      {
        imageSrc:
          'https://images.unsplash.com/photo-1516251193007-45ef944ab0c6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
        title: 'Marketing Launchpad',
        content:
          'Creating content and designing brands to make your organization a statement',

        rating: '4.9',
        url: '/components/innerPages/MarketingProgramPage',
        buttonAction: 'Learn more',
        secondaryButtonAction: 'Apply now',
        secondaryUrl: '/components/blocks/Form/MarketingProgramSignUp',
      },
      {
        imageSrc:
          'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1007&q=80',
        title: 'Tech Launchpad',
        content:
          'Designing contemporary online solutions to ensure you reach as many people as possible',
        url: '/components/innerPages/TechnologyProgramPage',
        rating: '5',
        buttonAction: 'Learn more',
        secondaryButtonAction: 'Apply now',
        secondaryUrl: '/components/blocks/Form/TechnologyProgramSignUp',
      },
    ],
    Technology: [
      {
        imageSrc:
          'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1007&q=80',
        title: 'Tech Launchpad',
        content:
          'Designing contemporary online solutions to ensure you reach as many people as possible',
        url: '/components/innerPages/TechnologyProgramPage',
        rating: '5',
        buttonAction: 'Learn more',
        secondaryButtonAction: 'Apply now',
        secondaryUrl: '/components/blocks/Form/TechnologyProgramSignUp',
      },
    ],
    Marketing: [
      {
        imageSrc:
          'https://images.unsplash.com/photo-1516251193007-45ef944ab0c6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
        title: 'Marketing Launchpad',
        content:
          'Creating content and designing brands to make your organization a statement',
        url: '/components/innerPages/MarketingProgramPage',
        rating: '4.9',
        buttonAction: 'Learn more',
        secondaryButtonAction: 'Apply now',
        secondaryUrl: '/components/blocks/Form/MarketingProgramSignUp',
      },
    ],
    General: [
      {
        imageSrc:
          'https://images.unsplash.com/photo-1506377872008-6645d9d29ef7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
        title: 'Opportunity Finder',
        content:
          'Checkout our community driven opportunity finder and launch yourself into something new today',
        url: '/components/innerPages/OpportunityFinderPage',
        rating: '4.8',
        buttonAction: 'Use now',
      },
    ],
  }

  // this function is called when the primary hero button is clicked, it locates the programs div
  // and then scrolls to it in a smooth animation
  function scrollToPrograms() {
    // accesses the div above the programs cards -- this div is used purely as a signal for this function
    const programsDiv = document.getElementById('programs')

    // extracts the coordinates of the div relative to the window
    const programsRectangle = programsDiv.getBoundingClientRect()

    console.log('RECTANGLLLLLE', programsRectangle)

    // defines the intended location and behavior of the scroll
    const scrollToOptions = {
      left: programsRectangle.left,
      top: programsRectangle.top,
      behavior: 'smooth',
    }

    // scrolls to the specified location
    window.scrollTo(scrollToOptions)

    // returns a toast alert to let the user know how to apply
    toast.info('Hover over the programs to apply!', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    })
  }

  const notifyScrollUp = () => {
    toast.info('Scroll up and hover over the programs to apply!', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    })
  }

  return (
    <AnimationRevealPage>
      <Hero
        heading={
          <>
            Think Big, <HighlightedText>Go Further.</HighlightedText>
          </>
        }
        description='Frameless was established to design success and inspire ambition in student leaders, boosting them towards their vision for a brighter world.'
        imageSrc='https://images.unsplash.com/photo-1448387473223-5c37445527e7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
        imageCss={imageCss}
        imageDecoratorBlob={true}
        primaryButtonText='Look at our programs'
        watchVideoButtonText='Learn more'
        primaryOnClick={scrollToPrograms}
      />
      <MainFeature
        subheading={<Subheading>Established Since 2021</Subheading>}
        heading={
          <>
            It's time to take off
            <wbr /> <HighlightedText>launch your startup now.</HighlightedText>
          </>
        }
        description={
          <Description>
            We aim to enhance your organization and carefully foster your ideas
            into reality
            <br />
            <br />
            Apply for our accelerator programs, and achieve success.
          </Description>
        }
        buttonRounded={false}
        textOnLeft={false}
        primaryButtonText='Apply Now'
        imageSrc={
          'https://images.unsplash.com/photo-1484264121943-78dd345bd494?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80'
        }
        imageCss={Object.assign(tw`bg-cover`, imageCss)}
        imageDecoratorBlob={true}
        imageDecoratorBlobCss={tw`-translate-x-1/2 opacity-25 left-1/2 md:w-32 md:h-32`}
      />
      <Features
        heading={
          <>
            Exceptional <HighlightedText>Services.</HighlightedText>
          </>
        }
        cards={[
          {
            imageSrc:
              'https://images.unsplash.com/photo-1536551390152-204fcb0b2a87?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fGxvb2tpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            title: 'Expert mentors',
            description: 'Our team is experienced and great at what they do',
            url: 'components/innerPages/AboutUsPage',
          },
          {
            imageSrc:
              'https://images.unsplash.com/photo-1536551390152-204fcb0b2a87?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fGxvb2tpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            title: '24/7 Support',
            description: 'We are always on call to help if have any concerns',
            url: 'components/innerPages/AboutUsPage',
          },
          {
            imageSrc:
              'https://images.unsplash.com/photo-1536551390152-204fcb0b2a87?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fGxvb2tpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            title: 'Custom Solutions',
            description:
              'Each solution is designed and built from the ground up, just for you',
            url: 'components/innerPages/AboutUsPage',
          },
        ]}
        imageContainerCss={tw`p-2!`}
        imageCss={tw`w-20! h-20!`}
      />{' '}
      {/* TabGrid Component also accepts a tabs prop to customize the tabs and its content directly. Please open the TabGrid component file to see the structure of the tabs props.*/}
      {/* the below div simply provides an anchor - through its id, which allows the 'look at our programs' link in the header to scroll to this point */}
      <div id='programs'></div>
      <TabGrid
        heading={
          <>
            Checkout our
            <HighlightedText> new programs.</HighlightedText>
          </>
        }
        tabs={programTabs}
        id='programs'
      />
      <MainFeature2
        subheading={<Subheading>A Reputed Brand</Subheading>}
        heading={
          <>
            Why <HighlightedText>Choose Us ?</HighlightedText>
          </>
        }
        statistics={[]}
        primaryButtonText='Apply Now'
        description="You've got an idea that could change the world, and we've got the expertise to give life to it. Our launchpads aim to accelerate your organization towards success, using our resources to propel you forward and mentor you along the way. "
        primaryButtonUrl='/'
        primaryOnClick={notifyScrollUp}
        imageInsideDiv={false}
        imageSrc='https://images.unsplash.com/photo-1536236155319-1edab471917c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80'
        imageCss={Object.assign(tw`bg-cover`, imageCss)}
        imageContainerCss={tw`h-auto md:w-1/2`}
        imageDecoratorBlob={true}
        imageDecoratorBlobCss={tw`-translate-x-1/2 opacity-25 left-1/2 md:w-32 md:h-32`}
        textOnLeft={true}
      />
      {/* <Testimonial
        subheading=''
        heading={
          <>
            Associates <HighlightedText>Love Us.</HighlightedText>
          </>
        }
      /> */}
      <GetStarted
        subheading='Ready to takeoff,'
        heading='Reach out to us today.'
        primaryLinkText='Apply now'
        secondaryLinkText='Contact us'
        primaryLinkUrl='/'
        primaryOnClick={notifyScrollUp}
        secondaryLinkUrl='/components/blocks/Form/TwoColContactUsFull'
      />
      <Footer />
    </AnimationRevealPage>
  )
}
