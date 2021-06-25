import React from 'react'
import AnimationRevealPage from '../helpers/AnimationRevealPage.js'
import { Container as ContainerBase } from '../components/misc/Layouts'
import tw from 'twin.macro'
import styled from 'styled-components'
import { css } from 'styled-components/macro' //eslint-disable-line
import illustration from '../images/login-illustration.svg'
import logo from '../images/logo.svg'
import googleIconImageSrc from '../images/google-icon.png'
import twitterIconImageSrc from '../images/twitter-icon.png'
import LoginIcon from 'feather-icons/dist/icons/log-in.svg'

const Container = tw(
  ContainerBase
)`min-h-screen bg-primary-900 text-white font-medium flex justify-center -m-8`
const Content = tw.div`max-w-screen-xl m-0 sm:mx-20 sm:my-16 bg-white text-gray-900 shadow sm:rounded-lg flex justify-center flex-1`
const MainContainer = tw.div`lg:w-1/2 xl:w-5/12 p-6 sm:p-12`
const LogoLink = tw.a``
const LogoImage = tw.img`h-12 mx-auto`
const MainContent = tw.div`mt-12 flex flex-col items-center`
const Heading = tw.h1`text-2xl xl:text-3xl font-extrabold`
const FormContainer = tw.div`w-full flex-1 mt-8`

const SocialButtonsContainer = tw.div`flex flex-col items-center`
const SocialButton = styled.a`
  ${tw`flex items-center justify-center w-full max-w-xs py-3 mt-5 text-sm font-semibold text-gray-900 transition-all duration-300 bg-gray-100 border rounded-lg hocus:bg-gray-200 hocus:border-gray-400 focus:outline-none focus:shadow-outline first:mt-0`}
  .iconContainer {
    ${tw`p-2 bg-white rounded-full`}
  }
  .icon {
    ${tw`w-4`}
  }
  .text {
    ${tw`ml-4`}
  }
`

const DividerTextContainer = tw.div`my-12 border-b text-center relative`
const DividerText = tw.div`leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform -translate-y-1/2 absolute inset-x-0 top-1/2 bg-transparent`

const Form = tw.form`mx-auto max-w-xs`
const Input = tw.input`w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5 first:mt-0`
const SubmitButton = styled.button`
  ${tw`flex items-center justify-center w-full py-4 mt-5 font-semibold tracking-wide text-gray-100 transition-all duration-300 ease-in-out rounded-lg bg-primary-500 hover:bg-primary-900 focus:shadow-outline focus:outline-none`}
  .icon {
    ${tw`w-6 h-6 -ml-2`}
  }
  .text {
    ${tw`ml-3`}
  }
`
const IllustrationContainer = tw.div`sm:rounded-r-lg flex-1 bg-purple-100 text-center hidden lg:flex justify-center`
const IllustrationImage = styled.div`
  ${(props) => `background-image: url("${props.imageSrc}");`}
  ${tw`w-full max-w-sm m-12 bg-center bg-no-repeat bg-contain xl:m-16`}
`

export default ({
  logoLinkUrl = '#',
  illustrationImageSrc = illustration,
  headingText = 'Sign In To Treact',
  socialButtons = [
    {
      iconImageSrc: googleIconImageSrc,
      text: 'Sign In With Google',
      url: 'https://google.com',
    },
    {
      iconImageSrc: twitterIconImageSrc,
      text: 'Sign In With Twitter',
      url: 'https://twitter.com',
    },
  ],
  submitButtonText = 'Sign In',
  SubmitButtonIcon = LoginIcon,
  forgotPasswordUrl = '#',
  signupUrl = '#',
}) => (
  <AnimationRevealPage>
    <Container>
      <Content>
        <MainContainer>
          <LogoLink href={logoLinkUrl}>
            <LogoImage src={logo} />
          </LogoLink>
          <MainContent>
            <Heading>{headingText}</Heading>
            <FormContainer>
              <SocialButtonsContainer>
                {socialButtons.map((socialButton, index) => (
                  <SocialButton key={index} href={socialButton.url}>
                    <span className='iconContainer'>
                      <img
                        src={socialButton.iconImageSrc}
                        className='icon'
                        alt=''
                      />
                    </span>
                    <span className='text'>{socialButton.text}</span>
                  </SocialButton>
                ))}
              </SocialButtonsContainer>
              <DividerTextContainer>
                <DividerText>Or Sign in with your e-mail</DividerText>
              </DividerTextContainer>
              <Form>
                <Input type='email' placeholder='Email' />
                <Input type='password' placeholder='Password' />
                <SubmitButton type='submit'>
                  <SubmitButtonIcon className='icon' />
                  <span className='text'>{submitButtonText}</span>
                </SubmitButton>
              </Form>
              <p tw='mt-6 text-xs text-gray-600 text-center'>
                <a
                  href={forgotPasswordUrl}
                  tw='border-b border-gray-500 border-dotted'
                >
                  Forgot Password ?
                </a>
              </p>
              <p tw='mt-8 text-sm text-gray-600 text-center'>
                Dont have an account?{' '}
                <a href={signupUrl} tw='border-b border-gray-500 border-dotted'>
                  Sign Up
                </a>
              </p>
            </FormContainer>
          </MainContent>
        </MainContainer>
        <IllustrationContainer>
          <IllustrationImage imageSrc={illustrationImageSrc} />
        </IllustrationContainer>
      </Content>
    </Container>
  </AnimationRevealPage>
)
