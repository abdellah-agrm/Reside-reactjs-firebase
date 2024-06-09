import { StarIcon as StarIconFill } from "@heroicons/react/24/solid";
import { StarIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { DoneToast } from "./AllToasts";
import { LoadingBtn } from "./LoadingCompo";
import { collection, query, where, getDocs, addDoc, deleteDoc } from 'firebase/firestore';
import { db } from '../firebase/firebase.config'; // Make sure to import your Firebase config

export default function StarBtn({ type, house_id }) {
  const userID = localStorage.getItem('userID');
  const [ref, setRef] = useState(false);
  const [favorite, setFavorite] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const checkFavorite = async () => {
      const favoritesCollectionRef = collection(db, 'favorites');
      const q = query(favoritesCollectionRef, where('user_id', '==', userID), where('house_id', '==', house_id));
      const querySnapshot = await getDocs(q);
      setFavorite(!querySnapshot.empty); // Set to true if favorite exists
      setIsLoading(false);
    };

    checkFavorite();
  }, [house_id, userID, ref]);

  const favoriteClick = async () => {
    setIsLoading(true);
    const favoritesCollectionRef = collection(db, 'favorites');
    const q = query(favoritesCollectionRef, where('user_id', '==', userID), where('house_id', '==', house_id));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      // If it's already a favorite, remove it
      const favoriteDoc = querySnapshot.docs[0];
      await deleteDoc(favoriteDoc.ref);
      setFavorite(false);
    } else {
      // If it's not a favorite, add it
      await addDoc(favoritesCollectionRef, { user_id: userID, house_id: house_id });
      setFavorite(true);
    }

    setRef(!ref); // Trigger a re-check
    setIsLoading(false);
    toast(<DoneToast text={`The element has been ${favorite ? "Uns" : "S"}tarred`} />, {
      style: { background: 'none', boxShadow: 'none' },
      duration: 2000,
      position: 'top-center',
    });
  };

  return (
    type === "starred" ?
      (<button onClick={favoriteClick} className="flex justify-center items-center rounded-full h-12 w-12 bg-green-500 text-white hover:bg-green-700">
        {isLoading ? (<LoadingBtn color="#FFFFFF" />)
          : (favorite ?
            (<StarIconFill className="h-7 w-auto" />)
            : (<StarIcon className="h-7 w-auto" />))}
      </button>)
      : (<button onClick={favoriteClick} className="card-footer-actions-btn bg-gray-200 hover:bg-green-500 hover:text-gray-200">
        {isLoading ? (<LoadingBtn color="#057A55" />)
          : (favorite ?
            (<StarIconFill className="h-6 text-green-500 hover:text-gray-200 w-auto" />)
            : (<StarIcon className="h-6 w-auto" />))}
      </button>)
  )
}
