import { useState } from "react";
import Logo from "@/assets/logo.png";
// import Input from "@/components/ui/Input";
// import Switch from "@/components/ui/Switch";
import { LogIn } from "lucide-react";

import { useForm } from "react-hook-form";
import { z } from 'zod'
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";

const loginSchema = z.object({
  username: z.string().min(3, "username must be at least 3 characters"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type LoginInputProps = z.infer<typeof loginSchema>
const Login = () => {
  const [isChecked, setisChecked] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(loginSchema)
  })

  const handleRememberMe = () => {
    setisChecked((prev) => !prev);
  };

  const onSubmit = (data: LoginInputProps) => {
    console.log(data, errors)
  }
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="mx-2 w-full border border-gray-300 pb-10 shadow-md sm:w-90">
        <div className="flex flex-col items-center bg-linear-to-b from-sky-950 to-sky-900">
          <div className="flex flex-col items-center px-8 py-4">
            {/* logo */}
            <div className="mb-4 size-10">
              <img
                className="h-full w-full rounded-full object-cover"
                src={Logo}
              />
            </div>
            {/* heading */}
            <h1 className="text-lg font-medium tracking-tight text-gray-100">
              Let's Get Started
            </h1>
            {/* text */}
            <p className="pt-2 text-sm text-gray-400">
              Sign in to continue to CRM
            </p>
          </div>
        </div>

        {/* form */}
        <form className="flex flex-col gap-2 px-4 pt-2" onSubmit={handleSubmit(onSubmit)}>

          {/* username */}
          <div className="flex w-full flex-col gap-2 ">
            <label className="pt-2 text-sm text-gray-400" htmlFor="username">
              Username
            </label>
            <Input
              id="username"
              placeholder="Enter username"
              {...register("username")}
            />
            {errors.username && (
              <span className="text-xs text-red-600">{errors.username.message}</span>
            )}
          </div>

          {/* password */}
          <div className="flex w-full flex-col gap-2 ">
            <label className="pt-2 text-sm text-gray-400" htmlFor="password">
              Password
            </label>
            <Input
              id="password"
              placeholder="Enter Password"
              type="password"
              {...register("password")}
            />
            {errors.password && (
              <span className="text-xs text-red-600">{errors.password.message}</span>
            )}
          </div>


          {/* remember me */}
          <div className=" w-full space-y-2 ">
            <div className=" flex h-8 items-center justify-between">
              <div className="flex h-9 items-center gap-3  " >
                <Switch
                  id="rememberMe"
                  checked={isChecked}
                  onCheckedChange={handleRememberMe}
                  className=""
                />
                <label
                  htmlFor="rememberMe"
                  className="cursor-pointer pt-1 text-xs text-gray-600"
                  onClick={handleRememberMe}
                >
                  Remember me
                </label>
              </div>

              <p className="cursor-pointer pt-1 text-right text-xs font-normal text-gray-400">
                Forgot password?
              </p>
            </div>
            {/* login button */}
            <Button type="submit" className="w-full pt-2">
              <span>Login</span>
              <LogIn className="ml-0.5 inline size-3.5 font-bold" />
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;