import { NotFoundImg } from "../assets/images";
import Nav from "../properties/Nav";

export default function NotFound() {
  return (
    <section>
    <Nav/>
    <div className="bg-white flex items-center justify-center py-20">
        <div className="grid grid-cols-2">
          <div className="col-span-1 flex justify-center items-center">
            <div>
            <h1 className="text-6xl font-bold text-green-500 mb-6">Page non trouvée</h1>
            <p className="text-black text-lg">Nous sommes désolés, la page que vous recherchez n'existe pas.</p>
            <p className="text-black text-lg flex flex-1">Vous pouvez revenir à la<a href="/" className="ml-1 text-green-500 underline"> page d'accueil.</a></p>
            </div>
          </div>
            <img src={NotFoundImg} alt="Not Found" className="col-span-1 mx-auto w-[70%] h-auto mb-4"/>
        </div>
    </div>
    </section>
    
  )
}