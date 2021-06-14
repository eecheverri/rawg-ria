import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { smallImage } from "../util";
import { useHistory } from "react-router-dom";
import star from "../img/star-full.png";
import starEmpty from "../img/star-empty.png";

const DetallesJuego = ({ pathId }) => {
  const { game, isLoading } = useSelector((state) => state.detail);
  const history = useHistory();

  const exitDetailHandler = (e) => {
    const element = e.target;
    if (element.classList.contains("shadow")) {
      document.body.style.overflow = "auto";
      history.push("/");
    }
  };

  const getStars = () => {
    const stars = [];
    const rating = Math.floor(game.rating);
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<img alt="star" key={i} src={star}></img>);
      } else {
        stars.push(<img alt="star" key={i} src={starEmpty}></img>);
      }
    }
    return stars;
  };

  return (
    <>
      {!isLoading && (
        <Card className="shadow" onClick={exitDetailHandler}>
          <Detalles layoutId={pathId}>
            
            <Rating>
              <motion.h1>{game.name}</motion.h1>              
              <div className="rating">                
                {getStars()}
                <small  style={{display: "block"}}>Rating: {game.rating}</small>              
              </div>              
            </Rating>
            <Imagen>
              <motion.img
                layoutId={`image${pathId}`}
                src={smallImage(game.background_image, 1280)}
                alt={game.name}
              />
            </Imagen>
            <motion.h2>Sobre el juego</motion.h2>
            <Descripcion>
              <p>{game.description_raw}</p>
            </Descripcion>
          </Detalles>
        </Card>
      )}
    </>
  );
};

const Card = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
  scrollbar-color: #ec2f4b transparent;
`;

const Detalles = styled(motion.div)`
  width: 80%;
  border-radius: 1rem;
  padding: 2rem 5rem;
  background: white;
  position: absolute;
  left: 10%;
  color: black;
  overflow: hidden;
  z-index: 10;
  img {
    width: 100%;
  }
  h2 {
    color: #131112;
  }
`;

const Rating = styled(motion.div)`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
  img {
    height: 2rem;
    width: 2rem;
    display: inline;
  }
`;

const Imagen = styled(motion.div)`
  margin-top: 3rem;
  img {
    width: 100%;
  }
`;

const Descripcion = styled(motion.div)`
  margin: 1rem 0rem;
`;

export default DetallesJuego;
