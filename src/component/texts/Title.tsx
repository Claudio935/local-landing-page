import styled from 'styled-components';

interface TitleProps {
  fontSize?: string;
}

const Title  = styled.h1<TitleProps>`
  color: #fff;
  margin: 0px;
  font-size: ${({fontSize}) => (fontSize ? fontSize : '')};
`;
export default Title