import styled, {keyframes} from 'styled-components'

interface Props {
    height?: string;
    width?: string;
  }
  const breatheAnimation = keyframes`
  0% {   
    box-shadow: 2px 0px 2px 1px  red;
    

  }
  30% {  box-shadow: 0px 2px 2px 1px  red;}
  50% {  box-shadow: -2px 0px 2px 1px  red;}
  70% {  box-shadow: 0px -2px 2px 1px  red; }
  100% {box-shadow: 2px 0px 2px 1px  red; }
 `
const CircleImage= styled.object<Props>`
    border-radius: 100%;
    width:  ${({width}) => width};
    height:${({height}) => height};;
    
   border: 4px solid #A11480;
    animation-name: ${breatheAnimation};
 animation-duration: 0.7s;
 animation-iteration-count: infinite;
`;


export default CircleImage;