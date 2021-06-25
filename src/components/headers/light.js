import React from 'react'
import { motion } from 'framer-motion'
import tw from 'twin.macro'
import styled from 'styled-components'
import { css } from 'styled-components/macro' //eslint-disable-line
import { NavLink } from 'react-router-dom'

import useAnimatedNavToggler from '../../helpers/useAnimatedNavToggler.js'

import logo from '../../images/logo.svg'
import MenuIcon from 'feather-icons/dist/icons/menu.svg'
import CloseIcon from 'feather-icons/dist/icons/x.svg'

const HeaderContainer = tw.div`
fixed inset-x-0  z-50 shadow-md top-0 pt-2 md:pt-5 
`

const Header = tw.header`
flex justify-between items-center
max-w-screen-xl mx-auto 
`

export const NavLinks = tw.div`inline-block`

/* hocus: stands for "on hover or focus"
 * hocus:bg-primary-700 will apply the bg-primary-700 class on hover or focus
 */
export const StyledNavLink = tw(NavLink)`
  lg:text-lg my-2 text-xs lg:mx-6 lg:my-0
  font-semibold tracking-wide transition duration-300
  pb-1 border-b-2 border-transparent hover:border-primary-500 hocus:text-primary-500
`

export const PrimaryLink = tw(StyledNavLink)`
  lg:mx-0
  px-8 py-3 rounded bg-primary-500 text-gray-100
  hocus:bg-primary-700 hocus:text-gray-200 focus:shadow-outline
  border-b-0
`

export const LogoLink = styled(StyledNavLink)`
  ${tw`flex items-center font-black border-b-0 md:text-2xl! ml-0! text-base!`};

  img {
    ${tw`w-10 mr-3`}
  }
`

export const MobileNavLinksContainer = tw.nav`flex flex-1 items-center justify-between `
export const NavToggle = tw.button`
  lg:hidden z-20 focus:outline-none hocus:text-primary-500 transition duration-300
`
export const MobileNavLinks = motion(styled.div`
  ${tw`fixed inset-x-0 top-0 z-10 p-8 mx-4 my-6 text-center text-gray-900 bg-white border rounded-lg lg:hidden`}
  ${NavLinks} {
    ${tw`flex flex-col items-center w-full`}
  }
`)

export const DesktopNavLinks = tw.nav`
  hidden lg:flex flex-1 justify-between items-center
`

export default ({
  roundedHeaderButton = false,
  logoLink,
  links,
  className,
  collapseBreakpointClass = 'lg',
}) => {
  /*
   * This header component accepts an optionals "links" prop that specifies the links to render in the navbar.
   * This links props should be an array of "NavLinks" components which is exported from this file.
   * Each "NavLinks" component can contain any amount of "StyledNavLink" component, also exported from this file.
   * This allows this Header to be multi column.
   * So If you pass only a single item in the array with only one NavLinks component as root, you will get 2 column header.
   * Left part will be LogoLink, and the right part will be the the NavLinks component you
   * supplied.
   * Similarly if you pass 2 items in the links array, then you will get 3 columns, the left will be "LogoLink", the center will be the first "NavLinks" component in the array and the right will be the second "NavLinks" component in the links array.
   * You can also choose to directly modify the links here by not passing any links from the parent component and
   * changing the defaultLinks variable below below.
   * If you manipulate links here, all the styling on the links is already done for you. If you pass links yourself though, you are responsible for styling the links or use the helper styled components that are defined here (StyledNavLink)
   */
  const defaultLinks = [
    <NavLinks key={1}>
      <StyledNavLink to='/components/innerPages/AboutUsPage'>
        About
      </StyledNavLink>
      <StyledNavLink to='/components/innerPages/MarketingProgramPage'>
        Marketing
      </StyledNavLink>
      <StyledNavLink to='/components/innerPages/TechnologyProgramPage'>
        Technology
      </StyledNavLink>
      <StyledNavLink to='/components/innerPages/OpportunityFinderPage'>
        Opportunity Finder
      </StyledNavLink>
      <StyledNavLink to='/components/blocks/Form/TwoColContactUsFull'>
        Contact Us
      </StyledNavLink>
      {/* <StyledNavLink to='/#' tw='lg:ml-12!'>
        Login
      </StyledNavLink>
      <PrimaryLink css={roundedHeaderButton && tw`rounded-full`} to='/#'>
        Sign Up
      </PrimaryLink> */}
    </NavLinks>,
  ]

  const { showNavLinks, animation, toggleNavbar } = useAnimatedNavToggler()
  const collapseBreakpointCss =
    collapseBreakPointCssMap[collapseBreakpointClass]

  const defaultLogoLink = (
    <LogoLink to='/'>
      <img
        src='https://images.unsplash.com/photo-1545231027-637d2f6210f8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80'
        alt='logo'
      />
      Frameless
    </LogoLink>
  )

  logoLink = logoLink || defaultLogoLink
  links = links || defaultLinks

  return (
    <HeaderContainer>
      <Header className={className || 'header-light'}>
        <DesktopNavLinks css={collapseBreakpointCss.desktopNavLinks}>
          {logoLink}
          {links}
        </DesktopNavLinks>

        <MobileNavLinksContainer
          css={collapseBreakpointCss.mobileNavLinksContainer}
        >
          {logoLink}
          <MobileNavLinks
            initial={{ x: '150%', display: 'none' }}
            animate={animation}
            css={collapseBreakpointCss.mobileNavLinks}
          >
            {links}
          </MobileNavLinks>
          <NavToggle
            onClick={toggleNavbar}
            className={showNavLinks ? 'open' : 'closed'}
          >
            {showNavLinks ? (
              <CloseIcon tw='w-6 h-6' />
            ) : (
              <MenuIcon tw='w-6 h-6' />
            )}
          </NavToggle>
        </MobileNavLinksContainer>
      </Header>
    </HeaderContainer>
  )
}

/* The below code is for generating dynamic break points for navbar.
 * Using this you can specify if you want to switch
 * to the toggleable mobile navbar at "sm", "md" or "lg" or "xl" above using the collapseBreakpointClass prop
 * Its written like this because we are using macros and we can not insert dynamic variables in macros
 */

const collapseBreakPointCssMap = {
  sm: {
    mobileNavLinks: tw`sm:hidden`,
    desktopNavLinks: tw`sm:flex`,
    mobileNavLinksContainer: tw`sm:hidden`,
  },
  md: {
    mobileNavLinks: tw`md:hidden`,
    desktopNavLinks: tw`md:flex`,
    mobileNavLinksContainer: tw`md:hidden`,
  },
  lg: {
    mobileNavLinks: tw`lg:hidden`,
    desktopNavLinks: tw`lg:flex`,
    mobileNavLinksContainer: tw`lg:hidden`,
  },
  xl: {
    mobileNavLinks: tw`lg:hidden`,
    desktopNavLinks: tw`lg:flex`,
    mobileNavLinksContainer: tw`lg:hidden`,
  },
}
