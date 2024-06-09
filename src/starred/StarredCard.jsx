import { PhoneIcon } from "@heroicons/react/24/solid";
import StarBtn from "../elements/StarBtn";

export default function StarredCard({ item, onRefresh }) {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 pb-8 md:px-8">
      <div className="grid grid-cols-12 gap-y-11 max-md:bg-gray-100 max-md:p-1 max-md:rounded-3xl">
        <div
          className="md:bg-gray-100 col-span-12 lg:col-span-7 py-12 px-4 lg:px-11 max-lg:rounded-2xl lg:rounded-l-2xl flex flex-col justify-between max-lg:max-w-lg max-lg:mx-auto">
          <h2 className="font-manrope font-bold text-2xl sm:text-4xl leading-10 text-[#44275F] mb-1">
            {item.title}
          </h2>
          <h2 className="font-manrope font-bold text-xl sm:text-2xl leading-10 text-green-500 mb-9">
            {item.price} MAD
          </h2>
          <div className="flex flex-col max-md:rounded-3xl rounded-full min-[550px]:flex-row max-[550px]:gap-4 min-[550px]:items-center py-4 pr-3 lg:pr-10 pl-3 lg:pl-6 bg-white mb-14 w-full xl:w-[calc(100%-45px)]">
            <div className="flex items-center gap-4 pr-4 max-[550px]:pl-4 min-[550px]:border-r border-gray-200 ">
              <span className="flex justify-center items-center rounded-full h-12 w-12 bg-green-100 text-green-500 text-lg font-semibold transition-all duration-500 hover:bg-green-200">
                {item.bedrooms}
              </span>
              <p className="text-sm text-[#44275F] font-bold">Chambres</p>
            </div>
            <div className="flex items-center gap-4 px-4 min-[550px]:border-r border-gray-200 ">
              <span className="flex justify-center items-center rounded-full h-12 w-12 bg-green-100 text-green-500 text-lg font-semibold transition-all duration-500 hover:bg-green-200">
                {item.bathrooms}
              </span>
              <p className="text-sm text-[#44275F] font-bold">Salles de Bains</p>
            </div>
            <div className="flex items-center gap-4 pl-4  ">
              <span className="flex justify-center items-center rounded-full h-12 w-12 bg-green-100 text-green-500 text-lg font-semibold transition-all duration-500 hover:bg-green-200">
                {item.squareft}
              </span>
              <p className="text-sm text-[#44275F] font-bold">Pieds Carrés</p>
            </div>
          </div>

          <p className="text-sm text-[#44275F] font-bold mb-2">
            Voici le numéro de téléphone du propriétaire où vous pourrez obtenir<br />plus d'informations :
          </p>
          <div className="flex justify-between items-center">
            <button className="flex items-center rounded-full py-3 px-5 min-[550px]:w-max w-full justify-center shadow-sm shadow-transparent bg-green-500 transition-all duration-500 hover:shadow-green-400 hover:bg-green-700">
              <PhoneIcon className="h-6 w-auto text-white" />
              <span className="px-2 font-semibold text-base text-white">{item.phone}</span>
            </button>
            <div onClick={onRefresh} role="button" tabIndex="0">
              <StarBtn type="starred" house_id={item.id} />
            </div>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-5 lg:max-w-md max-lg:mx-auto ">
          <img src={`${process.env.PUBLIC_URL}/images/${item.img}`} alt="house" className="w-full h-full rounded-r-2xl max-lg:rounded-3xl" />
        </div>
      </div>
    </div>
  )
}