import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import { css } from 'styled-components/macro' //eslint-disable-line
import {
  SectionHeading,
  Subheading as SubheadingBase,
} from '../misc/Headings.js'
import { SectionDescription } from '../misc/Typography.js'
import { Container, ContentWithPaddingXl } from '../misc/Layouts.js'
import ArrowRightIcon from '../../images/arrow-right-icon.svg'
import SupportIconImage from '../../images/support-icon.svg'
import ShieldIconImage from '../../images/shield-icon.svg'
import CustomizeIconImage from '../../images/customize-icon.svg'
import SvgDecoratorBlob3 from '../../images/svg-decorator-blob-3.svg'

import { NavLink } from 'react-router-dom'

const Heading = tw(SectionHeading)``
const Subheading = tw(SubheadingBase)`text-center mb-3`
const Description = tw(SectionDescription)`text-center mx-auto`
const ThreeColumnContainer = styled.div`
  ${tw`flex flex-col flex-wrap items-center max-w-screen-lg mx-auto mt-10 lg:items-stretch lg:flex-row lg:justify-center`}
`
const Column = styled.div`
  ${tw`max-w-xs lg:w-1/3`}
`

const Card = styled(NavLink)`
  ${tw`flex flex-col items-center h-full px-4 py-8 mx-4 text-center transition-transform duration-300 transform rounded hover:cursor-pointer hover:scale-105 `}
  .imageContainer {
    ${tw`p-4 text-center bg-gray-100 rounded-full`}
    img {
      ${tw`w-8 h-8`}
    }
  }

  .title {
    ${tw`mt-4 text-xl font-bold leading-none`}
  }

  .description {
    ${tw`mt-4 text-sm font-medium text-secondary-300`}
  }

  .link {
    ${tw`inline-flex items-center pt-5 mt-auto text-sm font-bold leading-none transition duration-300 text-primary-300 hocus:text-primary-900`}
    .icon {
      ${tw`w-4 ml-2`}
    }
  }
`

const DecoratorBlob = styled(SvgDecoratorBlob3)`
  ${tw`absolute bottom-0 right-0 w-64 transform translate-x-32 translate-y-40 opacity-25 pointer-events-none`}
`

export default ({
  cards = [
    {
      imageSrc: ShieldIconImage,
      title: 'Secure',
      description:
        'We strictly only deal with vendors that provide top notch security.',
      url: 'https://timerse.com',
    },
    {
      imageSrc: SupportIconImage,
      title: '24/7 Support',
      description: 'Lorem ipsum donor amet siti ceali placeholder text',
      url: 'https://google.com',
    },
    {
      imageSrc: CustomizeIconImage,
      title: 'Customizable',
      description: 'Lorem ipsum donor amet siti ceali placeholder text',
      url: 'https://reddit.com',
    },
  ],
  linkText = 'Learn More',
  heading = '',
  subheading = '',
  description = '',
  imageContainerCss = null,
  imageCss = null,
}) => {
  /*
   * This componets accepts a prop - `cards` which is an array of object denoting the cards. Each object in the cards array can have the following keys (Change it according to your need, you can also add more objects to have more cards in this feature component):
   *  1) imageSrc - the image shown at the top of the card
   *  2) title - the title of the card
   *  3) description - the description of the card
   *  4) url - the url that the card should goto on click
   */
  return (
    <Container>
      <ContentWithPaddingXl>
        {subheading && <Subheading>{subheading}</Subheading>}
        {heading && <Heading>{heading}</Heading>}
        {description && <Description>{description}</Description>}
        <ThreeColumnContainer>
          {cards.map((card, i) => (
            <Column key={i}>
              <Card to={card.url}>
                <span className='imageContainer' css={imageContainerCss}>
                  <img src={card.imageSrc} alt='' css={imageCss} />
                </span>
                <span className='title'>{card.title}</span>
                <p className='description'>{card.description}</p>
                {linkText && (
                  <span className='link'>
                    <span>{linkText}</span>
                    <ArrowRightIcon className='icon' />
                  </span>
                )}
              </Card>
            </Column>
          ))}
        </ThreeColumnContainer>
      </ContentWithPaddingXl>
      <DecoratorBlob />
    </Container>
  )
}
