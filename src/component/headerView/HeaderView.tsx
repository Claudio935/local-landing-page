import Header from "../header/Header";
import { BoxColumn } from "../box/Box";
import Slider from "../slider/Slider";

function HeaderView() {
  const yogaImg: string = require("../../assets/image/yoga.svg").default;
  const exercicio: string = require("../../assets/image/exercicio.svg").default;

  return (
    <Header background="#ffff">
      <BoxColumn background="#ffff" height="600px">
        <Slider
          images={[yogaImg, exercicio]}
          titleStyle={{ color: "#fff", fontSize: "128px" }}
          subTitleStyle={{
            color: "#fff",
            fontSize: "64px",
            margin: "-25px 0px 0px 0px",
            fontWeight: 700,
          }}
          paragraphStyle={{ color: "#fff", fontSize: "32px", fontWeight: 700 }}
          boxText={{ justifycontent: "flex-start" }}
          titleText="CPS"
          subtitletext="Centro de Práticas Saudáveis"
          paragraphText="Você no controle de sua saúde"
        ></Slider>
      </BoxColumn>
    </Header>
  );
}

export default HeaderView;
