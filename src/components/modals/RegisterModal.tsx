import { authControllerSignup } from "@/services/api/orval-client";
import { loginModalState, registerModalState } from "@/store/modalState";
import { User } from "@/types/User";
import { useForm } from "react-hook-form";
import { useRecoilState, useSetRecoilState } from "recoil";
import { toast } from "react-toastify";
import Button from "../ui/Button";

const RegisterModal = () => {
  const [isRegisterOpen, setIsRegisterOpen] = useRecoilState(registerModalState);
  const setIsLoginOpen = useSetRecoilState(loginModalState);
  const { register, handleSubmit, reset, formState: { errors, isSubmitting }, } = useForm<User>();

  const onSubmit = async (data: User) => {
    try {
      const res = await authControllerSignup(data)
      if (!res.data.user) {
        toast.error("Error during registration");
        reset();
      } else {
        setIsLoginOpen(true)
        setIsRegisterOpen(false);
      }
    } catch {
      toast.error("Error during registration");
    }
  };

  return (
    isRegisterOpen ? (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white p-6 rounded-lg shadow-lg w-96 text-center">
          <h2 className="mb-2 font-bold">Register</h2>
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
                  minLength: { value: 6, message: "Password must be at least 6 characters" },
                })}
                type="password"
                placeholder="Password"
                className="border p-2 rounded w-full"
              />
              {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
            </div>
            <div>
              <input
                {...register("firstname", {
                  required: "First name is required",
                  minLength: { value: 2, message: "Must be at least 2 characters" },
                })}
                placeholder="First Name"
                className="border p-2 rounded w-full"
              />
              {errors.firstname && <p className="text-red-500 text-sm mt-1">{errors.firstname.message}</p>}
            </div>
            <div>
              <input
                {...register("lastname", {
                  required: "Last name is required",
                  minLength: { value: 2, message: "Must be at least 2 characters" },
                })}
                placeholder="Last Name"
                className="border p-2 rounded w-full"
              />
              {errors.lastname && <p className="text-red-500 text-sm mt-1">{errors.lastname.message}</p>}
            </div>
            <div className="flex gap-2 justify-center">
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Registering..." : "Register"}
              </Button>
              <Button type="button" variant="danger" onClick={() => setIsRegisterOpen(false)}>
                Cancel
              </Button>
            </div>
          </form>
        </div>
      </div>
    ) : null
  );
};

export default RegisterModal;
