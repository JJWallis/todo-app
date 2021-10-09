import styled from 'styled-components'

type HeaderProps = {}

const StyledHeader = styled.header<HeaderProps>`
   min-height: 17rem;
   background-image: url(${(props) => props.theme.hdrBgImg});
   background-repeat: no-repeat;
   background-position: center;
   background-size: cover;
`

export default StyledHeader
