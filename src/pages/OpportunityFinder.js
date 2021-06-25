import React from 'react'
import AnimationRevealPage from '../helpers/AnimationRevealPage.js'
import tw from 'twin.macro'
import styled from 'styled-components' //eslint-disable-line
import { css } from 'styled-components/macro' //eslint-disable-line
import Search from '../components/search/BackgroundAsImageWithCenteredSearchBar'

// The purpose of this page is to display information about our organization's mission, vision, values and team.
// The majority of this is done using simple cards, it consists of two large columns followed by card grids

export default () => {
  return (
    <AnimationRevealPage>
      {/* Background Image with centered content, A large hero image and with a short intro and call to action */}
      <Search
        heading='Your audience is online,'
        semiHeading='you should be too.'
        action='Apply to our tech program now'
        backgroundImageSrc='https://images.unsplash.com/photo-1445112098124-3e76dd67983c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1047&q=80'
      />
    </AnimationRevealPage>
  )
}
