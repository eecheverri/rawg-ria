const initialState = {
  game: { platforms: [] },
  screen: { results: [] },
  isLoading: true,
};

const detailReducer = (state = initialState, action) => {
  switch (action.type) {
    case "OBTENER_DETALLES":
      return {
        ...state,
        game: action.payload.game,
        isLoading: false,
      };
    case "CARGANDO_DETALLES":
      return {
        ...state,
        isLoading: true,
      };
    default:
      return { ...state };
  }
};

export default detailReducer;
