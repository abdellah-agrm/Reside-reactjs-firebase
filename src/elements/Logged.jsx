import { ArrowLeftStartOnRectangleIcon, StarIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router";

export default function Logged() {
  const navigate = useNavigate();
  const signout = () => {
    localStorage.clear();
    navigate("/login");
  }

  return (
    <>
      <li className="font-bold md:mr-3">
        <a onClick={signout} className="cursor-pointer border-2 border-green-500 text-green-500 p-1.5 rounded-full">
          <ArrowLeftStartOnRectangleIcon className="h-5 w-auto" />
        </a>
      </li>
      <li className="font-bold md:mr-3">
        <a href="/starred" className="border-2 border-green-500 text-green-500 p-1.5 rounded-full">
          <StarIcon className="h-5 w-auto" />
        </a>
      </li>
    </>
  )
}