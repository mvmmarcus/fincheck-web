import { Link } from "react-router-dom";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function RegisterPage() {
  return (
    <>
      <header className="text-center flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl text-gray-900 font-bold tracking-[-1px] ">
          Crie sua conta
        </h1>

        <p className="space-x-2">
          <span className="text-gray-700 tracking-[-0.5px]">
            Já possui uma conta?
          </span>
          <Link
            className="text-teal-900 tracking-[-0.5px] font-medium"
            to="/login"
          >
            Fazer login
          </Link>
        </p>
      </header>
      <form className="mt-[60px] flex flex-col gap-4">
        <Input name="name" type="name" placeholder="Nome" />
        <Input name="email" type="email" placeholder="E-mail" />
        <Input name="password" type="password" placeholder="Senha" />
        <Button className="mt-2" type="submit">
          Criar conta
        </Button>
      </form>
    </>
  );
}
