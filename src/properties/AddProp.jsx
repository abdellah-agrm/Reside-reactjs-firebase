import { useState } from "react";
import { Modal } from "flowbite-react";

// Firebase :
import { db } from '../firebase/firebase.config';
import { collection, addDoc } from 'firebase/firestore';

export default function AddProp() {
  const [openModal, setOpenModal] = useState(false);
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [location, setLocation] = useState("");
  const [img, setImg] = useState("");
  const [price, setPrice] = useState("");
  const [type, setType] = useState("rent");
  const [phone, setPhone] = useState("");
  const [squareft, setSquareft] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [bathrooms, setBathrooms] = useState("");

  // collection :
  const housesCollectionRef = collection(db, 'houses');

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImg(file.name);
      };
      reader.readAsDataURL(file);
    }
  };

  const dataa = [
    {
      "user_id": "bjgaLBDJVLSDsCqsZyP3oHjNNxv2",
      "img": "rent1.jpg",
      "title": "Spacious Family Home",
      "location": "New York, NY",
      "price": 3500,
      "details": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "bedrooms": 3,
      "bathrooms": 2,
      "squareft": 1500,
      "type": "rent",
      "phone": "+212 612345678"
    },
    {
      "user_id": "bjgaLBDJVLSDsCqsZyP3oHjNNxv2",
      "img": "rent2.jpg",
      "title": "Modern Apartment",
      "location": "San Francisco, CA",
      "price": 4200,
      "details": "Pellentesque habitant morbi tristique senectus et netus et malesuada.",
      "bedrooms": 2,
      "bathrooms": 1,
      "squareft": 950,
      "type": "rent",
      "phone": "+212 612345679"
    },
    {
      "user_id": "bjgaLBDJVLSDsCqsZyP3oHjNNxv2",
      "img": "rent3.jpg",
      "title": "Cozy Cottage",
      "location": "Austin, TX",
      "price": 2500,
      "details": "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "bedrooms": 2,
      "bathrooms": 2,
      "squareft": 1100,
      "type": "rent",
      "phone": "+212 612345680"
    },
    {
      "user_id": "bjgaLBDJVLSDsCqsZyP3oHjNNxv2",
      "img": "rent4.jpg",
      "title": "Luxurious Villa",
      "location": "Miami, FL",
      "price": 6000,
      "details": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.",
      "bedrooms": 4,
      "bathrooms": 3,
      "squareft": 3000,
      "type": "rent",
      "phone": "+212 612345681"
    },
    {
      "user_id": "bjgaLBDJVLSDsCqsZyP3oHjNNxv2",
      "img": "rent5.jpg",
      "title": "Charming Bungalow",
      "location": "Denver, CO",
      "price": 2800,
      "details": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
      "bedrooms": 3,
      "bathrooms": 2,
      "squareft": 1400,
      "type": "rent",
      "phone": "+212 612345682"
    },
    {
      "user_id": "bjgaLBDJVLSDsCqsZyP3oHjNNxv2",
      "img": "rent6.jpg",
      "title": "Downtown Loft",
      "location": "Chicago, IL",
      "price": 3700,
      "details": "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.",
      "bedrooms": 1,
      "bathrooms": 1,
      "squareft": 800,
      "type": "rent",
      "phone": "+212 612345683"
    },
    {
      "user_id": "bjgaLBDJVLSDsCqsZyP3oHjNNxv2",
      "img": "rent7.jpg",
      "title": "Country House",
      "location": "Nashville, TN",
      "price": 3200,
      "details": "Mollit anim id est laborum, id est laborum sint occeacat officia elito",
      "bedrooms": 3,
      "bathrooms": 2,
      "squareft": 1600,
      "type": "rent",
      "phone": "+212 612345684"
    },
    {
      "user_id": "bjgaLBDJVLSDsCqsZyP3oHjNNxv2",
      "img": "rent8.jpg",
      "title": "Beachfront Condo",
      "location": "Los Angeles, CA",
      "price": 4500,
      "details": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "bedrooms": 2,
      "bathrooms": 2,
      "squareft": 1200,
      "type": "rent",
      "phone": "+212 612345685"
    },
    {
      "user_id": "bjgaLBDJVLSDsCqsZyP3oHjNNxv2",
      "img": "rent9.jpg",
      "title": "Urban Flat",
      "location": "Seattle, WA",
      "price": 3300,
      "details": "Pellentesque habitant morbi tristique senectus et netus et malesuada.",
      "bedrooms": 2,
      "bathrooms": 1,
      "squareft": 900,
      "type": "rent",
      "phone": "+212 612345686"
    },
    {
      "user_id": "bjgaLBDJVLSDsCqsZyP3oHjNNxv2",
      "img": "rent10.jpg",
      "title": "Suburban Retreat",
      "location": "Portland, OR",
      "price": 3100,
      "details": "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "bedrooms": 3,
      "bathrooms": 2,
      "squareft": 1700,
      "type": "rent",
      "phone": "+212 612345687"
    },
    {
      "user_id": "bjgaLBDJVLSDsCqsZyP3oHjNNxv2",
      "img": "rent11.jpg",
      "title": "Luxury Penthouse",
      "location": "Boston, MA",
      "price": 7000,
      "details": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.",
      "bedrooms": 4,
      "bathrooms": 3,
      "squareft": 3500,
      "type": "rent",
      "phone": "+212 612345688"
    },
    {
      "user_id": "bjgaLBDJVLSDsCqsZyP3oHjNNxv2",
      "img": "rent12.jpg",
      "title": "Historic Home",
      "location": "Philadelphia, PA",
      "price": 2900,
      "details": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
      "bedrooms": 3,
      "bathrooms": 2,
      "squareft": 1450,
      "type": "rent",
      "phone": "+212 612345689"
    },
    {
      "user_id": "bjgaLBDJVLSDsCqsZyP3oHjNNxv2",
      "img": "rent13.jpg",
      "title": "City Studio",
      "location": "Washington, DC",
      "price": 2600,
      "details": "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.",
      "bedrooms": 1,
      "bathrooms": 1,
      "squareft": 650,
      "type": "rent",
      "phone": "+212 612345690"
    },
    {
      "user_id": "bjgaLBDJVLSDsCqsZyP3oHjNNxv2",
      "img": "rent14.jpg",
      "title": "Rustic Cabin",
      "location": "Salt Lake City, UT",
      "price": 2300,
      "details": "Mollit anim id est laborum, id est laborum sint occeacat officia elito",
      "bedrooms": 2,
      "bathrooms": 1,
      "squareft": 900,
      "type": "rent",
      "phone": "+212 612345691"
    },
    {
      "user_id": "bjgaLBDJVLSDsCqsZyP3oHjNNxv2",
      "img": "rent15.jpg",
      "title": "Contemporary Duplex",
      "location": "Dallas, TX",
      "price": 3400,
      "details": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "bedrooms": 3,
      "bathrooms": 2,
      "squareft": 1550,
      "type": "rent",
      "phone": "+212 612345692"
    },
    {
      "user_id": "bjgaLBDJVLSDsCqsZyP3oHjNNxv2",
      "img": "sale1.jpg",
      "title": "Modern Family Home",
      "location": "San Francisco, CA",
      "price": 1250000,
      "details": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "bedrooms": 4,
      "bathrooms": 3,
      "squareft": 2000,
      "type": "sale",
      "phone": "+212 612345693"
    },
    {
      "user_id": "bjgaLBDJVLSDsCqsZyP3oHjNNxv2",
      "img": "sale2.jpg",
      "title": "Luxury Penthouse",
      "location": "New York, NY",
      "price": 2500000,
      "details": "Pellentesque habitant morbi tristique senectus et netus et malesuada.",
      "bedrooms": 3,
      "bathrooms": 3,
      "squareft": 1800,
      "type": "sale",
      "phone": "+212 612345694"
    },
    {
      "user_id": "bjgaLBDJVLSDsCqsZyP3oHjNNxv2",
      "img": "sale3.jpg",
      "title": "Cozy Cottage",
      "location": "Portland, OR",
      "price": 650000,
      "details": "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "bedrooms": 2,
      "bathrooms": 1,
      "squareft": 1200,
      "type": "sale",
      "phone": "+212 612345695"
    },
    {
      "user_id": "bjgaLBDJVLSDsCqsZyP3oHjNNxv2",
      "img": "sale4.jpg",
      "title": "Beachfront Villa",
      "location": "Miami, FL",
      "price": 3200000,
      "details": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.",
      "bedrooms": 5,
      "bathrooms": 4,
      "squareft": 3500,
      "type": "sale",
      "phone": "+212 612345696"
    },
    {
      "user_id": "bjgaLBDJVLSDsCqsZyP3oHjNNxv2",
      "img": "sale5.jpg",
      "title": "Historic Mansion",
      "location": "Savannah, GA",
      "price": 1500000,
      "details": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
      "bedrooms": 6,
      "bathrooms": 5,
      "squareft": 4000,
      "type": "sale",
      "phone": "+212 612345697"
    },
    {
      "user_id": "bjgaLBDJVLSDsCqsZyP3oHjNNxv2",
      "img": "sale6.jpg",
      "title": "Country Estate",
      "location": "Nashville, TN",
      "price": 1200000,
      "details": "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.",
      "bedrooms": 4,
      "bathrooms": 3,
      "squareft": 2500,
      "type": "sale",
      "phone": "+212 612345698"
    },
    {
      "user_id": "bjgaLBDJVLSDsCqsZyP3oHjNNxv2",
      "img": "sale7.jpg",
      "title": "Charming Bungalow",
      "location": "Denver, CO",
      "price": 850000,
      "details": "Mollit anim id est laborum, id est laborum sint occeacat officia elito",
      "bedrooms": 3,
      "bathrooms": 2,
      "squareft": 1500,
      "type": "sale",
      "phone": "+212 612345699"
    },
    {
      "user_id": "bjgaLBDJVLSDsCqsZyP3oHjNNxv2",
      "img": "sale8.jpg",
      "title": "Urban Loft",
      "location": "Chicago, IL",
      "price": 950000,
      "details": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "bedrooms": 2,
      "bathrooms": 2,
      "squareft": 1300,
      "type": "sale",
      "phone": "+212 612345700"
    },
    {
      "user_id": "bjgaLBDJVLSDsCqsZyP3oHjNNxv2",
      "img": "sale9.jpg",
      "title": "Rustic Cabin",
      "location": "Salt Lake City, UT",
      "price": 550000,
      "details": "Pellentesque habitant morbi tristique senectus et netus et malesuada.",
      "bedrooms": 2,
      "bathrooms": 1,
      "squareft": 1100,
      "type": "sale",
      "phone": "+212 612345701"
    },
    {
      "user_id": "bjgaLBDJVLSDsCqsZyP3oHjNNxv2",
      "img": "sale10.jpg",
      "title": "Elegant Townhouse",
      "location": "Charlotte, NC",
      "price": 780000,
      "details": "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "bedrooms": 3,
      "bathrooms": 2,
      "squareft": 1600,
      "type": "sale",
      "phone": "+212 612345702"
    },
    {
      "user_id": "bjgaLBDJVLSDsCqsZyP3oHjNNxv2",
      "img": "sale11.jpg",
      "title": "Seaside Condo",
      "location": "Los Angeles, CA",
      "price": 1400000,
      "details": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.",
      "bedrooms": 3,
      "bathrooms": 2,
      "squareft": 1700,
      "type": "sale",
      "phone": "+212 612345703"
    },
    {
      "user_id": "bjgaLBDJVLSDsCqsZyP3oHjNNxv2",
      "img": "sale12.jpg",
      "title": "Grand Estate",
      "location": "Houston, TX",
      "price": 2200000,
      "details": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
      "bedrooms": 5,
      "bathrooms": 4,
      "squareft": 4500,
      "type": "sale",
      "phone": "+212 612345704"
    }
  ];

  const handleInsertJsonData = async (e) => {
    e.preventDefault();
    try {
      for (const item of dataa) {
        await addDoc(housesCollectionRef, item);
      }
      console.log("Documents successfully written!");
    } catch (error) {
      console.error("Error writing documents: ", error);
    }
  };

  return (
    <>
      <button onClick={() => setOpenModal(true)}>Add property</button>

      <Modal show={openModal} onClose={() => setOpenModal(false)} size="lg">
        <Modal.Body>

          <form onClick={handleInsertJsonData} className="max-w-md mx-auto">
            <div className="relative z-0 w-full mb-5 group">
              <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " />
              <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Titre</label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <textarea value={details} onChange={(e) => setDetails(e.target.value)} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " ></textarea>
              <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Description</label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input value={location} onChange={(e) => setLocation(e.target.value)} type="text" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " />
              <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Localisation</label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <label className="block mb-2 text-sm font-medium text-gray-500 dark:text-white" htmlFor="file_input">Image</label>
              <input onChange={handleImageUpload} className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file" />
            </div>

            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative z-0 w-full mb-5 group">
                <input value={price} onChange={(e) => setPrice(e.target.value)} type="text" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " />
                <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Prix</label>
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <select value={type} onChange={(e) => setType(e.target.value)} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" ">
                  <option value="sale">À Vendre</option>
                  <option value="rent">À Louer</option>
                </select>
                <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Type</label>
              </div>
            </div>
            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative z-0 w-full mb-5 group">
                <input value={phone} onChange={(e) => setPhone(e.target.value)} type="tel" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " />
                <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Téléphone</label>
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <input value={squareft} onChange={(e) => setSquareft(e.target.value)} type="number" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " />
                <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Square Ft</label>
              </div>
            </div>
            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative z-0 w-full mb-5 group">
                <input value={bedrooms} onChange={(e) => setBedrooms(e.target.value)} type="number" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " />
                <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Bedrooms</label>
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <input value={bathrooms} onChange={(e) => setBathrooms(e.target.value)} type="number" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " />
                <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Bathrooms</label>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              <button type="submit" className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Submit</button>
              <button onClick={() => setOpenModal(false)} className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Cancel</button>
            </div>
          </form>

        </Modal.Body>
      </Modal>
    </>
  )
}