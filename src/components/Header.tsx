import styled from 'styled-components'
import lightBg from '../assets/bg-desktop-light.jpg'
// import darkBG from ‘../assets/bg-mobile-dark.jpg’

type HeaderProps = {
   darkMode?: boolean
}

const StyledHeader = styled.header<HeaderProps>`
   min-height: 17rem;
   background-image: url(${lightBg});
   background-repeat: no-repeat;
   background-position: center;
   background-size: cover;
`

export default StyledHeader
