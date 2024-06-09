import { Property01 } from "../assets/images";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, Toaster } from 'react-hot-toast';
import { DoneToast, ErrToast } from "../elements/AllToasts";

// Firebase :
// import { auth } from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth, sendEmailVerification } from 'firebase/auth';

export default function Signup() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = getAuth();

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      await sendEmailVerification(user);
      console.log('Verification email sent to:', user.email);
      toast(<DoneToast text="inscrit avec succès" />, {
        style: { background: 'none', boxShadow: 'none' },
        duration: 2000,
        position: 'top-center',
      });
      setTimeout(() => { navigate("/login") }, 2000);
    } catch (error) {
      let errorMessage = "Il ya un problème!";
      if (error.code === 'auth/email-already-in-use') {
        errorMessage = "L'email est déjà utilisé!";
      } else if (error.code === 'auth/invalid-email') {
        errorMessage = "L'email est invalide!";
      } else if (error.code === 'auth/weak-password') {
        errorMessage = "Le mot de passe est trop faible!";
      }
      toast(<ErrToast text={errorMessage} />, {
        style: { background: 'none', boxShadow: 'none' },
        duration: 2000,
        position: 'top-center',
      });
      console.error(error);
    }
  };

  return (
    <div className="flex flex-wrap">
      <Toaster />
      <div className="flex w-full flex-col md:w-1/2">

        <div className="lg:w-[28rem] mx-auto my-auto flex flex-col justify-center pt-8 md:justify-start md:px-6 md:pt-0">
          <p className="text-left text-3xl mt-8 font-bold capitalize text-green-500">Créez votre compte</p>
          <p className="text-left text-gray-500">Rejoignez Reside pour recevoir des annonces immobilières</p>
          <a href="/login" className="mb-2 mt-8 flex items-center justify-center border w-full rounded-lg bg-green-500 px-4 py-2 text-center text-base font-semibold text-white shadow-md ring-gray-500 ring-offset-2 transition focus:ring-2">
            Se connecter
          </a>
          <div className="relative mt-8 flex h-px place-items-center bg-gray-200">
            <div className="absolute left-1/2 h-6 w-14 -translate-x-1/2 bg-white text-center text-sm text-gray-500">ou</div>
          </div>
          <form onSubmit={handleSignUp} className="flex flex-col pt-3 md:pt-8">
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
            <button type="submit" className="w-full rounded-lg bg-green-500 px-4 py-2 text-center text-base font-semibold text-white shadow-md ring-gray-500 ring-offset-2 transition focus:ring-2">Inscrivez-vous</button>
          </form>
          <div className="py-10 text-center">
            <p className="whitespace-nowrap text-gray-600">
              Vous avez déjà un compte?
              <a href="/login" className="underline-offset-4 font-semibold text-green-500 underline">Se connecter</a>
            </p>
          </div>
        </div>
      </div>
      <div className="pointer-events-none relative hidden h-screen select-none bg-black md:block md:w-1/2">
        <img className="-z-1 absolute top-0 h-full w-full object-cover opacity-90" alt="section" src={Property01} />
      </div>
    </div>

  )
}