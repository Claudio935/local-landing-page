import styled from 'styled-components'
interface BoxProps {
  padding?: string;
  background?: string;
  columns?: number;
  width?: string;
  margin?: string;
}

export const BoxColumn = styled.div<BoxProps>`
  display: flex;
flex-direction: column;
align-items: center;
padding: ${props => (props.padding ? props.padding : '0px')};
background: ${({background})=>background? background: "#000000"};
width:  ${({width})=>width? width: "100%"};
margin:  ${({margin})=>margin? margin: "0px"};


`;

export const BoxRow = styled.div<BoxProps>`
  display: flex;
flex-direction: row;
align-items: center;
padding: ${props => (props.padding ? props.padding : '0px')};
background: ${({background})=>background? background: "#000000"};
@media (max-width: 768px) {
  display: flex;
flex-direction: column;
align-items: center;
}
`;
export const BoxGrid = styled.div<BoxProps>`
  display: grid;
  grid-template-columns: repeat(${({columns}) => columns}, 1fr);
  grid-gap: 10px;
  width:  ${({width})=>width? width: "100%"};
  margin:  ${({margin})=>margin? margin: "0px"};
`;

