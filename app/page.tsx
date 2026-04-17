"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function Home() {
  const { register, handleSubmit, reset } = useForm();

  const [day, setDay] = useState("Lundi");
  const [hourSelected, setHourSelected] = useState("7h");
  const [minute, setMinute] = useState("00");

  const [dispos, setDispos] = useState<
    { day: string; hour: string }[]
  >([]);

  const addDispo = () => {
    setDispos([
      ...dispos,
      { day, hour: `${hourSelected}:${minute}` },
    ]);
  };

  const onSubmit = async (data: any) => {
    await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify({
        ...data,
        dispos,
      }),
    });
    reset();        //  vide le formulaire
    setDispos([]);  //  vide les disponibilités

    alert("Message envoyé !");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="relative w-screen h-screen overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[url('/salon.png')] bg-cover bg-center scale-105"></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Content */}
      <div className="relative z-10 flex items-start justify-center w-full h-full px-10 pt-24">
        <div className="w-full max-w-7xl p-8 md:p-12">

          <h1 className="text-white text-4xl font-semibold mb-10 tracking-wide">
            CONTACTEZ L'AGENCE
          </h1>

          <div className="grid md:grid-cols-2 gap-20">

            {/* GAUCHE */}
            <div>
              <h2 className="text-white text-base font-bold mb-6 uppercase tracking-widest">
                VOS COORDONNÉES
              </h2>

              {/* Civilité */}
              <div className="flex gap-8 mb-6">
                <label className="flex items-center gap-3 text-white">
                  <input {...register("civility")} type="radio" value="Mme" className="accent-white" />
                  Mme
                </label>
                <label className="flex items-center gap-3 text-white">
                  <input {...register("civility")} type="radio" value="M" className="accent-white" />
                  M
                </label>
              </div>

              {/* Nom / Prénom */}
              <div className="flex gap-4 mb-4">
                <input {...register("lastname")} placeholder="Nom" className="w-1/2 px-5 py-3 rounded-full bg-white text-gray-500" />
                <input {...register("firstname")} placeholder="Prénom" className="w-1/2 px-5 py-3 rounded-full bg-white text-gray-500" />
              </div>

              <input {...register("email")} placeholder="Adresse mail" className="w-full px-5 py-3 mb-4 rounded-full bg-white text-gray-500" />
              <input {...register("phone")} placeholder="Téléphone" className="w-full px-5 py-3 mb-8 rounded-full bg-white text-gray-500" />

              <p className="text-white text-base font-bold mb-4 uppercase tracking-widest">
                DISPONIBILITÉS POUR UNE VISITE
              </p>

              {/* SELECTS */}
              <div className="flex gap-3 mb-4 relative z-20">

                {/* JOUR */}
                <div className="relative">
                  <select onChange={(e) => setDay(e.target.value)} className="appearance-none bg-white px-4 py-2 pr-8 rounded-full text-gray-400">
                    {["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi"].map((d) => (
                      <option key={d}>{d}</option>
                    ))}
                  </select>
                  <span className="absolute right-3 top-2 text-gray-600">▾</span>
                </div>

                {/* HEURE */}
                <div className="relative">
                  <select onChange={(e) => setHourSelected(e.target.value)} className="appearance-none bg-white px-4 py-2 pr-8 rounded-full text-gray-400">
                    {Array.from({ length: 12 }, (_, i) => 7 + i).map((h) => (
                      <option key={h}>{h}h</option>
                    ))}
                  </select>
                  <span className="absolute right-3 top-2 text-gray-600">▾</span>
                </div>

                {/* MINUTES */}
                <div className="relative">
                  <select onChange={(e) => setMinute(e.target.value)} className="appearance-none bg-white px-4 py-2 pr-8 rounded-full text-gray-400">
                    {["00", "15", "30", "45"].map((m) => (
                      <option key={m}>{m}</option>
                    ))}
                  </select>
                  <span className="absolute right-3 top-2 text-gray-600">▾</span>
                </div>

                {/* BOUTON */}
                <button
                  type="button"
                  onClick={addDispo}
                  className="bg-gradient-to-b from-purple-500 to-purple-800 text-white text-[11px] font-semibold px-6 py-4 rounded-full flex flex-col items-center justify-center leading-tight shadow-lg"
                >
                  <span>AJOUTER</span>
                  <span>DISPO</span>
                </button>
              </div>

              {/* LISTE DISPOS */}
              <div className="flex flex-col gap-2 mt-2">
                {dispos.map((d, index) => (
                  <div key={index} className="flex items-center justify-between bg-white/80 px-4 py-2 rounded-full w-[200px] text-gray-600 text-sm">
                    <span>{d.day} à {d.hour}</span>
                    <button type="button" onClick={() => setDispos(dispos.filter((_, i) => i !== index))}>
                      ×
                    </button>
                  </div>
                ))}
              </div>

            </div>

            {/* DROITE */}
            <div className="flex flex-col h-[400px]">
              <h2 className="text-white text-base font-bold mb-6 uppercase tracking-widest">
                VOTRE MESSAGE
              </h2>

              <div className="flex gap-5 mb-4">
                {["Demande de visite", "Être rappelé.e", "Plus de photos"].map((label, i) => (
                  <label key={i} className="flex items-center gap-2 text-white">
                    <input {...register("type")} type="radio" value={label} className="accent-white" />
                    {label}
                  </label>
                ))}
              </div>

              <textarea {...register("message")} placeholder="Votre message" className="w-full p-4 rounded-[30px] bg-white text-gray-500 h-[170px]" />

              <div className="mt-auto flex justify-end">
                <button type="submit" className="bg-[#f6b24a] hover:bg-[#e6a43f] text-white font-semibold py-3 px-28 rounded-full text-lg shadow-lg">
                  ENVOYER
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </form>
  );
}