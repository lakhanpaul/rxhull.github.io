import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
//eslint-disable-next-line
import { css } from 'styled-components/macro'
import {
  SectionHeading,
  Subheading as SubheadingBase,
} from '../misc/Headings.js'
import { SectionDescription } from '../misc/Typography.js'

import defaultCardImage from '../../images/shield-icon.svg'

import SvgDecoratorBlob3 from '../../images/svg-decorator-blob-3.svg'

import SupportIconImage from '../../images/support-icon.svg'
import ShieldIconImage from '../../images/shield-icon.svg'
import CustomizeIconImage from '../../images/customize-icon.svg'
import FastIconImage from '../../images/fast-icon.svg'
import ReliableIconImage from '../../images/reliable-icon.svg'
import SimpleIconImage from '../../images/simple-icon.svg'

const Container = tw.div`relative`

const ThreeColumnContainer = styled.div`
  ${tw`flex flex-col flex-wrap items-center max-w-screen-lg py-20 mx-auto md:items-stretch md:flex-row md:justify-center md:py-24`}
`
const Subheading = tw(SubheadingBase)`mb-4`
const Heading = tw(SectionHeading)`w-full`
const Description = tw(SectionDescription)`w-full text-center`

const VerticalSpacer = tw.div`mt-10 w-full`

const Column = styled.div`
  ${tw`max-w-sm md:w-1/2 lg:w-1/3`}
`

const Card = styled.div`
  ${tw`flex flex-col items-center h-full px-2 py-8 mx-4 text-center sm:flex-row sm:items-start sm:text-left`}
  .imageContainer {
    ${tw`flex-shrink-0 p-5 text-center border rounded-full`}
    img {
      ${tw`w-6 h-6 bg-cover`}
    }
  }

  .textContainer {
    ${tw`mt-4 sm:ml-4 sm:mt-2`}
  }

  .title {
    ${tw`mt-4 text-2xl font-bold leading-none tracking-wide`}
  }

  .description {
    ${tw`mt-1 font-medium leading-loose sm:mt-4 text-secondary-100`}
  }
`

const DecoratorBlob = styled(SvgDecoratorBlob3)`
  ${tw`absolute bottom-0 right-0 w-64 transform translate-x-32 translate-y-48 opacity-25 pointer-events-none `}
`

export default ({
  cards = null,
  heading = 'Amazing Features',
  subheading = 'Features',
  description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
}) => {
  /*
   * This componets has an array of object denoting the cards defined below. Each object in the cards array can have the key (Change it according to your need, you can also add more objects to have more cards in this feature component) or you can directly pass this using the cards prop:
   *  1) imageSrc - the image shown at the top of the card
   *  2) title - the title of the card
   *  3) description - the description of the card
   *  If a key for a particular card is not provided, a default value is used
   */

  const defaultCards = [
    {
      imageSrc: ShieldIconImage,
      title: 'Secure',
      description:
        'We strictly only deal with vendors that provide top notch security.',
    },
    { imageSrc: SupportIconImage, title: '24/7 Support' },
    { imageSrc: CustomizeIconImage, title: 'Customizable' },
    { imageSrc: ReliableIconImage, title: 'Reliable' },
    { imageSrc: FastIconImage, title: 'Fast' },
    { imageSrc: SimpleIconImage, title: 'Easy' },
  ]

  if (!cards) cards = defaultCards

  return (
    <Container>
      <ThreeColumnContainer>
        {subheading && <Subheading>{subheading}</Subheading>}
        <Heading>{heading}</Heading>
        {description && <Description>{description}</Description>}
        <VerticalSpacer />
        {cards.map((card, i) => (
          <Column key={i}>
            <Card>
              <span className='imageContainer'>
                <img src={card.imageSrc || defaultCardImage} alt='' />
              </span>
              <span className='textContainer'>
                <span className='title'>{card.title || 'Fully Secure'}</span>
                <p className='description'>
                  {card.description ||
                    'Lorem ipsum donor amet siti ceali ut enim ad minim veniam, quis nostrud.'}
                </p>
              </span>
            </Card>
          </Column>
        ))}
      </ThreeColumnContainer>
      <DecoratorBlob />
    </Container>
  )
}
