import { XMarkIcon } from "@heroicons/react/24/outline";
import { ArrowsPointingOutIcon, PhoneIcon } from "@heroicons/react/24/solid";
import { Modal } from "flowbite-react";
import { useState } from "react";
import { LoadingCard } from "../elements/LoadingCompo";

// firebase :
import { db } from '../firebase/firebase.config';
import { doc, getDoc } from 'firebase/firestore';

export default function ModalProp({ type, compo, house_id }) {
  const [openModal, setOpenModal] = useState(false);
  const [oneProp, setOneProp] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async (houseid) => {
    const fetchDocument = async () => {
      try {
        const docRef = doc(db, 'houses', houseid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setOneProp(docSnap.data());
          setIsLoading(false)
        } else {
          console.log('No such document!');
        }
      } catch (error) {
        console.error('Error fetching document: ', error);
      }
    };

    fetchDocument();
  };

  return (
    <>
      {
        type === "modal" ?
          (<button onClick={() => {
            setOpenModal(true);
            fetchData(house_id);
          }} className="card-footer-actions-btn bg-gray-200">
            <ArrowsPointingOutIcon className="h-5 w-auto" />
          </button>)
          : (
            <a href="#_" className="cursor-pointer" onClick={() => {
              setOpenModal(true);
              fetchData(house_id);
            }}>{compo}</a>
          )
      }
      <Modal show={openModal} onClose={() => setOpenModal(false)} size="max-w-7xl">
        <Modal.Body className="w-full">
          <div className="flex mb-4 justify-end">
            <button onClick={() => setOpenModal(false)} className="p-0.5 rounded-lg hover:bg-gray-200">
              <XMarkIcon className="h-7 w-auto text-gray-700" />
            </button>
          </div>

          <section className="relative flex justify-center items-center">
            {
              isLoading ? (<LoadingCard />)
                : (
                  <div className="w-full max-w-7xl mx-auto px-4 pb-8 md:px-8">
                    <div className="grid grid-cols-12 gap-y-11">
                      <div
                        className="col-span-12 lg:col-span-7 py-12 px-4 lg:px-11 bg-gray-50 max-lg:rounded-2xl lg:rounded-l-2xl flex flex-col justify-between max-lg:max-w-lg max-lg:mx-auto">
                        <h2 className="font-manrope font-bold text-2xl sm:text-4xl leading-10 text-[#44275F] mb-1">
                          {oneProp.title}
                        </h2>
                        <h2 className="font-manrope font-bold text-xl sm:text-2xl leading-10 text-green-500 mb-9">
                          {oneProp.price} MAD
                        </h2>
                        <div className="flex flex-col max-md:rounded-3xl rounded-full min-[550px]:flex-row max-[550px]:gap-4 min-[550px]:items-center py-4 pr-3 lg:pr-10 pl-3 lg:pl-6 bg-white mb-14 w-full xl:w-[calc(100%-45px)]">
                          <div className="flex items-center gap-4 pr-4 max-[550px]:pl-4 min-[550px]:border-r border-gray-200 ">
                            <span className="flex justify-center items-center rounded-full h-12 w-12 bg-green-100 text-green-500 text-lg font-semibold transition-all duration-500 hover:bg-green-200">
                              {oneProp.bedrooms}
                            </span>
                            <p className="text-sm text-[#44275F] font-bold">Chambres</p>
                          </div>
                          <div className="flex items-center gap-4 px-4 min-[550px]:border-r border-gray-200 ">
                            <span className="flex justify-center items-center rounded-full h-12 w-12 bg-green-100 text-green-500 text-lg font-semibold transition-all duration-500 hover:bg-green-200">
                              {oneProp.bathrooms}
                            </span>
                            <p className="text-sm text-[#44275F] font-bold">Salles de Bains</p>
                          </div>
                          <div className="flex items-center gap-4 pl-4">
                            <span className="flex justify-center items-center rounded-full h-12 w-12 bg-green-100 text-green-500 text-lg font-semibold transition-all duration-500 hover:bg-green-200">
                              {oneProp.squareft}
                            </span>
                            <p className="text-sm text-[#44275F] font-bold">Pieds Carrés</p>
                          </div>
                        </div>

                        <p className="text-sm text-[#44275F] font-bold mb-2">
                        Voici le numéro de téléphone du propriétaire où vous pourrez obtenir<br/>plus d'informations :
                        </p>
                        <button className="flex items-center rounded-full py-3 px-5 min-[550px]:w-max w-full justify-center shadow-sm shadow-transparent bg-green-500 transition-all duration-500 hover:shadow-green-400 hover:bg-green-700">
                          <PhoneIcon className="h-6 w-auto text-white" />
                          <span className="px-2 font-semibold text-base text-white">{oneProp.phone}</span>
                        </button>
                      </div>
                      <div className="col-span-12 lg:col-span-5 lg:max-w-md max-lg:mx-auto ">
                        <img src={`${process.env.PUBLIC_URL}/images/${oneProp.img}`} alt="house" className="w-full h-full rounded-r-2xl max-lg:rounded-3xl" />
                      </div>
                    </div>
                  </div>
                )
            }
          </section>


        </Modal.Body>
      </Modal>
    </>
  );
}
