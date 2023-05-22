import styled from 'styled-components';
interface Props {
  height?: string;
  width?: string;
}

const Img = styled.img<Props>`
  width:  ${({width}) => width};
  height:${({height}) => height};;
   
`;


export default Img;