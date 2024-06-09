import { Property02 } from "../assets/images";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, Toaster } from 'react-hot-toast';
import { DoneToast, ErrToast } from "../elements/AllToasts";

// Firebase :
import { auth } from "../firebase/firebase.config";
import { signInWithEmailAndPassword } from "firebase/auth";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = async (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        localStorage.setItem('userID', user.uid);
        localStorage.setItem('hasJustSignedIn', 'true');

        toast(<DoneToast text="connecté avec succès" />, {
          style: { background: 'none', boxShadow: 'none' },
          duration: 2000,
          position: 'top-center',
        });
        setTimeout(() => {
          navigate("/");
        }, 1500);
      })
      .catch((error) => {
        toast(<ErrToast text="Il ya un problème!" />, {
          style: { background: 'none', boxShadow: 'none' },
          duration: 2000,
          position: 'top-center',
        });
        console.error(error);
      });
  };

  return (
    <div className="flex flex-wrap">
      <Toaster />
      <div className="flex w-full flex-col md:w-1/2">

        <div className="lg:w-[28rem] mx-auto my-auto flex flex-col justify-center pt-8 md:justify-start md:px-6 md:pt-0">
          <p className="text-left text-3xl font-bold text-green-500">Bienvenue</p>
          <p className="text-left text-gray-500">Se connecter pour accéder à notre site Web.</p>
          <a href="/signup" className="mb-2 mt-8 flex items-center justify-center border w-full rounded-lg bg-green-500 px-4 py-2 text-center text-base font-semibold text-white shadow-md ring-gray-500 ring-offset-2 transition focus:ring-2">
            Inscrivez-vous
          </a>
          <div className="relative mt-8 flex h-px place-items-center bg-gray-200">
            <div className="absolute left-1/2 h-6 w-14 -translate-x-1/2 bg-white text-center text-sm text-gray-500">ou</div>
          </div>
          <form onSubmit={handleSignIn} className="flex flex-col pt-3 md:pt-8">
            <div className="flex flex-col pt-4">
              <div className="focus-within:border-b-gray-500 relative flex overflow-hidden border-b-2 transition">
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                  className="w-full flex-1 appearance-none border-0 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none" placeholder="E-mail" />
              </div>
            </div>
            <div className="mb-12 flex flex-col pt-4">
              <div className="focus-within:border-b-gray-500 relative flex overflow-hidden border-b-2 transition">
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}
                  className="w-full flex-1 appearance-none border-0 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none" placeholder="Mot de passe" />
              </div>
            </div>
            <button type="submit" className="w-full rounded-lg bg-green-500 px-4 py-2 text-center text-base font-semibold text-white shadow-md ring-gray-500 ring-offset-2 transition focus:ring-2">Se connecter</button>
          </form>
          <div className="py-12 text-center">
            <p className="whitespace-nowrap text-gray-600">
              Vous n'avez pas de compte ?
              <a href="/signup" className="underline-offset-4 font-semibold text-green-500 underline">Inscription gratuite.</a>
            </p>
          </div>
        </div>
      </div>
      <div className="pointer-events-none relative hidden h-screen select-none bg-black md:block md:w-1/2">
        <img className="-z-1 absolute top-0 h-full w-full object-cover opacity-90" alt="section" src={Property02} />
      </div>
    </div>

  )
}