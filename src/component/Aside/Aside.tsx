import styled from 'styled-components'

interface Props {
    width?: string;
    background?: string;
  }
const Aside = styled.aside<Props>`
width:  ${({width}) => width};
background: ${({background})=>background? background: "#0000"}
`;


export default Aside;