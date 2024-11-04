// import React, { useState } from "react";
// import Input from "~/component/input/Input";
import Button from "~/component/buttton/Button";
import facebook from "~/assets/facebook.png";
import google from "~/assets/google.png";
import apple from "~/assets/apple.png";
import logo from "~/assets/logo.png";
import { AuthViewProps } from "^/lib/core/viewModels/auth/authViewModel";
import { useNavigate } from "react-router-dom";
import { observer } from "mobx-react";

const Login = observer(({ viewModel }: AuthViewProps) => {
  const navigate = useNavigate();
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="flex flex-col items-center gap-10">
        <img
          src={logo}
          alt="logo"
          id="logo"
          className="w-64 h-64 mb-[-50px] mt-[-32px]"
        />

        <div className="flex flex-col gap-4">
          <input
            type="text"
            className="w-80 font-light text-white h-[47px] rounded-xl p-3 bg-transparent border border-gray-300 focus:outline-none focus:border-blue-500"
            placeholder="Username"
            value={viewModel.getUsername}
            onChange={(e) => viewModel.setUsername(e.target.value)}
            style={{
              padding: "10px",
              margin: "10px 0",
              width: "100%",
              boxSizing: "border-box",
            }}
          />
          <input
            className="w-80 font-light text-white h-[47px] rounded-xl p-3 bg-transparent border border-gray-300 focus:outline-none focus:border-blue-500"
            type="password"
            placeholder="Password"
            value={viewModel.getSenha}
            style={{
              padding: "10px",
              margin: "10px 0",
              width: "100%",
              boxSizing: "border-box",
            }}
            onChange={(e) => viewModel.setSenha(e.target.value)}
          />
          <button
            className="w-80 h-[47px] rounded-3xl p-2 flex gap-3 items-center justify-center  bg-[#AB0202]  hover:bg-black"
            type="button"
            onClick={() => viewModel.signIn(navigate)}
          >
            Entrar
          </button>
        </div>

        <div className="mt-[-30px]">
          <span id="createAccount" className="text-white">
            Não tem conta?
            <a href="/SignIn" className="no-underline text-[#e73232] font-bold">
              {" "}
              Criar conta
            </a>
          </span>
        </div>
      </div>
    </div>
  );
});

export default Login;
