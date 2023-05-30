import  {  Component } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { styled } from "styled-components";
import Title from "../texts/Title";
import { BoxColumn } from "../box/Box";
import SubTitle from "../texts/SubTtitle";
import Paragraph from "../texts/Paragraph";

interface TextBoxProps {
  alignText?: string;
  justifycontent?: string;
  maginText?: string;
}
interface TitleProps {
  fontSize?: string;
  color?: string;
  margin?: string;
}
interface SubtitleProps {
  fontSize?: string;
  color?: string;
  margin?: string;
  fontWeight?: number;
}
interface ParagraphProps {
  fontSize?: string;
  color?: string;
  margin?: string;
  fontWeight?: number;
}

interface Props {
  images: string[];
  boxText?: TextBoxProps;
  titleStyle?: TitleProps;
  subTitleStyle?: SubtitleProps;
  paragraphStyle?: ParagraphProps;
  titleText?: string;
  subtitletext?: string;
  paragraphText?: string;
}

const BoxSlideText = styled.div<TextBoxProps>`
  position: absolute;
  top: 0px;
  display: flex;
  flex-direction: column;
  align-items: ${({ alignText }) => (alignText ? alignText : "center")};
  justify-content: ${({ justifycontent }) =>
    justifycontent ? justifycontent : "center"};
  margin: ${({ maginText }) => (maginText ? maginText : "0px")};
  width: 100%;
  height: 100%;
  z-index: 2;
`;

const Button = styled.button`
  border-radius: 50%;
  height: 50px;
  width: 50px;
  opacity: 0.4;
  background: #fff;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 3;
  cursor: pointer;
`;
const ImgContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;
const Img = styled.img`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0px;
  object-fit: cover;
`;
interface State {
  currentIndex: number;
}

class Slider extends Component<Props, State> {
  intervalId: NodeJS.Timeout | null = null;
  constructor(props: Props) {
    super(props);
    // Inicialização de estado e outras configurações
    this.state = {
      currentIndex: 0,
    };
  }

  nextSlide = () => {
    const { images } = this.props;
    this.setState(({ currentIndex }) => ({
      currentIndex: currentIndex === images.length - 1 ? 0 : currentIndex + 1,
    }));
  };

  prevSlide = () => {
    const { images } = this.props;
    this.setState(({ currentIndex }) => ({
      currentIndex: currentIndex === 0 ? images.length - 1 : currentIndex - 1,
    }));
  };

  componentDidMount(): void {
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 10000);
  }

  componentWillUnmount() {
    if (this.intervalId) {
      clearInterval(this.intervalId); // Parar o intervalo quando o componente for desmontado
    }
  }

  render() {
    const { images, ...rest } = this.props;
    const {
      boxText,
      titleStyle,
      titleText,
      subtitletext,
      subTitleStyle,
      paragraphText,
      paragraphStyle,
    } = rest;
    return (
      <ImgContainer>
        <Button style={{ top: "50%", left: "0px" }} onClick={this.prevSlide}>
          <FaArrowLeft />
        </Button>
        <Img src={images[this.state.currentIndex]} alt="Slider" />
        <BoxSlideText {...boxText}>
          <BoxColumn background="none">
            {titleText && <Title {...titleStyle}>{titleText}</Title>}
            {subtitletext && (
              <SubTitle style={{ ...subTitleStyle }}>{subtitletext}</SubTitle>
            )}
            {paragraphText && (
              <Paragraph {...paragraphStyle}>{paragraphText}</Paragraph>
            )}
          </BoxColumn>
        </BoxSlideText>
        <Button style={{ top: "50%", right: "0px" }} onClick={this.nextSlide}>
          <FaArrowRight />
        </Button>
      </ImgContainer>
    );
  }
}

export default Slider;
