import React from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'
import { css } from 'styled-components/macro' //eslint-disable-line
import { SectionHeading, Subheading } from '../misc/Headings.js'
import { PrimaryLink as PrimaryLinkBase } from '../misc/Links.js'
import { PrimaryButton as PrimaryButtonBase } from '../misc/Buttons.js'
import LocationIcon from 'feather-icons/dist/icons/map-pin.svg'
import TimeIcon from 'feather-icons/dist/icons/clock.svg'
import ArrowRightIcon from '../../images/arrow-right-icon.svg'

const Container = tw.div`relative`
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`

const ThreeColumn = tw.div`flex flex-wrap justify-evenly`
const Column = tw.div`xl:mr-12 xl:last:mr-0`

const CardContainer = tw(Column)`w-full md:w-1/2 xl:w-3/12 mt-16 xl:mt-0 `

const Card = tw.div`mx-auto xl:mx-0 xl:ml-auto max-w-sm md:max-w-xs lg:max-w-sm xl:max-w-xs`
const CardImage = styled.div((props) => [
  `background-image: url("${props.imageSrc}");`,
  tw`bg-center bg-cover rounded h-80`,
])

const CardText = tw.div`mt-4`

const CardHeader = tw.div`flex justify-between items-center`
const CardCompany = tw.div`text-gray-500 font-bold text-lg`
const CardType = tw.div`font-semibold text-sm text-gray-600`

const CardTitle = tw.h5`text-xl text-gray-600 mt-4 font-bold`

const CardMeta = styled.div`
  ${tw`flex flex-row flex-wrap justify-center text-xs font-semibold tracking-wide text-white uppercase sm:items-center`}
`

const CardMetaFeature = styled.div`
  ${tw`flex items-center mt-4 mr-4 last:mr-0`}
  svg {
    ${tw`w-5 h-5 mr-1`}
  }
`
const CardAction = tw(PrimaryButtonBase)`w-full mt-6`

export default ({
  cardLinkText = 'Learn more',

  cards = false,
}) => {
  const defaultCards = [
    {
      image:
        'https://images.unsplash.com/photo-1563461660947-507ef49e9c47?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80',
      company: 'Tesla Inc.',
      type: 'Ad Campaign',
      title: 'Personalized Ad Campaign using Google AdWords',
      duration: '90 Days Campaign',
      location: 'New York',
    },
    {
      image:
        'https://images.unsplash.com/photo-1573165231977-3f0e27806045?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80',
      company: 'Nestle',
      type: 'SEO Marketing',
      title: 'Ranking #1 for keywords like Chocolate, Snack',
      duration: '180 Day Campaign',
      location: 'Palo Alto',
    },
  ]
  if (cards === false) {
    cards = defaultCards
  }
  return (
    <Container>
      <Content>
        <ThreeColumn>
          {cards.map((card, index) => (
            <CardContainer key={index}>
              <Card>
                <CardImage imageSrc={card.image} />
                <CardText>
                  <CardHeader>
                    <CardCompany>{card.company}</CardCompany>
                    <CardType>{card.type}</CardType>
                  </CardHeader>
                  <CardTitle>{card.title}</CardTitle>
                  <CardMeta>
                    <CardMetaFeature>
                      <TimeIcon /> {card.duration}
                    </CardMetaFeature>
                    <CardMetaFeature>
                      <LocationIcon /> {card.location}
                    </CardMetaFeature>
                  </CardMeta>
                  <CardAction>{cardLinkText}</CardAction>
                </CardText>
              </Card>
            </CardContainer>
          ))}
        </ThreeColumn>
      </Content>
    </Container>
  )
}
