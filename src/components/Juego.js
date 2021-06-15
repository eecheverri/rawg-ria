import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { loadDetail } from "../actions/detailAction";
import { Link } from "react-router-dom";
import { smallImage } from "../util";
import { popup } from "../animation";

const Juego = ({ name, image, released, id }) => {
  const dispatch = useDispatch();
  const stringPathId = id.toString();

  const loadDetailHandler = () => {
    document.body.style.overflow = "hidden";
    dispatch(loadDetail(id));
  };
  return (
    <JuegoDiv
      variants={popup}
      initial="hidden"
      animate="show"
      layoutId={stringPathId}
      onClick={loadDetailHandler}
    >
      <Link to={`/game/${id}`}>

        <motion.h3>{name}</motion.h3>
        <p>Lanzamiento: {released}</p>

        <motion.img
          layoutId={`image${stringPathId}`}
          src={smallImage(image, 640)}
          alt={name}
        />
      </Link>
    </JuegoDiv>
  );
};

const JuegoDiv = styled(motion.div)`
  min-height: 40vh;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.3);
  text-align: center;
  border-radius: .7rem;
  overflow: hidden;
  cursor: pointer;
  p{
    color: #000;
    font-weight: bold;
  }
  img {
    width: 100%;
    min-height: 80%;
    height: 40vh;
    object-fit: cover;
  }
  background-color: #6564DB;
  h3 {
    font-size: 1.8rem;
    color: #white;
  }
`;

export default Juego;
