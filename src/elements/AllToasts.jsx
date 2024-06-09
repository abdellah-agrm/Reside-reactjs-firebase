import { QuestionMarkCircleIcon } from "@heroicons/react/24/solid";
import { CheckCircleFill, ExclamationCircleFill, X } from "react-bootstrap-icons";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

export const DoneToast = ({ text }) => {
  return (
    <div className="font-poppins mt-2 flex items-center w-full max-w-xs p-4 bg-white text-gray-800 border-gray-800 dark:bg-gray-900 dark:text-white border-[1px] dark:border-white rounded-lg">
      <div className="inline-flex items-center text-green-500 bg-green-100 justify-center flex-shrink-0 w-8 h-8 rounded-lg">
        <CheckCircleFill className="h-5 w-5" />
      </div>
      <div className="ms-3 text-sm font-normal">{text}</div>
      <button type="button" className="ms-auto -mx-1.5 -my-1.5 text-gray-400 rounded-lg inline-flex items-center justify-center h-8 w-8" >
        <span className="sr-only">Close</span>
        <X className="h-6 w-6" />
      </button>
    </div>
  )
}

export const ErrToast = ({ text }) => {
  return (
    <div className="font-poppins mt-2 flex items-center w-full max-w-xs p-4 bg-white text-gray-800 border-gray-800 dark:bg-gray-900 dark:text-white border-[1px] dark:border-white rounded-lg">
      <div className="inline-flex text-red-500 bg-red-100 items-center justify-center flex-shrink-0 w-8 h-8 rounded-lg">
        <ExclamationCircleFill className="h-5 w-5" />
      </div>
      <div className="ms-3 text-sm font-normal">{text}</div>
      <button type="button" className="ms-auto -mx-1.5 -my-1.5 text-gray-400 rounded-lg inline-flex items-center justify-center h-8 w-8" >
        <span className="sr-only">Close</span>
        <X className="h-6 w-6" />
      </button>
    </div>
  )
}

export function Logout() {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate('/signin');
  }

  const confirmDelete = () => {
    toast((t) => (
      <div className="relative p-4 text-center bg-white dark:bg-gray-900 text-gray-800 dark:text-white rounded-lg shadow sm:p-5">
        <button onClick={() => toast.dismiss(t.id)} type="button" className="text-gray-900 dark:text-white absolute top-2.5 right-2.5 bg-transparent hover:bg-gray-300 dark:hover:bg-gray-700 hover:text-gray-900 rounded-lg text-sm p-1 ml-auto inline-flex items-center">
          <X className="w-6 h-6" />
        </button>
        <QuestionMarkCircleIcon className="w-10 h-10 mb-1 mx-auto" />
        <p className="mb-3 text-xs dark:text-white text-gray-900">Are you sure?</p>
        <div className="flex justify-center items-center space-x-4">
          <button onClick={() => {
            logout();
            toast.dismiss(t.id);
          }} type="submit" className="py-2 px-3 text-xs font-medium text-center text-white bg-darkblue-100 rounded-lg hover:bg-darkblue-100">
            Yes, I'm sure
          </button>
          <button onClick={() => toast.dismiss(t.id)} type="button" className="py-2 px-3 text-xs font-medium border border-darkblue-100 bg-transparent text-darkblue-100 rounded-lg focus:z-10">
            No, cancel
          </button>
        </div>
      </div>),
      {
        style: { background: 'none', boxShadow: 'none' },
        duration: 3000,
        position: 'top-center',
      });
  }

  return (
    <div onClick={confirmDelete} className="text-gray-800 dark:text-white">Sign out</div>
  )
}