import { useLocation, useNavigate } from 'react-router';
import { ArrowLeftIcon, HomeIcon, StarIcon, UserIcon } from "@heroicons/react/24/solid";
import { Dropdown } from "flowbite-react";
import AddProp from './AddProp';

export default function Nav() {
  const location = useLocation();
  const navigate = useNavigate();
  const userID = localStorage.getItem('userID');

  const signout = () => {
    localStorage.clear();
    navigate("/login");
  }

  return (
    <header className="flex justify-between max-w-screen overflow-hidden px-4 py-4 text-gray-900">
      <a href="/" className="flex cursor-pointer items-center whitespace-nowrap text-3xl max-md:text-xl font-black">
        <span className="mr-2 max-md:mr-0.5 text-green-500">
          <HomeIcon className="h-8 max-md:h-6 w-auto mb-1.5 max-md:mb-1" />
        </span>
        Reside
      </a>

      <ul className="flex gap-2">

        <li className="font-bold">
          <a href="/" className="border-2 border-green-500 text-green-500 p-1.5 rounded-full">
            <HomeIcon className="h-5 w-auto" />
          </a>
        </li>

        <li className="font-bold">
          <Dropdown label="" dismissOnClick={false} renderTrigger={() => (
            <div className="cursor-pointer border-2 border-green-500 text-green-500 p-1.5 rounded-full">
              <UserIcon className="h-5 w-auto" />
            </div>
          )}>
            {
              userID === "bjgaLBDJVLSDsCqsZyP3oHjNNxv2" ?
                (<Dropdown.Item><AddProp /></Dropdown.Item>)
                : null
            }
            <Dropdown.Item onClick={signout}>Se déconnecter</Dropdown.Item>
          </Dropdown>

        </li>
        {
          location.pathname === "/starred" ?
            (<li className="font-bold">
              <a href="#_" onClick={() => navigate(-1)} className="cursor-pointer border-2 border-green-500 text-green-500 p-1.5 rounded-full">
                <ArrowLeftIcon className="h-5 w-auto" />
              </a>
            </li>)
            : (<li className="font-bold">
              <a href="/starred" className="border-2 border-green-500 text-green-500 p-1.5 rounded-full">
                <StarIcon className="h-5 w-auto" />
              </a>
            </li>)
        }
      </ul>

    </header>
  )
}