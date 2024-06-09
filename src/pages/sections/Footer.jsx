import { HomeIcon } from "@heroicons/react/24/solid";

export default function Footer() {
  return (
    <footer className="" id="footer">
      <div className="mx-auto grid max-w-screen-xl gap-y-8 gap-x-12 px-4 py-10 sm:px-20 md:grid-cols-2 xl:grid-cols-4 xl:px-10">

        <div className="max-w-sm">
          <div className="mb-6 flex h-10 items-center space-x-2">
            <HomeIcon className="h-8 text-green-600 w-auto object-contain" />
            <span className="font-semibold mt-1 text-3xl">Reside</span>
          </div>
          <div className="text-gray-500">
            Reside est site immobilier à proposer des annonces de location et de vente immobilières. Vous trouverez sur Reside de nombreuses annonces.
          </div>
        </div>

        <div className=""></div>

        <div className="">
          <div className="mt-4 mb-2 font-medium xl:mb-4">Liens</div>
          <nav aria-label="Footer Navigation" className="text-gray-500">
            <ul className="space-y-3">
              <li><a className="hover:text-green-600" href="#hero">Home</a></li>
              <li><a className="hover:text-green-600" href="#about">À propos de nous</a></li>
              <li><a className="hover:text-green-600" href="#property">Propriétés</a></li>
            </ul>
          </nav>
        </div>

        <div className="">
          <div className="mt-4 mb-2 font-medium xl:mb-4">Contactez nous</div>
          <nav aria-label="Guides Navigation" className="text-gray-500">
            <ul className="space-y-3">
              <li className="cursor-pointer hover:text-green-600">@zrimobc</li>
              <li className="cursor-pointer hover:text-green-600">+212 0709326488</li>
              <li className="cursor-pointer hover:text-green-600">contact@zrimob.com</li>
            </ul>
          </nav>
        </div>

      </div>
      <div className="border-t">
        <div className="mx-auto flex max-w-screen-xl flex-col gap-y-4 px-4 py-3 text-center text-gray-500 sm:px-20 lg:flex-row lg:justify-between lg:text-left xl:px-10">
          <p className="">© 2024 zrimob | Tous droits réservés</p>
          <a className="" href="#_">Politique de confidentialité | Conditions d'utilisation</a>
        </div>
      </div>
    </footer>

  )
}