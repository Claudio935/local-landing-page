import Title from "../texts/Title";
import { BoxColumn, BoxGrid, BoxRow } from "../box/Box";
import SubTitle from "../texts/SubTtitle";
import Section from "../section/Section";
import Img from "../Image/Image";
import { useInView } from 'react-intersection-observer';
import { Card } from "../card/Card";

function BodyView() {


  const yoga: string = require("../../assets/image/yoga2.svg").default;
  const musculacao: string = require("../../assets/image/musculacao2.svg").default;
  const danca: string = require("../../assets/image/danca.svg").default;
  const ginastica: string = require("../../assets/image/ginastica.svg").default;
  const equilibrio: string = require("../../assets/image/equilibrio.svg").default;
  const comida: string = require("../../assets/image/comida.svg").default;
  const massagem: string = require("../../assets/image/massagem.svg").default;
  const pele: string = require("../../assets/image/pele.svg").default;

  const arrayCardsAtividades = [
    {
      title: "Yoga",
      url:yoga,
      text: ` Nossos instrutores dedicados são guias habilidosos, compartilhando conhecimento e técnicas para ajudar os alunos a encontrarem o seu caminho único dentro da yoga. Cada postura, cada respiração e cada momento presente são oportunidades para explorar a flexibilidade física e mental, fortalecer o corpo, acalmar a mente e expandir a consciência. `
    },
    {
      title: "Dança",
      url:danca,
      text: `Nossos talentosos instrutores são dedicados a guiar os alunos em uma jornada de descoberta e crescimento, compartilhando sua expertise e inspiração. Cada passo, cada gesto é uma oportunidade para se expressar e se conectar com o ritmo interior que nos impulsiona. A dança é uma linguagem universal que transcende barreiras e nos permite comunicar sem palavras.`
    },
    {
      title: "Ginastica",
      url:ginastica,
      text: `Nossos instrutores altamente capacitados e apaixonados estão prontos para orientar e motivar os alunos em sua jornada de aprimoramento pessoal. Cada salto, cada acrobacia e cada rotina são oportunidades para desenvolver coordenação, equilíbrio e controle corporal.`
    },
    {
      title: "Musculação",
      url:musculacao,
      text: ` nossa equipe de treinadores especializados está pronta para ajudá-lo a alcançar seus objetivos de condicionamento físico
      e musculação. Com equipamentos modernos e programas personalizados, oferecemos um ambiente acolhedor e motivador para você se exercitar e atingir resultados visíveis`
    },
  ]
  const arrayCardsOutros = [
    {
      title: "Restaurante",
      url:comida,
      text: `Nossos restaurantes naturais são espaços dedicados a oferecer uma experiência gastronômica saudável e consciente. É um convite para apreciar alimentos frescos, orgânicos e nutritivos, que são cuidadosamente selecionados para promover o bem-estar do corpo e da mente. `
    },
    {
      title: "Massagem e relaxamento",
      url:massagem,
      text:`O serviço de massagem que oferecemos é uma experiência terapêutica e relaxante que visa restaurar o equilíbrio e promover o bem-estar do corpo e da mente. É um convite para cuidar de si mesmo, aliviar o estresse e rejuvenescer através do poder do toque terapêutico. Através das técnicas especializadas de massagem, nossos terapeutas treinados oferecem um momento de relaxamento profundo, aliviando a tensão muscular, melhorando a circulação sanguínea e promovendo a sensação de calma e tranquilidade. `
    },
    {
      title: "Cuidado com a pele",
      url:pele,
      text: `O serviço de cuidados com a pele que oferecemos é uma abordagem holística para promover a saúde, beleza e bem-estar da sua pele. É um convite para nutrir, proteger e revitalizar a sua pele, proporcionando-lhe uma aparência radiante e saudável. Através dos nossos tratamentos e produtos especializados, buscamos oferecer soluções personalizadas para atender às necessidades individuais da sua pele. `
    },

  ]

  const [ref, inView] = useInView({
    triggerOnce: true, // Dispara a animação apenas uma vez
    threshold: 0.1, // Define a porcentagem de visibilidade necessária para disparar a animação
  });
  return (
    <Section ref={ref}>
      <BoxColumn>
        <BoxColumn background="#000" padding="0px 0px 280px 0px">
          <BoxRow
            width="100%"
            justify={{content:"flex-end"}}
            position="relative"
            id="animation"
            animation={{
              name: inView? "rotatex" : "",
              duration: "6s",
              recurrence: "1",
              start: "0deg",
              final: "-10deg",
              origin:{
                x:"100%",
                y:"100%"
              }
            }}
          >
            <BoxColumn
              align="flex-start"
              position="absolute"
              left="25%"
              top="0px"
              width="480px"
              
            >
              <Title color="#fff" fontSize="90px">
                Busque pelo seu equilíbrio.
              </Title>
              <SubTitle style={{ color: "#fff", fontSize: "48px" }} type="h2">
                Cuide de sua saúde.
              </SubTitle>
            </BoxColumn>

            <Img
              src={equilibrio}
              height="500px"
              width="auto"
              position="absolute"
              right="100%"
              top="0px"
              padding="0px 120px 0px 0px"
              index="2"
            ></Img>
          </BoxRow>
        </BoxColumn>
        <Title color="#fff" fontSize="48px" margin="0px 0px 48px 0px">
          Atividades Propostas.
        </Title>
        <BoxRow padding="0px 24px 280px 24px" width="90%">
          <BoxGrid columns={4} background="#000" padding="20px">
          {arrayCardsAtividades.map((item, index)=>{
            return(
              <Card img={item.url} title={item.title} text={item?.text} key={index}/>
            )
          })}
          </BoxGrid>
        </BoxRow>
        <Title color="#fff" fontSize="48px" margin="48px 0px 48px 0px">
          Outros serviços.
        </Title>
        <BoxRow padding="0px 24px 280px 24px" width="90%">
          <BoxGrid columns={3} background="#000" padding="20px" >
          {arrayCardsOutros.map((item, index)=>{
            return(
              <Card img={item.url} title={item.title} key={index} text={item.text}/>
            )
          })}
          </BoxGrid>
        </BoxRow>
      </BoxColumn>
    </Section>
  );
}

export default BodyView;
