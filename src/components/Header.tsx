import React from 'react'
import styled from 'styled-components'
import lightBg from '../assets/bg-desktop-light.jpg'
// import darkBG from ‘../assets/bg-mobile-dark.jpg’

const StyledHeader = styled.header`
   min-height: 17rem;
   background-image: url(${lightBg});
   background-repeat: no-repeat;
   background-position: center;
   background-size: cover;
`

const Header: React.FC = () => <StyledHeader />

export default Header
