import Nav from "./Nav";
import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import PropertyCard from "./PropertyCard";
import { LoadingProperties } from "../elements/LoadingCompo";
import {AuthChecker, checkEmailVerification} from "../auth/AuthChecker";

// Firebase :
import { db } from "../firebase/firebase.config";
import { collection, getDocs } from 'firebase/firestore';

export default function PropertyPage() {
  AuthChecker();
  checkEmailVerification();
  const [allProps, setAllProps] = useState([]);
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [type, setType] = useState("");
  const [date, setDate] = useState("");
  const [price, setPrice] = useState("");
  const [data, setData] = useState([]);
  const housesCollectionRef = collection(db, 'houses');
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    try {
      const data = await getDocs(housesCollectionRef);
      setAllProps(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      setData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      setIsLoading(false);
    } catch (err) {
      console.error(err);
    }
  };


  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    let filtered = allProps;

    if (search) {
      filtered = filtered.filter(item =>
        item.title.toLowerCase().includes(search.toLowerCase()) ||
        item.details.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (location) {
      filtered = filtered.filter(item =>
        item.location.toLowerCase().includes(location.toLowerCase())
      );
    }

    if (type) {
      filtered = filtered.filter(item => item.type === type);
    }

    if (date) {
      filtered = filtered.sort((a, b) => {
        return date === 'oldest' ? a.id - b.id : b.id - a.id;
      });
    }

    if (price) {
      filtered = filtered.sort((a, b) => {
        return price === 'highest' ? b.price - a.price : a.price - b.price;
      });
    }

    setData(filtered);
  }, [search, location, type, date, price, allProps]);


  const reset = () => {
    setSearch("");
    setLocation("");
    setType("");
    setDate("");
    setPrice("");
    setData(allProps);
  };

  return (
    <section>
      <Toaster />
      <Nav />
      <div className="w-full mt-4">

        <div className="flex flex-col px-4">
          <div className="relative mb-10 w-full flex  items-center justify-between rounded-md">
            <svg className="absolute left-2 block h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" className=""></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65" className=""></line>
            </svg>
            <input type="name" value={search} onChange={(e) => setSearch(e.target.value)} className="h-12 w-full cursor-text rounded-md border border-gray-100 bg-gray-100 py-4 pr-40 pl-12 shadow-sm outline-none focus:border-green-500 focus:ring focus:ring-green-200 focus:ring-opacity-50" placeholder="Recherche par titre, détails, etc" />
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <div className="flex flex-col">
              <label className="text-sm font-medium text-stone-600">Localisation</label>
              <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Localisation" className="mt-2 block w-full rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-green-500 focus:ring focus:ring-green-200 focus:ring-opacity-50" />
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-medium text-stone-600">Type</label>

              <select value={type} onChange={(e) => setType(e.target.value)} className="mt-2 block w-full rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-green-500 focus:ring focus:ring-green-200 focus:ring-opacity-50">
                <option value="">Tout</option>
                <option value="rent">À Louer</option>
                <option value="sale">À Vendre</option>
              </select>
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-medium text-stone-600">Trier par date</label>
              <select value={date} onChange={(e) => setDate(e.target.value)} className="mt-2 block w-full rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-green-500 focus:ring focus:ring-green-200 focus:ring-opacity-50">
                <option value="oldest">Plus ancien</option>
                <option value="newest">Plus récent</option>
              </select>
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-medium text-stone-600">Trier par prix</label>

              <select value={price} onChange={(e) => setPrice(e.target.value)} className="mt-2 block w-full cursor-pointer rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-green-500 focus:ring focus:ring-green-200 focus:ring-opacity-50">
                <option value="lowest">Le plus bas</option>
                <option value="highest">Le plus bas</option>
              </select>
            </div>
          </div>

          <div className="mt-6 grid w-full grid-cols-2 justify-end space-x-4 md:flex">
            <button onClick={reset} className="rounded-lg bg-gray-200 px-8 py-2 font-medium text-gray-700 outline-none hover:opacity-80 focus:ring">Réinitialiser</button>
          </div>
        </div>

      </div>

      <div className="px-4">
        <hr className="border-gray-200 my-8" />
      </div>

      {/* Properties  */}
      <div className="px-4 pb-8">
        {
          isLoading ?
            (<LoadingProperties />)
            : (<div className="grid grid-cols-3 gap-4 property-list max-md:grid-cols-1">
              {data.map((data, index) => (<PropertyCard key={index} item={data} />))}
            </div>
            )
        }
      </div>

    </section>

  )
}