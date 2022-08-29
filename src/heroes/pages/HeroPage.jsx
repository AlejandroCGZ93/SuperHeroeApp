import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useHeroes } from "../../hooks/useHeroes";

export const HeroesPage = () => {
  const { heroId } = useParams();
  const { isLoading, getHeroById } = useHeroes();
  const hero = getHeroById(parseInt(heroId));

  const navigate = useNavigate();
  const onNavigateBack = () => {
    navigate(-1);
  };

  return (
    <>
      {!isLoading && (
        <div className="row nt-5">
          <div className="col-5 animate__animated animate__fadeInLeft">
            <img
              src={hero.images.lg}
              alt={hero.name}
              className="img-thumbnail"
            />
          </div>
          <div className="col-7">
            <h1 className="h1">{hero.name}</h1>
            <h5 className="d-grid justify-content-flex-start justify-items gap-2">
              <ul value={hero.powerstats.intelligence}><b>  Inteligencia:</b>{" "}
              {hero.powerstats.intelligence}
              </ul>
              <ul  value={hero.powerstats.strength}><b>Fuerza:</b>{" "} 
              {hero.powerstats.strength}
                  
              </ul>
              <ul value={hero.powerstats.speed}><b>Velocidad:</b>{" "}
                    {hero.powerstats.speed}
                 </ul>
              <ul value={hero.powerstats.durability}><b>Resistencia:</b>{" "}
 
                    {hero.powerstats.durability}
                  
              </ul>
              <ul value={hero.powerstats.power}><b>Poder:</b>{" "}
                    {hero.powerstats.power}
              </ul>
              <ul value={hero.powerstats.combat}><b>Combate:</b>{" "}
                    {hero.powerstats.combat}
            </ul>
            </h5>
            <ul className="list-group list-group-flush p-2">
              <b>Alter ego: </b>
              {hero.biography.alterEgos}
            </ul>
            <ul className="list-group list-group-flush p-2">
              <b>Editorial: </b>
              {hero.biography.publisher}
            </ul>
            <ul className="list-group list-group-flush p-2">
              <b>Primera aparición: </b>
              {hero.biography.firstAppearance}
            </ul>
            <p>{hero.characters}</p>
            <button
              className="btn btn-outline-dark m-2"
              onClick={onNavigateBack}
            >
              Volver...
            </button>
          </div>
        </div>
      )}
    </>
  );
};