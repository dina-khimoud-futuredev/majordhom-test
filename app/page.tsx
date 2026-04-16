"use client";

import React from "react";

export default function Home() {
  return (
    <div className="relative w-screen h-screen overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 bg-[url('/salon.png')] bg-cover bg-center scale-105"></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/15"></div>

      {/* Content */}
      <div className="relative z-10 flex items-start justify-center w-full h-full px-10 pt-24">
        <div className="w-full max-w-7xl rounded-[40px] p-8 md:p-12">

          <h1 className="text-white text-4xl font-semibold mb-10 tracking-wide">
            CONTACTEZ L'AGENCE
          </h1>
          <div className="grid md:grid-cols-2 gap-20">

            {/* GAUCHE */}
            <div>
              <h2 className="text-white text-base font-bold mb-6 uppercase tracking-widest">
                VOS COORDONNÉES
              </h2>
              <div className="flex gap-8 mb-6">
                <label className="flex items-center gap-3 text-white">
                  <input type="radio" name="civility" className="accent-white" />
                  Mme
                </label>
                <label className="flex items-center gap-3 text-white">
                  <input type="radio" name="civility" className="accent-white" />
                  M
                </label>
              </div>

              <div className="flex gap-4 mb-4">
                <input placeholder="Nom" className="w-1/2 px-5 py-3 rounded-full bg-white text-gray-500" />
                <input placeholder="Prénom" className="w-1/2 px-5 py-3 rounded-full bg-white text-gray-500" />
              </div>

              <input placeholder="Adresse mail" className="w-full px-5 py-3 mb-4 rounded-full bg-white text-gray-500" />
              <input placeholder="Téléphone" className="w-full px-5 py-3 mb-8 rounded-full bg-white text-gray-500" />

              <p className="text-white text-base font-bold mb-4 uppercase tracking-widest">
                DISPONIBILITÉS POUR UNE VISITE
              </p>
              <div className="flex gap-3 mb-4">
                {/* SELECT 1 */}
                <div className="relative">
                  <select className="appearance-none bg-white px-4 py-2 pr-8 rounded-full text-gray-400">
                    <option>Lundi</option>
                  </select>
                  <span className="absolute right-3 top-2 text-gray-600 text-base">
                    ▾
                  </span>
                </div>

                {/* SELECT 2 */}
                <div className="relative">
                  <select className="appearance-none bg-white px-4 py-2 pr-8 rounded-full text-gray-400">
                    <option>7h</option>
                  </select>
                  <span className="absolute right-3 top-2 text-gray-600 text-base">
                    ▾
                  </span>
                </div>

                {/* SELECT 3 */}
                <div className="relative">
                  <select className="appearance-none bg-white px-4 py-2 pr-8 rounded-full text-gray-400">
                    <option>0m</option>
                  </select>
                  <span className="absolute right-3 top-2 text-gray-600 text-base">
                    ▾
                  </span>
                </div>


                <button className="bg-purple-700 hover:bg-purple-800 text-white text-[11px] font-semibold px-6 py-2 rounded-full flex flex-col items-center justify-center leading-tight">
                  <span>AJOUTER</span>
                  <span>DISPO</span>
                </button>
              </div>

            </div>

            {/* DROITE */}
            <div className="flex flex-col">
              <h2 className="text-white text-base font-bold mb-6 uppercase tracking-widest">
                VOTRE MESSAGE
              </h2>

              <div className="flex gap-5 mb-6">
                {["Demande de visite", "Être rappelé.e", "Plus de photos"].map((label, i) => (
                  <label key={i} className="flex items-center gap-2 text-white">
                    <input type="radio" name="type" className="accent-white" />
                    {label}
                  </label>
                ))}
              </div>

              <textarea
                placeholder="Votre message"
                className="w-full p-4 rounded-[30px] bg-white text-gray-500 h-[170px]"
              />

              <div className="mt-auto flex justify-end pr-4">
                <button className="bg-orange-400 hover:bg-orange-500 text-white font-semibold py-3 px-28 rounded-full text-lg shadow-lg">
                  ENVOYER
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}