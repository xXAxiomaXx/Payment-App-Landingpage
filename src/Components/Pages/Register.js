import React from "react";
import Logo from "../../Images/ukalaa escrita.png";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  const handlehome = () => {
    navigate("/");
  };

  return (
    <div className="bg-neutral-50 flex justify-center py-10 items-center h-fit">
      <div className="bg-white w-fit py-3 px-10 flex flex-col items-center rounded-xl shadow-xl content-center">
        <img src={Logo} onClick={handlehome} className="w-40 pb-5 cursor-pointer" />
        <h3 className="font-medium text-2xl">Crie sua conta</h3>
        <form>
          <div className="mt-5 w-full">
            <div className="sm:col-span-3">
              <label
                htmlFor="name"
                className="block text-normal text-start font-semibold leading-6 text-gray-900"
              >
                Nome Completo
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="name"
                  id="name"
                  autoComplete="name"
                  placeholder="Seu nome aqui"
                  className="w-full rounded-md mb-4 border-0 py-1 text-lg font-normal text-gray-900 text-start pl-2 pr-40 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-200"
                />
              </div>
            </div>
          </div>
          <div className="mt-2 w-full">
            <div className="sm:col-span-3">
              <label
                htmlFor="CPF"
                className="block text-normal text-start font-semibold leading-6 text-gray-900"
              >
                CPF
              </label>
              <div className="mt-2">
                <input
                  type="tel"
                  maxLength={11}
                  name="CPF"
                  id="CPF"
                  placeholder="123.456.789-10"
                  pattern="[0-9]3.[0-9]3.[0-9]3-[0-9]2"
                  className="w-full rounded-md mb-4 border-0 py-1 text-lg font-normal text-gray-900 text-start pl-2 pr-40 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-200"
                />
              </div>
            </div>
          </div>
          <div className="mt-2 w-full">
            <div className="sm:col-span-3">
              <label
                htmlFor="birth"
                className="block text-normal text-start font-semibold leading-6 text-gray-900"
              >
                Data de Nascimento
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  maxLength={11}
                  name="birth"
                  id="birth"
                  placeholder="00/00/0000"
                  className="w-full rounded-md mb-4 border-0 py-1 text-lg font-normal text-gray-900 text-start pl-2 pr-40 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-200"
                />
              </div>
            </div>
          </div>
          <div className="mt-2 w-full">
            <label
              htmlFor="email"
              className="block text-normal text-start font-semibold leading-6 text-gray-900"
            >
              E-mail
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="exemplo@email.com"
                className="w-full rounded-md mb-4 border-0 py-1 text-lg font-normal text-gray-900 text-start pl-2 pr-40 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-200"
              />
            </div>
          </div>
          <div className="mt-2 w-full">
            <label
              htmlFor="tel"
              className="block text-normal text-start font-semibold leading-6 text-gray-900"
            >
              Celular
            </label>
            <div className="mt-2">
              <input
                id="phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                placeholder="(00) 00000-0000"
                pattern="([0-9]2)[0-9]5-[0-9]4"
                className="w-full rounded-md mb-4 border-0 py-1 text-lg font-normal text-gray-900 text-start pl-2 pr-40 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-200"
              />
            </div>
          </div>
          <div className="w-full">
            <label
              htmlFor="password"
              className="block text-normal text-start font-semibold leading-6 text-gray-900"
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
                className="w-full rounded-md mb-4 border-0 py-1 text-lg font-normal text-gray-900 text-start pl-2 pr-40 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-200"
              />
            </div>
          </div>
          <div className="w-full">
            <label
              htmlFor="password"
              className="block text-normal text-start font-semibold leading-6 text-gray-900"
            >
              Confirme sua senha
            </label>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="password"
                placeholder="Digite sua senha"
                className="w-full rounded-md mb-10 border-0 py-1 text-lg font-normal text-gray-900 text-start pl-2 pr-40 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-200"
              />
            </div>
          </div>
        </form>
        <button className="bg-[#5e2cf5] px-20 sm:px-28 py-2 mb-5 border-none rounded-lg text-lg text-white font-semibold">
          Criar conta
        </button>
        <button onClick={handleLogin} className="bg-white px-16 sm:px-24 py-2 mb-5 border-2 border-[#5e2cf5] rounded-lg text-lg text-[#5e2cf5] font-semibold">
          Já tenho conta
        </button>
      </div>
    </div>
  );
};

export default Register;
