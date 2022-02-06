import styled from 'styled-components'

const StyledHeader = styled.header`
   min-height: 17rem;
   background-image: url(${(props) => props.theme.hdrBgImg});
   background-repeat: no-repeat;
   background-position: center;
   background-size: cover;
`

export default StyledHeader
