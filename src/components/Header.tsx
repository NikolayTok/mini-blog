import { loginModalState } from "@/store/modalState";
import { useRecoilState, useSetRecoilState } from "recoil";
import { userState } from "@/store/userState";
import { useAuth } from "@/services/auth/useAuth";
import Button from "./ui/Button";

const Header = () => {
  const setLoginOpen = useSetRecoilState(loginModalState);
  const [user] = useRecoilState(userState);
  const { logout } = useAuth();

  return (
    <header className="p-4 flex justify-between items-center bg-gray-900 text-white">
      <h1 className="text-xl font-bold">Mini Blog</h1>
      {user ? (
        <div className="flex items-center gap-4">
          <p className="text-sm text-gray-300">
            Welcome, <span className="font-semibold text-white">{user?.firstname} {user?.lastname}</span>
          </p>
          <Button variant="danger" onClick={logout}>
            Logout
          </Button>
        </div>
      ) : (
        <div className="flex gap-2">
          <Button variant="success" onClick={() => setLoginOpen(true)}>
            Login
          </Button>
        </div>
      )}
    </header>
  );
};

export default Header;
