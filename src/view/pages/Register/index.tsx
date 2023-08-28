import { Link } from "react-router-dom";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { useRegisterController } from "./useRegisterController";

export function RegisterPage() {
  const { handleFormSubmit, register, errors, isLoading } =
    useRegisterController();

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
      <form
        onSubmit={handleFormSubmit}
        className="mt-[60px] flex flex-col gap-4"
      >
        <Input
          type="name"
          placeholder="Nome"
          {...register("name")}
          error={errors.name?.message}
        />
        <Input
          type="email"
          placeholder="E-mail"
          {...register("email")}
          error={errors.email?.message}
        />
        <Input
          type="password"
          placeholder="Senha"
          {...register("password")}
          error={errors.password?.message}
        />
        <Button className="mt-2" type="submit" isLoading={isLoading}>
          Criar conta
        </Button>
      </form>
    </>
  );
}
