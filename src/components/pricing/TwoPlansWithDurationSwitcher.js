import React, { useState } from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'
import { css } from 'styled-components/macro' //eslint-disable-line
import {
  SectionHeading,
  Subheading as SubheadingBase,
} from '../misc/Headings.js'
import { SectionDescription } from '../misc/Typography.js'
import { PrimaryButton as PrimaryButtonBase } from '../misc/Buttons.js'
import { Container, ContentWithPaddingXl } from '../misc/Layouts.js'
import SvgDecoratorBlob1 from '../../images/svg-decorator-blob-6.svg'
import SvgDecoratorBlob2 from '../../images/svg-decorator-blob-7.svg'

const HeaderContainer = tw.div`w-full flex flex-col items-center`
const Subheading = tw(SubheadingBase)`mb-4`
const Heading = tw(SectionHeading)`w-full`
const Description = tw(SectionDescription)`w-full text-center`

const PlanDurationSwitcher = tw.div`block w-full max-w-xs sm:inline-block sm:w-auto border-2 rounded-full px-1 py-1 mt-8`
const SwitchButton = styled.button`
  ${tw`w-1/2 px-4 py-3 text-sm font-bold text-gray-700 transition duration-300 rounded-full sm:w-32 sm:px-8 focus:outline-none`}
  ${(props) => props.active && tw`text-gray-100 bg-primary-500`}
`

const PlansContainer = tw.div`flex justify-center flex-col md:flex-row items-center md:items-start relative`
const Plan = styled.div`
  ${tw`relative flex flex-col w-full px-8 mt-16 text-center text-gray-900 bg-white rounded-lg max-w-72 md:mr-12 md:last:mr-0 shadow-raised`}

  ${(props) =>
    props.featured &&
    css`
      ${tw`border-2 border-gray-200 shadow-none`}
    `}
`

const PlanHeader = styled.div`
  ${tw`flex flex-col py-8 -mx-8 leading-relaxed bg-gray-100 rounded-t-lg`}
  .name {
    ${tw`text-xl font-bold`}
  }
  .price {
    ${tw`my-1 text-4xl font-bold sm:text-5xl`}
  }
  .slash {
    ${tw`text-xl text-gray-500`}
  }
  .duration {
    ${tw`font-medium tracking-widest text-gray-500 lowercase`}
  }
  .mainFeature {
    ${tw`text-sm font-medium tracking-wide text-gray-500`}
  }
`
const PlanFeatures = styled.div`
  ${tw`flex flex-col flex-1 px-8 py-8 -mx-8 text-sm`}
  .feature {
    ${tw`mt-5 font-semibold text-gray-500 first:mt-0`}
  }
`

const PlanAction = tw.div`px-4 pb-8`
const BuyNowButton = styled(PrimaryButtonBase)`
  ${tw`w-full py-4 text-sm tracking-wider transform rounded-full hover:shadow-xl hocus:translate-x-px hocus:-translate-y-px focus:shadow-outline`}
`

const DecoratorBlob1 = styled(SvgDecoratorBlob1)`
  ${tw`absolute bottom-0 left-0 w-64 h-64 transform -translate-y-1/2 opacity-25 pointer-events-none -z-20 -translate-x-2/3`}
`
const DecoratorBlob2 = styled(SvgDecoratorBlob2)`
  ${tw`absolute top-0 right-0 w-64 h-64 text-teal-300 transform translate-y-1/2 opacity-25 pointer-events-none fill-current -z-20 translate-x-2/3`}
`

export default ({
  subheading = 'Pricing',
  heading = 'Flexible Plans.',
  description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  plans = null,
  primaryButtonText = 'Buy Now',
  planDurations = [
    {
      text: 'Month',
      switcherText: 'Monthly',
    },
    {
      text: 'Year',
      switcherText: 'Yearly',
    },
  ],
}) => {
  const defaultPlans = [
    {
      name: 'Free Plan',
      durationPrices: ['$0', '$0'],
      mainFeature: 'For Personal Blogs',
      features: [
        '30 Templates',
        '7 Landing Pages',
        '12 Internal Pages',
        'Basic Assistance',
      ],
    },
    {
      name: 'Pro Plan',
      durationPrices: ['$49', '$499'],
      mainFeature: 'Suited for Production Websites',
      features: [
        '60 Templates',
        '8 Landing Pages',
        '22 Internal Pages',
        'Priority Assistance',
        'Lifetime Updates',
      ],
      featured: true,
    },
  ]

  if (!plans) plans = defaultPlans

  const [activeDurationIndex, setActiveDurationIndex] = useState(0)

  return (
    <Container>
      <ContentWithPaddingXl>
        <HeaderContainer>
          {subheading && <Subheading>{subheading}</Subheading>}
          <Heading>{heading}</Heading>
          {description && <Description>{description}</Description>}
          <PlanDurationSwitcher>
            {planDurations.map((planDuration, index) => (
              <SwitchButton
                active={activeDurationIndex === index}
                key={index}
                onClick={() => setActiveDurationIndex(index)}
              >
                {planDuration.switcherText}
              </SwitchButton>
            ))}
          </PlanDurationSwitcher>
        </HeaderContainer>
        <PlansContainer>
          {plans.map((plan, index) => (
            <Plan key={index} featured={plan.featured}>
              <PlanHeader>
                <span className='priceAndDuration'>
                  <span className='price'>
                    {plan.durationPrices[activeDurationIndex]}
                  </span>
                  <span className='slash'> / </span>
                  <span className='duration'>
                    {planDurations[activeDurationIndex].text}
                  </span>
                </span>
                <span className='name'>{plan.name}</span>
                <span className='mainFeature'>{plan.mainFeature}</span>
              </PlanHeader>
              <PlanFeatures>
                {plan.features.map((feature, index) => (
                  <span key={index} className='feature'>
                    {feature}
                  </span>
                ))}
              </PlanFeatures>
              <PlanAction>
                <BuyNowButton>{primaryButtonText}</BuyNowButton>
              </PlanAction>
            </Plan>
          ))}
        </PlansContainer>
      </ContentWithPaddingXl>
      <DecoratorBlob1 />
      <DecoratorBlob2 />
    </Container>
  )
}
