import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
//eslint-disable-next-line
import { css } from 'styled-components/macro'
import { SectionHeading } from '../misc/Headings.js'

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
  ${tw`flex flex-col flex-wrap items-center max-w-screen-xl py-20 mx-auto md:items-stretch md:flex-row md:justify-center md:py-24`}
`
const Heading = tw(SectionHeading)`w-full`

const Column = styled.div`
  ${tw`flex px-6 md:w-1/2 lg:w-1/3`}
`

const Card = styled.div`
  ${tw`flex flex-col items-center max-w-xs px-6 py-10 mx-auto mt-12 border-2 border-dashed rounded-lg border-primary-500`}
  .imageContainer {
    ${tw`relative flex-shrink-0 p-6 text-center border-2 rounded-full border-primary-500`}
    img {
      ${tw`w-8 h-8`}
    }
  }

  .textContainer {
    ${tw`mt-6 text-center`}
  }

  .title {
    ${tw`mt-2 text-xl font-bold leading-none text-primary-500`}
  }

  .description {
    ${tw`mt-3 text-sm font-semibold leading-loose text-secondary-100`}
  }
`

const DecoratorBlob = styled(SvgDecoratorBlob3)`
  ${tw`absolute bottom-0 right-0 w-64 transform translate-x-32 translate-y-48 opacity-25 pointer-events-none `}
`

export default () => {
  /*
   * This componets has an array of object denoting the cards defined below. Each object in the cards array can have the key (Change it according to your need, you can also add more objects to have more cards in this feature component):
   *  1) imageSrc - the image shown at the top of the card
   *  2) title - the title of the card
   *  3) description - the description of the card
   *  If a key for a particular card is not provided, a default value is used
   */

  const cards = [
    {
      imageSrc: ShieldIconImage,
      title: 'Ads Management',
      description:
        'We create and manage ads that you need, from creation to deployment. Lorem ipsum donor sit amet consicou.',
    },
    { imageSrc: SupportIconImage, title: 'Video Marketing' },
    { imageSrc: CustomizeIconImage, title: 'Customer Relation' },
    { imageSrc: ReliableIconImage, title: 'Product Outreach' },
    { imageSrc: FastIconImage, title: 'PR Campaign' },
    { imageSrc: SimpleIconImage, title: 'Product Expansion' },
  ]

  return (
    <Container>
      <ThreeColumnContainer>
        <Heading>
          Our Professional <span tw='text-primary-500'>Services</span>
        </Heading>
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
                    'Lorem ipsum donor amet siti ceali ut enim ad minim veniam, quis nostrud. Sic Semper Tyrannis. Neoas Calie artel.'}
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
