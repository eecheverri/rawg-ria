import axios from "axios";
import { gameDetailsUrl } from "../api";

export const loadDetail = (id) => async (dispatch) => {
  dispatch({
    type: "CARGANDO_DETALLES",
  });

  const detailData = await axios.get(gameDetailsUrl(id));

  dispatch({
    type: "OBTENER_DETALLES",
    payload: {
      game: detailData.data,
    },
  });
};
