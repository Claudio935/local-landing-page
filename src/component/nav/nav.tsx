import styled from "styled-components";

interface buttonObject {
  nome: string;
  href?: string;
}
interface Props {
  arrayButton?: Array<buttonObject>;
  margin?: string;
}

const NavStyled = styled.nav<Props>`
  display: flex;
  margin: ${({ margin }) => (margin ? margin : "0px")};
  width: 100%;
  align-items: center;
  justify-content: flex-end;
  background-color: #000;
`;
const Button = styled.a`
  display: flex;
  border: none;
  color: #fff;
  align-items: center;
  justify-content: flex-end;
  background-color: #000;
  cursor: pointer;
  text-decoration: none;
  margin-right: 10px;
  &:hover {
    color: #a11480;
  }
`;

const Nav: React.FC<Props> = (props) => {
  const { arrayButton, margin } = props;
  return (
    <NavStyled margin={margin}>
      {arrayButton?.map((item, index) => {
        return (
          <Button key={index} href={item.href}>
            {item?.nome}
          </Button>
        );
      })}
    </NavStyled>
  );
};

export default Nav;
