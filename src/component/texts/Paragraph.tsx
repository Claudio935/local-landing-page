import styled from 'styled-components'

interface ParagraphProps {
    justify?: string;
  }

const Paragraph = styled.p<ParagraphProps>`
  color: #fff;
    margin: 0px;
    text-align: ${({justify}) => (justify === "justificado" ? 'justify' : '')};
  text-justify: ${({justify}) => (justify === "justificado" ? 'inter-word' : '')};

`;

export default Paragraph