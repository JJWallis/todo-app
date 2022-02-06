import styled from 'styled-components'

export default styled.main`
   flex-grow: 1;
   background-color: ${(props) => props.theme.colorBg};
   transition: background-color 200ms linear;
`
