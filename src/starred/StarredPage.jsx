import { useEffect, useState } from "react";
import StarredCard from "./StarredCard";
import { LoadingProperties } from "../elements/LoadingCompo";
import Nav from "../properties/Nav";
import {AuthChecker, checkEmailVerification} from "../auth/AuthChecker";

import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../firebase/firebase.config';

export default function StarredPage() {
  AuthChecker();
  checkEmailVerification();
  const [starreds, setStarreds] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [ref, setRef] = useState(false);
  const user_id = localStorage.getItem('userID');
  const housesCollectionRef = collection(db, 'houses');

  useEffect(() => {
    const fetchFavorites = async () => {
      // Fetch favorites
      const favsSnapshot = await getDocs(query(collection(db, 'favorites'), where('user_id', '==', user_id)));
      const houseIds = favsSnapshot.docs.map(doc => doc.data().house_id);

      // Fetch houses
      const data = await getDocs(housesCollectionRef);
      const houses = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      setStarreds(houses.filter(doc => houseIds.includes(doc.id)));

      setIsLoading(false);
    };

    fetchFavorites();
  }, [ref]);

  const handleRefresh = () => {
    setRef(!ref);
  };

  return (
    <section className="bg-white text-green-500 min-h-screen">
      <Nav />
      <div className="pt-10 pb-8 ">
        {
          isLoading ? (<LoadingProperties />)
            : (starreds.map((data, index) => (
              <StarredCard key={index} item={data} onRefresh={handleRefresh} />
            ))
            )
        }
      </div>
    </section>
  )
}