import { Route, Routes } from "react-router-dom";

import { Inicio } from "../../componentes/contenedor/Inicio";
import { AcercaDe } from "../../componentes/contenedor/Acerca De";

import { PeliculaCrear } from "../../componentes/peliculas/PeliculaCrear";
import { PeliculaListar } from "../../componentes/peliculas/PeliculaListar";
import { PeliculaAdmin } from "../../componentes/peliculas/PeliculaAdmin";

export const Ruteo = () => {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/acer" element={<AcercaDe />} />

      <Route path="/pelicre" element={<PeliculaCrear />} />
      <Route path="/pelilis" element={<PeliculaListar />} />
      <Route path="/pelidm" element={<PeliculaAdmin />} />

      
    </Routes>
  );
};
