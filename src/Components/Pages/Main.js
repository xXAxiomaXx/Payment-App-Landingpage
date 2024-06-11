import React from "react";
import $ from "jquery";
import Logo from "../../Images/ukalaa escrita.png";
import Foto from "../../Images/Design_sem_nome-removebg-preview.png";
import Money from "../../Images/money_icon.40e903c.svg";
import Shield from "../../Images/security_icon.855529c.svg";
import Lock from "../../Images/locker_icon.cfd6555.svg";
import Crypt from "../../Images/token_icon.5c82619.svg";
import Sales from "../../Images/undraw_setup_re_y9w8.svg";
import AI from "../../Images/undraw_artificial_intelligence_re_enpp (1).svg";
import Cellphone from "../../Images/undraw_mobile_life_re_jtih.svg";
import Computer from "../../Images/undraw_data_processing_yrrv.svg";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();
  const loginStatus = document.getElementById("loginStatus").value;

  const handleLogin = () => {
    navigate("/account/login", { replace: true });
  };
  const handleReg = () => {
    navigate("/account/create", { replace: true });
  };

  var scrollTop = function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  $(document).ready(function () {
    if (loginStatus === "true") {
      $("#log").hide();
      $("#access").show();
    } else {
      $("#log").show();
      $("#access").hide();
    }
  });

  const [showButton, setShowButton] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  return (
    <div className="scroll-smooth overflow-hidden">
      <div clasName="main bg p-10 h-fit-nfitral-100 overflow-x-hidden">
        <nav className="flex  items-center justify-between pt-5 bg-white">
          <img src={Logo} className="w-20 pb-5 ml-5 sm:ml-10 sm:w-40" />
          <button
            id="access"
            className="bg-[#f56e2c] px-5 py-2 mb-5 mr-5 sm:mr-10 border-none rounded-full text-sm sm:text-lg text-white font-semibold"
          >
            Acessar conta
          </button>
          <div id="log" className="mr-5 sm:mr-10">
            <button
              onClick={handleReg}
              className="bg-[#f56e2c] px-5 py-2 mb-5 border-none rounded-full text-sm sm:text-lg text-white font-semibold"
            >
              Criar conta
            </button>
            <a
              onClick={handleLogin}
              className="ml-4 font-semibold text-normal sm:text-lg cursor-pointer"
            >
              Login
            </a>
          </div>
        </nav>
        {showButton && (
          <button
            onClick={scrollTop}
            className="bg-white px-5 py-1 mb-5 border-none rounded-full text-lg text-[#f56e2c] font-semibold right-4 bottom-4 fixed z-50 align-middle"
          >
            <i class="bx bx-chevron-up align-middle text-xl"></i>Voltar ao topo
          </button>
        )}
        <section className="h-screen flex justify-center lg:justify-around lg:pb-40 lg:pt-10 bg-[#5e2cf5]">
          <img src={Foto} className="h-fit hidden lg:block" />
          <div className="flex flex-col lg:,h-screen w-11/12 lg:w-5/12 lg:ml-20 justify-center">
            <h1 className="font-extrabold leading-tight text-4xl lg:text-5xl text-white w-full drop-shadow-xl mb-10 text-center">
              A maneira inteligente de maximizar pagamentos para o seu negócio
              digital
            </h1>
            <p className="text-lg lg:text-2xl font-semibold text-white text-center mb-10 drop-shadow-xl w-full">
              Ecommerces, SAAS e Infoprodutores utilizam Ukalaa para vender
              mais, de forma fácil.
            </p>
            <button
              onClick={handleReg}
              className="bg-white self-center px-5 py-2 border-none rounded-md text-xl text-[#5e2cf5] font-semibold shadow-xl"
            >
              Criar conta
            </button>
          </div>
        </section>
      </div>
      <section className="h-fit bg-neutral-100 pt-10 pb-20 lg:pb-40">
        <h1 className="font-bold leading-tight w-full px-1.5 lg:w-11/12 text-center text-3xl lg:text-5xl mb-16 lg:mb-28 drop-shadow-xl opacity-80">
          Gateway, antifraude e adquirência juntos: finalmente alta performance
          com simplicidade
        </h1>
        <div className="flex flex-col-reverse lg:flex-row items-center justify-around">
          <div className="flex flex-col w-full lg:w-5/12">
            <h3 className="font-semibold text-center text-3xl w-full p-5 drop-shadow-xl">
              Antifraude Ukalaa com IA
            </h3>
            <p className="text-center font-medium self-center opacity-80 w-9/12 py-5 mb-5">
              Venda com segurança e alta performance. Analisamos todas as suas
              transações com o nosso Antifraude que usa IA para aprovar as
              vendas legítimas que seriam reprovadas em outros meios, assim como
              negando as vendas fraudulentas que seriam aprovadas.
            </p>
            <button
              onClick={handleReg}
              className="bg-[#5e2cf5] self-center px-5 py-2 border-none rounded-md text-xl text-white font-semibold shadow-xl"
            >
              Criar conta
            </button>
          </div>
          <img src={AI} className="w-10/12 lg:w-5/12" />
        </div>
        <div></div>
      </section>
      <section className="bg-neutral-100 flex flex-wrap justify-center gap-14 pb-10">
        <div className="bg-white flex flex-col 2xl:flex-row justify-center lg:justify-between self-center w-11/12 lg:w-4/12 p-10 rounded-3xl h-fit shadow-lg">
          <img src={Money} className="w-10/12 self-center lg:w-auto" />
          <div className="flex flex-col self-center">
            <h3 className="font-bold lg:text-2xl text-center w-80 mb-5">
              Flexibilidade para você e seus clientes
            </h3>
            <p className="font-semibold opacity-80 text-center w-80 ">
              Receba em D+1, D+30 ou no fluxo: o que for melhor para o seu
              negócio. E seus clientes? Eles vão ter acesso a todas as
              modalidades de pagamento.
            </p>
          </div>
        </div>
        <div className="bg-white flex flex-col 2xl:flex-row justify-center lg:justify-between self-center w-11/12 lg:w-4/12 p-10 rounded-3xl h-fit shadow-lg">
          <img src={Lock} className="w-10/12 self-center lg:w-auto" />
          <div className="flex flex-col self-center">
            <h3 className="font-bold text-2xl text-center w-80 mb-5">
              Retentativa Inteligente
            </h3>
            <p className="font-semibold opacity-80 text-center w-80">
              Conte com nosso sistema inteligente de retentativas, sem depender
              de uma única adquirente e suas regras de aprovação. Nós cuidamos
              da comunicação com os bancos, bandeiras de cartão e demais
              serviços, garantindo máxima conversão.
            </p>
          </div>
        </div>
        <div className="bg-white flex flex-col 2xl:flex-row justify-center lg:justify-between self-center w-11/12 lg:w-4/12 p-10 rounded-3xl h-fit shadow-lg">
          <img src={Shield} className="w-10/12 self-center lg:w-auto" />
          <div className="flex flex-col self-center">
            <h3 className="font-bold text-2xl text-center w-80 mb-5">
              Segurança e Alta disponibilidade
            </h3>
            <p className="font-semibold opacity-80 text-center w-80">
              Mais de R$6 bilhões transacionados com segurança: atendemos o mais
              alto padrão de segurança, sendo certificado PCI Compliance Level 1
              (o mais alto) e fazendo parte do Arranjo de Pagamentos Mastercard
              com um uptime de 99,99% em 2024.
            </p>
          </div>
        </div>
        <div className="bg-white flex flex-col 2xl:flex-row justify-center lg:justify-between self-center w-11/12 lg:w-4/12 p-10 pb-10 rounded-3xl h-fit shadow-lg">
          <img src={Crypt} className="w-10/12 self-center lg:w-auto" />
          <div className="flex flex-col self-center">
            <h3 className="font-bold text-2xl text-center w-80 mb-5">
              Tokenização
            </h3>
            <p className="font-semibold opacity-80 text-center w-80">
              Salve dados de cartão para assinatura ou upsell. Ofereça uma
              experiência de checkout mais ágil para o seu cliente, sempre
              contando com criptografia e proteção de dados.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-neutral-50 flex flex-col lg:flex-row justify-around py-44">
        <img
          src={Sales}
          className="flex self-center mb-10 lg:mb-0 lg:ml-10 w-10/12 lg:w-5/12"
        />
        <div className="w-10/12 lg:w-6/12 self-center">
          <h1 className="font-semibold text-3xl lg:text-5xl lg:w-10/12 leading-tight mb-10">
            Recuperação de vendas com IA
          </h1>
          <p className="lg:w-9/12 font-semibold opacity-70">
            Sabe aquele carrinho abandonado ou aquela compra negada pelo banco
            emissor? Aqui nós nos preocupamos tanto quanto você com vendas
            perdidas. Enquanto outras plataformas de pagamento não fazem nada,
            na Appmax utilizamos nossa tecnologia proprietária com inteligência
            artificial para mandar mensagens automáticas e recuperar vendas que
            seriam completamente perdidas. Recupere até 20% das vendas perdidas
            utilizando IA.
          </p>
        </div>
      </section>
      <section className="bg-white p-10 flex justify-center">
        <div className="bg-[#5e2cf5] text-white flex flex-col lg:flex-row lg:w-10/12 rounded-3xl px-20 py-28">
          <img
            src={Cellphone}
            className="lg:mr-10 mb-10 lg:mb-0 self-center w-10/12 lg:w-5/12"
          />
          <div className="flex flex-col justify-around text-center">
            <h1 className="font-bold text-5xl w-11/12 mb-10">
              Link de pagamento Customizável
            </h1>
            <p className="w-11/12 text-base font-semibold mb-10">
              Na Ukalaa você cria links de pagamento e realiza vendas online em
              menos de 1 minuto, sem necessidade de realizar integrações. Quem
              nunca tentou fazer o pagamento por um link, e teve o seu pagamento
              negado, sem explicações. É ruim para o cliente e ruim para você
              que vende. Nos links da Ukalaa você conta com nosso Antifraude com
              IA integrado, com foco total em maximizar conversões e não perder
              vendas.
            </p>
            <h3 className="font-bold text-xl w-11/12 mb-10">
              Se você quer vender de forma rápida e fácil, comece a usar Ukalaa
              hoje mesmo.
            </h3>
            <button
              onClick={handleReg}
              className="bg-white w-fit self-center mr-9 lg:mr-6 xl:mr-16 px-5 py-2 border-none rounded-md text-xl text-[#5e2cf5] font-semibold shadow-xl"
            >
              Criar conta
            </button>
          </div>
        </div>
      </section>
      <section className="bg-neutral-100 flex flex-col items-center lg:flex-row py-32 px-10 lg:px-20">
        <img src={Computer} className="mb-20 lg:mb-0 lg:w-6/12 self-center" />
        <div className="flex flex-col justify-around">
          <h1 className="font-extrabold self-center text-3xl lg:text-5xl mb-10">
            Um mundo de possibilidades com a nossa Loja de Aplicativos
          </h1>
          <p className="font-semibold text-lg opacity-80 text-left">
            O mundo está a seu alcance com a Ukalaa, conecte com plataformas de
            ecommerce, áreas de membros para produtos digitais, aplicativos de
            e-mail marketing, ERPs, apps de logística e muito mais. Com a Ukalaa
            você tem a flexibilidade de conectar apps, realizar split de
            pagamento e construir a solução que você precisa para ter grandes
            resultados.
            <br></br>
            <br></br>
            Se você é desenvolvedor, você também pode criar seu próprio App,
            disponibilizar ele para os milhares de clientes da Ukalaa, e
            monetizar por instalação, split de venda ou distribuir de forma
            gratuita. Saiba como na nossa página de desenvolvedores.
          </p>
        </div>
      </section>
      <footer className="h-full bg-neutral-100">
        <div className="w-fit flex flex-col items-start justify-between p-10">
          <img src={Logo} className="w-40 pb-5" />
          <div className="opacity-60 text-4xl flex justify-around px-2 w-full mt-3">
            <a>
              <i className="bx bxl-instagram text-black"></i>
            </a>
            <a>
              <i className="bx bxl-twitter text-black"></i>
            </a>
            <a>
              <i className="bx bxl-linkedin text-black"></i>
            </a>
          </div>
          <div className="opacity-60 w-full text-sm mt-3 ">
            <p className="text-black">
              <i className="bx bx-copyright text-black"></i> Copyright 2024.
            </p>
            <p className="text-black">All rights reserved</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Main;
