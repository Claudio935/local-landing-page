import styled from 'styled-components'

interface ParagraphProps {
    fontWeight?: number;
    justify?:string;
    fontSize?:string;
}
const Paragraph = styled.p<ParagraphProps>`
  color:${({color}) => (color )};;
  margin: 0px;
  text-align: ${({justify}) => (justify === "justificado" ? 'justify' : '')};
  text-justify: ${({justify}) => (justify === "justificado" ? 'inter-word' : '')};
  font-weight: ${({ fontWeight}) => fontWeight};
  font-size: ${({ fontSize }) => (fontSize )};
`;

export default Paragraph