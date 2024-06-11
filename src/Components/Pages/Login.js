import React from "react";
import $ from "jquery";
import Logo from "../../Images/ukalaa escrita.png";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();

  const handleReg = () => {
    navigate("/account/create",{ replace: true });
  };

  const handleRecover = () => {
    navigate("/account/recoverpassword",{ replace: true });
  };

  const handlehome = () => {
    navigate("/",{ replace: true });
  };

  const baseURL = document.getElementById("baseURL").value;

  const handleSubmit = (event) => {
    event.preventDefault();

    const email = event.target.elements.email.value;
    const password = event.target.elements.password.value;

    console.log(event.data);

    $.ajax({
      url: baseURL + "/account/login",
      method: "POST",
      dataType: "json",
      data: {
        email: email,
        password: password,
      },
      success: function (response) {
        console.log(response);
        //redirect
        if (response.redirect) {
          window.location.href = response.redirect;
        }
        //reload
        if (response.reload) {
          window.location.reload();
        }
        //message
        if (response.message) {
          if (response.message.text) {
            alert(response.message.text);
          }
        }
      },
      error: function (error) {
        console.log("Error:", error);
      },
    });

    // console.log("Email:", email);
    // console.log("Senha:", password);
  };

  return (
    <div className="overflow-hidden">
      <a
        className="fixed z-50 right-6 top-4 cursor-pointer"
        onClick={handlehome}
      >
        <i className="bx bx-x text-5xl"></i>
      </a>
      <div className="flex justify-center h-screen w-screen">
        <div className="w-full h-screen bg-neutral-50 flex flex-col justify-center items-center">
          <form onSubmit={handleSubmit}>
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
              <label htmlFor="password" className="flex text-lg font-medium">
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
              <a
                onClick={handleRecover}
                className="flex self-start text-sm cursor-pointer text-[#5e2cf5]"
              >
                Esqueci minha senha
              </a>
            </div>
            <button
              type="submit"
              className="bg-[#5e2cf5] px-32 py-2 mb-5 border-none rounded-full text-lg text-white font-semibold"
            >
              Acessar
            </button>
          </form>

          <a
            className="text-[#5e2cf5] font-semibold text-xl cursor-pointer"
            onClick={handleReg}
          >
            Criar conta
          </a>
        </div>
        <div className="banner border h-screen w-full hidden lg:flex lg:flex-col justify-around items-center shadow-xl">
          <img src={Logo} className="w-52 mt-10 cursor-pointer" />
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
