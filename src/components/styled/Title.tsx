import styled from 'styled-components'
import Arrow from '../../assets/icon-arrow.svg'

export const Title = styled.h1`
   color: white;
   letter-spacing: 0.5ch;
   &::before {
      content: '';
      position: absolute;
      z-index: 3;
      top: 79px;
      left: 15px;
      display: block;
      width: 15px;
      height: 15px;
      border-radius: 50%;
      background-color: transparent;
      border: 0.1px solid ${(props) => props.theme.fcTodo};
      padding: 1rem;
   }
   &::after {
      content: url(${Arrow});
      position: absolute;
      z-index: 3;
      cursor: pointer;
      top: 75px;
      left: 21.5px;
      width: 20px;
      height: 20px;
   }
`
