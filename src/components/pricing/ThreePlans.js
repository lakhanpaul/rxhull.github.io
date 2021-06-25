import React from 'react'
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
import SvgDecoratorBlob from '../../images/svg-decorator-blob-6.svg'

const HeaderContainer = tw.div`mt-10 w-full flex flex-col items-center`
const Subheading = tw(SubheadingBase)`mb-4`
const Heading = tw(SectionHeading)`w-full`
const Description = tw(SectionDescription)`w-full text-center`

const PlansContainer = tw.div`flex justify-between flex-col lg:flex-row items-center lg:items-stretch relative`
const Plan = styled.div`
  ${tw`relative flex flex-col w-full max-w-sm px-8 pt-2 mt-16 text-center text-gray-900 bg-white rounded-lg shadow lg:mr-8 lg:last:mr-0`}
  .planHighlight {
    ${tw`absolute inset-x-0 top-0 h-2 rounded-t-lg`}
  }

  ${(props) =>
    props.featured &&
    css`
      background: rgb(100,21,255);
      background: linear-gradient(135deg, rgba(100,21,255,1) 0%, rgba(128,64,252,1) 100%);
background: rgb(85,60,154);
background: linear-gradient(135deg, rgba(85,60,154,1) 0%, rgba(128,90,213,1) 100%);
background: rgb(76,81,191);
background: linear-gradient(135deg, rgba(76,81,191,1) 0%, rgba(102,126,234,1) 100%);
      ${tw`text-gray-100 bg-primary-500`}
      .planHighlight {
        ${tw`hidden`}
      }
      .duration {
        ${tw`text-gray-200!`}
      }
      ${PlanFeatures} {
        ${tw`border-indigo-500`}
      }
      .feature:not(.mainFeature) {
        ${tw`text-gray-300!`}
      }
      ${BuyNowButton} {
        ${tw`bg-gray-100 text-primary-500 hocus:bg-gray-300 hocus:text-primary-800`}
    `}
`

const PlanHeader = styled.div`
  ${tw`flex flex-col py-8 leading-relaxed uppercase`}
  .name {
    ${tw`text-xl font-bold`}
  }
  .price {
    ${tw`my-1 text-4xl font-bold sm:text-5xl`}
  }
  .duration {
    ${tw`font-bold tracking-widest text-gray-500`}
  }
`
const PlanFeatures = styled.div`
  ${tw`flex flex-col flex-1 px-8 py-8 -mx-8 border-t-2 border-b-2`}
  .feature {
    ${tw`mt-5 font-medium first:mt-0`}
    &:not(.mainFeature) {
      ${tw`text-gray-600`}
    }
  }
  .mainFeature {
    ${tw`text-xl font-bold tracking-wide`}
  }
`

const PlanAction = tw.div`px-4 sm:px-8 xl:px-16 py-8`
const BuyNowButton = styled(PrimaryButtonBase)`
  ${tw`w-full py-4 text-sm tracking-wider uppercase transform rounded-full hover:shadow-xl hocus:translate-x-px hocus:-translate-y-px focus:shadow-outline`}
`

const DecoratorBlob = styled(SvgDecoratorBlob)`
  ${tw`absolute bottom-0 left-0 w-64 h-64 transform -translate-x-1/2 translate-y-1/2 opacity-25 pointer-events-none -z-20`}
`

export default ({
  subheading = 'Pricing',
  heading = 'Flexible Plans.',
  description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  plans = null,
  primaryButtonText = 'Buy Now',
}) => {
  const defaultPlans = [
    {
      name: 'Personal',
      price: '$17.99',
      duration: 'Monthly',
      mainFeature: 'Suited for Personal Blogs',
      features: [
        '30 Templates',
        '7 Landing Pages',
        '12 Internal Pages',
        'Basic Assistance',
      ],
    },
    {
      name: 'Business',
      price: '$37.99',
      duration: 'Monthly',
      mainFeature: 'Suited for Production Websites',
      features: [
        '60 Templates',
        '8 Landing Pages',
        '22 Internal Pages',
        'Priority Assistance',
      ],
      featured: true,
    },
    {
      name: 'Enterprise',
      price: '$57.99',
      duration: 'Monthly',
      mainFeature: 'Suited for Big Companies',
      features: [
        '90 Templates',
        '9 Landing Pages',
        '37 Internal Pages',
        'Personal Assistance',
      ],
    },
  ]

  if (!plans) plans = defaultPlans

  const highlightGradientsCss = [
    css`
      background: rgb(56, 178, 172);
      background: linear-gradient(
        115deg,
        rgba(56, 178, 172, 1) 0%,
        rgba(129, 230, 217, 1) 100%
      );
    `,
    css`
      background: rgb(56, 178, 172);
      background-image: linear-gradient(
        115deg,
        #6415ff,
        #7431ff,
        #8244ff,
        #8e56ff,
        #9a66ff
      );
    `,
    css`
      background: rgb(245, 101, 101);
      background: linear-gradient(
        115deg,
        rgba(245, 101, 101, 1) 0%,
        rgba(254, 178, 178, 1) 100%
      );
    `,
  ]

  return (
    <Container>
      <ContentWithPaddingXl>
        <HeaderContainer>
          {subheading && <Subheading>{subheading}</Subheading>}
          <Heading>{heading}</Heading>
          {description && <Description>{description}</Description>}
        </HeaderContainer>
        <PlansContainer>
          {plans.map((plan, index) => (
            <Plan key={index} featured={plan.featured}>
              {!plan.featured && (
                <div
                  className='planHighlight'
                  css={
                    highlightGradientsCss[index % highlightGradientsCss.length]
                  }
                />
              )}
              <PlanHeader>
                <span className='name'>{plan.name}</span>
                <span className='price'>{plan.price}</span>
                <span className='duration'>{plan.duration}</span>
              </PlanHeader>
              <PlanFeatures>
                <span className='feature mainFeature'>{plan.mainFeature}</span>
                {plan.features.map((feature, index) => (
                  <span key={index} className='feature'>
                    {feature}
                  </span>
                ))}
              </PlanFeatures>
              <PlanAction>
                <BuyNowButton
                  css={!plan.featured && highlightGradientsCss[index]}
                >
                  {primaryButtonText}
                </BuyNowButton>
              </PlanAction>
            </Plan>
          ))}
          <DecoratorBlob />
        </PlansContainer>
      </ContentWithPaddingXl>
    </Container>
  )
}
