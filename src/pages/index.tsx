import { RecoilRoot } from "recoil";
import { ToastContainer } from "react-toastify";
import { AppContainer } from "@/components/AppContainer";
import "react-toastify/dist/ReactToastify.css";
import "tailwindcss/tailwind.css";

export default function App() {
  return (
    <RecoilRoot>
      <AppContainer />
      <ToastContainer />
    </RecoilRoot>
  );
}