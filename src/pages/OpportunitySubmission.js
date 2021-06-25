import React from 'react'
import AnimationRevealPage from '../helpers/AnimationRevealPage.js'
import tw from 'twin.macro'
import OpportunitySubmission from '../components/forms/TwoColContactUsWithIllustrationFullForm'
import Header from '../components/headers/light'
import styled from 'styled-components' //eslint-disable-line
import { css } from 'styled-components/macro' //eslint-disable-line
import Footer from '../components/footers/MiniCenteredFooter'
import { toast } from 'react-toastify'

// The purpose of this page is to display information about our organization's mission, vision, values and team.
// The majority of this is done using simple cards, it consists of two large columns followed by card grids

const Subheading = tw.span`uppercase tracking-wider text-sm`
export default () => {
  const opportunitySubmissionHeading = (
    <>
      Help us <span tw='text-primary-500'>launch others</span>
      <wbr /> towards success.
    </>
  )

  const opportunitySubmissionInputFields = [
    {
      fieldId: 'opportunity_organization_name',
      fieldPlaceholder:
        'What is the name of the organization or company who provides the opportunity?',
      fieldType: 'input',
      fieldEmailSend: false,
    },
    {
      fieldId: 'opportunity_duration',
      fieldPlaceholder: 'How long does this opportunity run for? e.g. 90 days',
      fieldType: 'input',
      fieldEmailSend: false,
    },
    {
      fieldId: 'opportunity_type',
      fieldPlaceholder:
        'What type of opportunity is this? e.g. virtual, full-time...',
      fieldType: 'textarea',
      fieldEmailSend: false,
    },
    {
      fieldId: 'opportunity_title',
      fieldPlaceholder:
        'What is the title of this opportunity ? e.g. research associate or development intern',
      fieldType: 'textarea',
      fieldEmailSend: false,
    },
    {
      fieldId: 'opportunity_description',
      fieldPlaceholder:
        'Briefly describe the opportunity, what it involves, what is required, what is provided etc.',
      fieldType: 'textarea',
      fieldEmailSend: false,
    },
    {
      fieldId: 'opportunity_url',
      fieldPlaceholder:
        'Please provide the link to either the site of the organization or to the opportunity itself',
      fieldType: 'input',
      fieldEmailSend: false,
    },
  ]

  const notifyDelayedEntry = () => {
    toast.info(
      'Opportunities can take up to 12 hours to be reviewed after submission, to ensure that we provide quality services to our visionaries',
      {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      }
    )
  }
  return (
    <AnimationRevealPage>
      {/* Navbar with button */}
      <Header />
      {/* Two Col Contact Us Full Form, this is the main form which will be used to display the sign up form */}
      {notifyDelayedEntry()}
      <OpportunitySubmission
        subheading='Submit an opportunity now'
        heading={opportunitySubmissionHeading}
        description='By filling this out you fuel the boosters which allow Frameless to propel visionaries across the world towards success '
        inputFields={opportunitySubmissionInputFields}
        imageSrc='https://images.unsplash.com/photo-1598209494655-b8e249540dfc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80'
      />
    </AnimationRevealPage>
  )
}
