import styled from "styled-components";
interface Props {
  height?: string;
  width?: string;
  margin?: string;
  type?: string;
  children?: string;
}

const TextH2 = styled.h2<Props>`
  color: #fff;
  margin: ${({ margin }) => (margin ? margin : "0px")};
`;
const TextH3 = styled.h3<Props>`
  color: #fff;
  margin: ${({ margin }) => (margin ? margin : "0px")};
`;
const TextH4 = styled.h4<Props>`
  color: #fff;
  margin: ${({ margin }) => (margin ? margin : "0px")};
`;
const TextH5 = styled.h5<Props>`
  color: #fff;
  margin: ${({ margin }) => (margin ? margin : "0px")};
`;

const SubTitle: React.FC<Props> = (props) => {
  let Component = TextH2;
  const { type } = props;
  switch (type) {
    case "h2":
      Component = TextH2;
      break;
    case "h3":
      Component = TextH3;
      break;
    case "h4":
      Component = TextH4;

      break;
    case "h5":
      Component = TextH5;

      break;

    default:
      break;
  }
  return <Component {...props}>{props.children}</Component>;
};
export default SubTitle;
