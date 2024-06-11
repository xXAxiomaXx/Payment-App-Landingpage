import React from "react";
import $ from "jquery";
import Logo from "../../Images/ukalaa escrita.png";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const handlehome = () => {
    navigate("/",{ replace: true });
  };

  const baseURL = document.getElementById("baseURL").value;

  const handleSubmit = (event) => {
    event.preventDefault();

    const email = event.target.elements.email.value;

    $.ajax({
      url: baseURL + "/account/recoverpassword",
      method: "POST",
      dataType: "json",

      data: {
        "email": email,
      },
      success: function (response) {
        console.log(response);
        //redirect
        if (response.redirect) {
          window.location.href = response.redirect;
        }
        //reaload
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

    console.log("Email:", email);
  };

  return (
    <div className="bg-neutral-50 flex justify-center py-10 items-center h-screen">
      <a
        className="fixed z-50 right-6 top-4 cursor-pointer"
        onClick={handlehome}
      >
        <i className="bx bx-x text-5xl"></i>
      </a>
      <div className="bg-white w-fit py-3 px-10 flex flex-col items-center rounded-xl shadow-xl content-center">
        <img
          src={Logo}
          className="w-40 pb-5 cursor-pointer"
        />
        <h3 className="font-medium text-2xl">Recupere sua conta</h3>
        <form onSubmit={handleSubmit}>
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
          <button
            type="submit"
            className="bg-[#5e2cf5] px-20 sm:px-28 py-2 mb-5 border-none rounded-lg text-lg text-white font-semibold"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
