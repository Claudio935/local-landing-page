import Header from "../header/Header";
import Title from "../texts/Title";
import CircleImage from "../Image/CircleImage";
import { BoxColumn } from "../box/Box";
import SubTitle from "../texts/SubTtitle";
import Nav from "../nav/nav";

function HeaderView() {
  const devPhoto: string = require("../assets/image/imgDev.svg").default;


  return (
    <Header>
      <BoxColumn>
        <Nav
          margin="0px 0px 60px 0px"
          arrayButton={[
            { nome: "Quem sou", href: "#quemSou" },
            { nome: "Experiências", href: "#experiencias" },
            { nome: "Tecnologias", href: "#tecnologias" },
            { nome: "contato", href: "#contato" },
          ]}
        />
        <CircleImage data={devPhoto} width="360px" height="360px"></CircleImage>
        <BoxColumn width={"auto"}>
          <Title fontSize="52px">Claudio Freire</Title>
          <SubTitle type="h2" margin="10px 0px 0px 0px">
            Desenvolvedor Front-end junior
          </SubTitle>
          <SubTitle type="h4" margin="10px 0px 0px 0px">
            React/Typescript/GraphQL
          </SubTitle>
        </BoxColumn>
      </BoxColumn>
    </Header>
  );
}

export default HeaderView;
