import React from 'react'
import AnimationRevealPage from '../helpers/AnimationRevealPage.js'
import tw from 'twin.macro'
import MarketingSignUp from '../components/forms/TwoColContactUsWithIllustrationFullForm'
import styled from 'styled-components' //eslint-disable-line
import { css } from 'styled-components/macro' //eslint-disable-line
import Footer from '../components/footers/MiniCenteredFooter'

// The purpose of this page is to display information about our organization's mission, vision, values and team.
// The majority of this is done using simple cards, it consists of two large columns followed by card grids

const Subheading = tw.span`uppercase tracking-wider text-sm`
export default () => {
  const signUpHeading = (
    <>
      Time to <span tw='text-primary-500'>takeoff</span>
      <wbr /> with us.
    </>
  )

  const signUpInputFields = [
    {
      fieldId: 'organization_name',
      fieldPlaceholder: 'What is the name of our organization?',
      fieldType: 'input',
      fieldEmailSend: false,
    },
    {
      fieldId: 'organization_values',
      fieldPlaceholder: 'What are the values of your organization?',
      fieldType: 'textarea',
      fieldEmailSend: false,
    },
    {
      fieldId: 'organization_aim',
      fieldPlaceholder: 'What do you aim to do?',
      fieldType: 'textarea',
      fieldEmailSend: false,
    },
    {
      fieldId: 'organization_audience',
      fieldPlaceholder: 'Describe your target audience?',
      fieldType: 'textarea',
      fieldEmailSend: false,
    },
  ]
  return (
    <AnimationRevealPage>
      {/* Two Col Contact Us Full Form, this is the main form which will be used to display the sign up form */}
      <MarketingSignUp
        subheading='Apply now'
        heading={signUpHeading}
        description='This short form allows us to learn more about you and your needs so that we can tailor our services to suit you'
        inputFields={signUpInputFields}
      />
      <Footer />
    </AnimationRevealPage>
  )
}
