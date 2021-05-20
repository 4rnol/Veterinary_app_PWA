import React from "react";

const infoVeterinario = (props) => {
  return (
    <div class="seccion-perfil-usuario">
    <div class="perfil-usuario-header">
        <div class="perfil-usuario-portada">
            <div class="perfil-usuario-avatar">
                <img src="../../assets/perrit.png" alt="img-avatar"></img>
            </div>
        </div>
    </div>
    <div class="perfil-usuario-body">
        <div class="perfil-usuario-bio">
            <h3 class="titulo">tito lara</h3>
            <p class="texto">cuidado y lavado de perritos .</p>
        </div>
        <div class="perfil-usuario-footer">
            <ul class="lista-datos">
                <li> Direccion:</li>
                <p class="texto">cochabamba</p>
                <li>Veterinaria:</li>
                <p class="texto">juanita</p>
                <li> Telefono:</li>
                <p class="texto">70765163</p>
               
            </ul>
        </div>
    </div>
</div>
  );
};

export default infoVeterinario;