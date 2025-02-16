import { loginModalState, registerModalState } from "@/store/modalState";
import { User } from "@/types/User";
import { useForm } from "react-hook-form";
import { useRecoilState, useSetRecoilState } from "recoil";
import { useAuth } from "@/services/auth/useAuth";
import Button from "../ui/Button";
import { toast } from "react-toastify";

const LoginModal = () => {
  const [isLoginOpen, setIsLoginOpen] = useRecoilState(loginModalState);
  const setIsRegisterOpen = useSetRecoilState(registerModalState);
  const { register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<User>({ mode: "onBlur", });
  const { login } = useAuth();

  const onSubmit = async (data: User) => {
    try {
      login(data)
      reset();
      setIsLoginOpen(false);
    } catch {
      toast.error("Error during login");
    }
  };

  return (
    isLoginOpen ? (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white p-6 rounded-lg shadow-lg w-96 text-center">
          <h2 className="mb-2 font-bold">Login</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
            <div>
              <input
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Invalid email format",
                  },
                })}
                placeholder="Email"
                className="border p-2 rounded w-full"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
            </div>
            <div>
              <input
                {...register("password", {
                  required: "Password is required",
                })}
                type="password"
                placeholder="Password"
                className="border p-2 rounded w-full"
              />
              {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
            </div>
            <span
              onClick={() => {
                setIsRegisterOpen(true);
                setIsLoginOpen(false);
              }}
              className="text-blue-500 hover:underline cursor-pointer text-sm text-center"
            >
              Don&apos;t have an account? <b>Sign up now!</b>
            </span>
            <div className="flex gap-2 justify-center">
              <Button type="submit" variant="success" disabled={isSubmitting}>
                {isSubmitting ? "Logging in..." : "Login"}
              </Button>
              <Button type="button" variant="danger" onClick={() => setIsLoginOpen(false)}>
                Cancel
              </Button>
            </div>
          </form>
        </div>
      </div>
    ) : null
  );
};


export default LoginModal;
