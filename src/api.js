require('dotenv').config()
// BASE URL
const base_url = "https://api.rawg.io/api/";

//Obtener mes
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};

//Obtener dia
const getCurrentDay = () => {
  const day = new Date().getDate();
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};

console.log(getCurrentDay());


//Obtener fechas para usar en la API
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

console.log(lastYear);
console.log(nextYear);
console.log(currentDate);
console.log(process.env.REACT_APP_API_KEY);

//Mas populares - ordena por rate juegos del ultimo año
const popular_games = `games?key=${process.env.REACT_APP_API_KEY}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=9`;

//Proximos - Fecha actual en adelante 1 año
const upcoming_games = `games?key=${process.env.REACT_APP_API_KEY}&dates=${currentDate},${nextYear}&ordering=-added&page_size=9`;

//Nuevos - 1 año para atras ordenado por fecha
const new_games = `games?key=${process.env.REACT_APP_API_KEY}&dates=${lastYear},${currentDate}&ordering=-released&page_size=9`;

export const popularGamesUrl = () => `${base_url}${popular_games}`;

export const upcomingGamesUrl = () => `${base_url}${upcoming_games}`;

export const newGamesUrl = () => `${base_url}${new_games}`;

// Traer detalles

export const gameDetailsUrl = (gameID) => 
  `${base_url}games/${gameID}?key=${process.env.REACT_APP_API_KEY}`;

export const searchGameUrl = (gameName) =>
  `${base_url}games?key=${process.env.REACT_APP_API_KEY}&search=${gameName}&page_size=9`;
