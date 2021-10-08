import styled, { css } from 'styled-components'

type IconProps = {
   cross?: boolean
}

const Icon = styled.img<IconProps>`
   display: block;
   max-width: 100%;
   cursor: pointer;
   ${(props) =>
      props.cross &&
      css`
         position: absolute;
         right: 40px;
         top: 50%;
         transform: translateY(-50%);
         width: 20px;
      `}
`

export default Icon
