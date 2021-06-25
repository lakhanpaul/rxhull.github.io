import React from 'react'
import styled from 'styled-components' //eslint-disable-line
import tw from 'twin.macro'
import { css } from 'styled-components/macro' //eslint-disable-line
import SvgDecoratorBlob1 from '../../images/svg-decorator-blob-9.svg'
import { ContentWithPaddingXl, Container } from '../misc/Layouts'

const PrimaryBackgroundContainer = tw.div`py-20 lg:py-24 bg-primary-500 rounded-lg relative`
const Row = tw.div`px-8 max-w-screen-lg mx-auto flex items-center relative z-10 flex-col lg:flex-row text-center lg:text-left`

const Text = tw.h5`text-gray-100 text-2xl sm:text-3xl font-bold`

const DecoratorBlobContainer = tw.div`absolute inset-0 overflow-hidden rounded-lg`
const DecoratorBlob1 = tw(
  SvgDecoratorBlob1
)`absolute bottom-0 left-0 w-80 h-80 transform -translate-x-20 translate-y-32 text-primary-700 opacity-50`
const DecoratorBlob2 = tw(
  SvgDecoratorBlob1
)`absolute top-0 right-0 w-80 h-80 transform  translate-x-20 -translate-y-64 text-primary-700 opacity-50`

export default ({
  text = 'Oh no, looks like we forgot to put fuel in our rockets, please try again another time.',
  pushDownFooter = true,
}) => {
  return (
    <Container css={pushDownFooter && tw`mb-20 lg:mb-24`}>
      <ContentWithPaddingXl>
        <PrimaryBackgroundContainer>
          <Row>
            <Text>{text}</Text>
          </Row>
          <DecoratorBlobContainer>
            <DecoratorBlob1 />
            <DecoratorBlob2 />
          </DecoratorBlobContainer>
        </PrimaryBackgroundContainer>
      </ContentWithPaddingXl>
    </Container>
  )
}
