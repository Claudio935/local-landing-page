import { FaReact } from "react-icons/fa";
import Title from "../texts/Title";
import CircleImage from "../Image/CircleImage";
import { BoxColumn, BoxGrid, BoxRow } from "../box/Box";
import SubTitle from "../texts/SubTtitle";
import Section from "../section/Section";
import Article from "../article/Article";
import Paragraph from "../texts/Paragraph";
import Aside from "../Aside/Aside";
import Img from "../Image/Image";
import Icon from "../Icon/Icon";
import React from "react"

function BodyView() {
  const team: string = require("../assets/image/team.svg").default;
  const graphqlIcon: string =
    require("../assets/image/graphql-icon.svg").default;
  const typescriptIcon: string =
    require("../assets/image/typescriptIcon.svg").default;

  return (
    <React.Fragment>
      <BoxRow>
        <Section>
          <BoxColumn>
            <Article>
              <BoxColumn padding={"80px 20%"} id="quemSou">
                <Title fontSize="36px">Quem Sou</Title>
                <Paragraph justify={"justificado"}>
                  Tenho habilidades sólidas em React, um dos frameworks mais
                  populares para o desenvolvimento de interfaces de usuário. Com
                  experiência em componentização, gerenciamento de estado com
                  hooks e criação de aplicações de página única (SPAs), sou
                  capaz de criar interfaces interativas, responsivas e
                  escaláveis. Tenho conhecimento em boas práticas de
                  desenvolvimento, como separação de preocupações e reutilização
                  de componentes. Estou sempre atualizado com as últimas
                  tendências e recursos do React, e estou pronto para aplicar
                  meu conhecimento em projetos desafiadores e contribuir para o
                  sucesso do time.
                </Paragraph>
              </BoxColumn>
            </Article>
            <Article>
              <BoxColumn padding={"80px 20%"} id="experiencias">
                <Title fontSize="36px">Experiências anteriores</Title>
                <Paragraph justify={"justificado"}>
                  GRUPO AZUL - Desenvolvedor Front-End Junior
                </Paragraph>
                <Paragraph justify={"justificado"}>
                  Periodo - 1 ano e 4 meses
                </Paragraph>
                <Paragraph justify={"justificado"}>
                  Na minha experiência anterior como desenvolvedor front-end
                  júnior em uma empresa, tive a oportunidade de trabalhar em
                  diversos projetos utilizando React. Durante esse período, fui
                  responsável por implementar interfaces de usuário responsivas
                  e interativas, desenvolver componentes reutilizáveis, integrar
                  APIs e colaborar com a equipe para solucionar problemas e
                  implementar novos recursos. Através dessas atividades, pude
                  aprimorar minhas habilidades em React, ganhar experiência
                  prática no desenvolvimento front-end e contribuir para o
                  sucesso dos projetos da empresa.
                </Paragraph>
              </BoxColumn>
            </Article>
          </BoxColumn>
        </Section>
        <Aside width={"40%"}>
          <BoxColumn margin="0px 45px 0px 0px">
            <CircleImage data={team} width="480px" height="480px"></CircleImage>
          </BoxColumn>
        </Aside>
      </BoxRow>
      <BoxColumn width="100%" id="tecnologias">
        <Title>Tecnologias já utilizadas</Title>
        <BoxGrid columns={3} margin={"80px 0px 0px 0px"}>
          <BoxColumn>
            <Icon
              icon={FaReact}
              width="90px"
              height="90px"
              color={"#5ED3F3"}
            />
            <SubTitle type="h5" margin="10px 0px 0px 0px">
              React
            </SubTitle>
          </BoxColumn>
          <BoxColumn>
            <Img src={graphqlIcon} width="90px" height="90px" />
            <SubTitle type="h5" margin="10px 0px 0px 0px">
              GraphQL
            </SubTitle>
          </BoxColumn>
          <BoxColumn>
            <Img src={typescriptIcon} width="90px" height="90px" />
            <SubTitle type="h5" margin="10px 0px 0px 0px">
              Typescript
            </SubTitle>
          </BoxColumn>
        </BoxGrid>
      </BoxColumn>
    </React.Fragment>
  );
}

export default BodyView;
