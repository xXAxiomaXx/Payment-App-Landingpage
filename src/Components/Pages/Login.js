import React from "react";
import Logo from "../../Images/ukalaa escrita.png";
import { useNavigate } from "react-router-dom";
import './Login.css'

const Login = () => {
  const navigate = useNavigate();

  const handleReg = () => {
    navigate("/register");
  };

  const handlehome = () => {
    navigate("/");
  };

  return (
    <div className="overflow-hidden">
      <div className="flex justify-center h-screen w-screen">
        <div className="w-full h-screen bg-neutral-50 flex flex-col justify-center items-center">
          <form>
            <div className="w-full mb-6">
              <label htmlFor="email" className="flex text-lg font-medium">
                E-mail
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="Digite seu Email"
                  className="sm:w-full rounded-md border-0 py-2 text-lg font-normal text-gray-900 text-start pl-2 pr-40 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-200"
                />
              </div>
            </div>
            <div className="w-full mb-6">
              <label
                htmlFor="password"
                className="flex text-lg font-medium"
              >
                Senha
              </label>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="password"
                  placeholder="Digite sua senha"
                  className="w-full rounded-md mb-2 border-0 py-2 text-lg font-normal text-gray-900 text-start pl-2 pr-40 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-200"
                />
              </div>
              <a className="flex self-start text-sm">Esqueci minha senha</a>
            </div>
          </form>
          <button className="bg-[#5e2cf5] px-32 py-2 mb-5 border-none rounded-full text-lg text-white font-semibold">
            Acessar
          </button>
          <a className="text-[#5e2cf5] font-semibold text-xl cursor-pointer" onClick={handleReg}>Criar conta</a>
        </div>
        <div className="banner border h-screen w-full hidden lg:flex lg:flex-col justify-around items-center shadow-xl">
          <img src={Logo} onClick={handlehome} className="w-52 mt-10 cursor-pointer" />
          <h3 className="font-semibold text-5xl w-10/12 mb-10">
            Soluções que{" "}
            <span className="text-[#5e2cf5] font-bold">maximizam</span> o
            resultado do seu negócio online
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Login;
