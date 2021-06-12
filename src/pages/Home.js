import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../actions/gamesAction";
import Juego from "../components/Juego";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import styled from "styled-components";
import DetallesJuego from "../components/DetallesJuego";
import { useLocation } from "react-router-dom";
import { fadeIn } from "../animation";
const Home = () => {
  // Get current location
  const location = useLocation();
  const path = location.pathname.split("/")[2];

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);

  const { popular, upcoming, searched } = useSelector(
    (state) => state.games
  );

  return (
    <ListasDeJuegos variants={fadeIn} initial="hidden" animate="show">
      <AnimateSharedLayout>
        <AnimatePresence>
          {path && <DetallesJuego pathId={path} />}
        </AnimatePresence>

        {searched.length ? (
          <div className="searched">
            
            <h2>Resultado de la busqueda...</h2>
            <Juegos>
              {searched.map((juego) => (
                <Juego
                  name={juego.name}
                  released={juego.released}
                  id={juego.id}
                  key={juego.id}
                  image={juego.background_image}
                />
              ))}
            </Juegos>
          </div>
        ) : (
          ""
        )}

        <h2>Mejor valorados...</h2>
        <Juegos>
          {popular.map((juego) => (
            <Juego
              name={juego.name}
              released={juego.released}
              id={juego.id}
              key={juego.id}
              image={juego.background_image}
            />
          ))}
        </Juegos> 

        <h2>Proximos lanzamientos...</h2>
        <Juegos>
          {upcoming.map((juego) => (
            <Juego
              name={juego.name}
              released={juego.released}
              id={juego.id}
              key={juego.id}
              image={juego.background_image}
            />
          ))}
        </Juegos>
      </AnimateSharedLayout>
    </ListasDeJuegos>
  );
};

const ListasDeJuegos = styled(motion.div)`
  padding: 0rem 5rem;
  h2 {
    padding: 1rem;
  }
`;
const Juegos = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
`;

export default Home;
