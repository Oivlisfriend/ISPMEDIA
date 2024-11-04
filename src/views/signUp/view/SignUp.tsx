import React from "react";
import Input from "~/component/input/Input";
import Button from "~/component/buttton/Button";
import logo from "~/assets/logo.png";
import { AuthViewProps } from "^/lib/core/viewModels/auth/authViewModel";
import { observer } from "mobx-react";
import { useNavigate } from "react-router-dom";

const SignUp = observer(({ viewModel }: AuthViewProps) => {
  const navigate = useNavigate();
  return (
    <div className="h-screen flex justify-center item">
      <div className="flex flex-col items-center gap-2">
        <img
          src={logo}
          alt="logo"
          id="logo"
          className="w-64 h-64 mb-[-50px] "
        />
        <div className="flex flex-col gap-1">
          <Input
            placeholder="Exemplo: John"
            onChange={(e) => viewModel.setNome(e.target.value)}
            type="text"
            texto="Nome"
            value={viewModel.getNome}
          />
          <Input
            placeholder="Exemplo: Doe"
            onChange={(e) => viewModel.setSobrenome(e.target.value)}
            type="text"
            texto="Sobrenome"
            value={viewModel.getSobrenome}
          />
          <Input
            placeholder="Exemplo: joao123"
            onChange={(e) => viewModel.setUsername(e.target.value)}
            type="text"
            texto="Username"
            value={viewModel.getUsername}
          />
          <Input
            placeholder="Exeemplo@isptec.co.ao"
            onChange={(e) => viewModel.setEmail(e.target.value)}
            type="email"
            texto="Email"
            value={viewModel.getEmail}
          />
          <Input
            placeholder="Senha"
            type="password"
            value={viewModel.getSenha}
            texto="senha"
            onChange={(e) => viewModel.setSenha(e.target.value)}
          />

          <button
            className="w-80 h-[57px] rounded-3xl p-3 flex gap-3 items-center justify-center hover:bg-black"
            type="button"
            onClick={() => viewModel.signUp(navigate)}
          >
            Criar Conta
          </button>
        </div>

        {/* <Button color="#fff" background="#AB0202" value="Entrar" /> */}

        <div className="pb-2">
          <span id="createAccount" className="text-white">
            Já tem conta?{" "}
            <a href="Login" className="no-underline text-[#AB0202] font-bold">
              Fazer Login
            </a>
          </span>
        </div>
      </div>
    </div>
  );
});

export default SignUp;
