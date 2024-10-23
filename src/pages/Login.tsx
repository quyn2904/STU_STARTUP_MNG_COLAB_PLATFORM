import Logo from '../common/components/Logo';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { FcGoogle } from 'react-icons/fc';
import { useForm } from 'react-hook-form';
import http from '../utils/http';
import { toast } from 'react-toastify';
import { AxiosError } from 'axios';

const Login = (): JSX.Element => {
  const { register, handleSubmit } = useForm<{
    email: string;
    password: string;
  }>();

  const onSubmit = async (data: { email: string; password: string }) => {
    try {
      const response = await http({
        method: 'POST',
        url: '/Auth/login',
        data: data,
      });
      if (response.status === 200) {
        toast.success('Login successfully');
      }
    } catch (err: AxiosError | any) {
      toast.error(err);
    }
  };
  return (
    <div className="absolute left-1/2 top-1/2 flex h-fit min-h-[600px] min-w-[700px] -translate-x-1/2 -translate-y-1/2 transform flex-col items-center bg-[#013C5A] py-16 text-white">
      <div className="mb-10 scale-150">
        <Logo fill="#ffffff" />
      </div>
      <p className="my-6 text-5xl font-bold">WELCOME BACK</p>
      <form className="mt-3 w-full px-36" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            placeholder="example@fpt.edu.vn"
            className="w-full bg-white text-black"
            {...register('email')}
          />
        </div>
        <div className="mb-2">
          <Label htmlFor="password">Password</Label>
          <Input
            type="text"
            id="password"
            placeholder="Password"
            className="w-full bg-white text-black"
            {...register('password')}
          />
        </div>
        <a className="block cursor-pointer text-sm italic underline hover:text-green-500">
          Forgot password?
        </a>
        <button
          className="mt-5 w-full rounded bg-[#F4A258] py-[6px] text-xl font-semibold text-[#013C5A]"
          type="submit"
        >
          Login
        </button>
        <div className="mt-5 flex items-center justify-between">
          <div className="h-0 w-[45%] border border-y-[#6D6D6D]"></div>
          <p>OR</p>
          <div className="h-0 w-[45%] border border-y-[#6D6D6D]"></div>
        </div>
        <button
          type="button"
          className="mt-5 h-10 w-full items-center rounded bg-white px-0 py-0 pl-3 text-center text-xl font-semibold text-[#013C5A]"
        >
          <FcGoogle className="absolute h-7 w-7" />
          Signup with Google
        </button>
        <div className="mt-3">
          <p className="inline pr-2">New to account?</p>
          <a className="cursor-pointer underline hover:text-green-500">
            Sign up
          </a>
        </div>
      </form>
    </div>
  );
};

export default Login;
