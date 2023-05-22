import { FaWhatsapp, FaInstagram, FaLinkedinIn} from "react-icons/fa";
import Title from "../texts/Title";
import { BoxColumn, BoxGrid} from "../box/Box";
import Footer from "../Footer/footer";
import Icon from "../Icon/Icon";


function FooterView() {
  
    return(
      <Footer>
        <BoxColumn margin="80px 0px 0px 0px" width="100%" id="contato">
          <Title fontSize="36px">Entre em contato</Title>
          <BoxGrid columns={3} width="100%" margin="80px 0px 0px 0px">
            <BoxColumn>
            <Icon 
            href="https://api.whatsapp.com/send?phone=71981379605"
            color="#00D428"
            width= "90px"
            height= "90px"
            icon={FaWhatsapp}/>
            </BoxColumn>
            <BoxColumn>
             <Icon 
            href="https://www.instagram.com/programe_claudio"
            color="#F48D44"
            width= "90px"
            height= "90px"
            icon={FaInstagram}/>
            </BoxColumn>
            <BoxColumn>
            <Icon 
            href="https://www.linkedin.com/in/claudio-junior-293433116/"
            color="#FFFF"
            width= "90px"
            height= "90px"
            icon={FaLinkedinIn}/>
            </BoxColumn>
          </BoxGrid>
          
        </BoxColumn>
      </Footer>
   
  );
}

export default FooterView;
