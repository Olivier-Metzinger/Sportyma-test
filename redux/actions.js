import faker from "faker";

export const GET_CLUBS = "GET_CLUBS";
export const GET_PLAYERS = "GET_PLAYERS";

faker.locale = "en_GB";
// RECUPERER UNE SEED RANDOM POUR MODIFIER LES DONNEES
faker.seed(Math.floor(Math.random() * 100));

// STOCKAGE DES DONNEES DANS UN ARRAY DE 10
// DONNES DES CLUBS
const clubs = [...Array(10).keys()].map((_, i) => {
  return {
    key: faker.datatype.uuid(),
    club: faker.address.state(),
    imageclub: faker.internet.color(),
    creationdate: faker.datatype.number({
      min: 1960,
      max: 2018,
    }),
    country: faker.address.country(),
    playersnumber: faker.datatype.number({
      min: 29,
      max: 40,
    }),
  };
});

// STOCKAGE DES DONNEES DANS UN ARRAY DE 10
// DONNES DES CLUBS
const players = [...Array(10).keys()].map((_, i) => {
  return {
    key: faker.datatype.uuid(),
    playerimage: `https://randomuser.me/api/portraits/${faker.helpers.randomize(
      ["men"]
    )}/${faker.datatype.number(60)}.jpg`,
    playername: faker.name.findName(),
    numberplayer: faker.datatype.number({
      min: 1,
      max: 30,
    }),
    stars: faker.datatype.number({
      min: 1,
      max: 5,
    }),
    sizeplayer: faker.datatype.number({
      min: 70,
      max: 99,
    }),
    playerage: faker.datatype.number({
      min: 1990,
      max: 2003,
    }),
    playercity: faker.address.cityName(),
    playercountry: faker.address.country(),
    playerstartclub: faker.datatype.number({
      min: 2012,
      max: 2020,
    }),
    goal: faker.datatype.number({
      min: 0,
      max: 2,
    }),
  };
});

//RECUPERATION DES CLUBS
export const getClubs = () => {
  try {
    return async (dispatch) => {
      dispatch({
        type: GET_CLUBS,
        payload: clubs,
      });
    };
  } catch (error) {
    console.log(error);
  }
};

//RECUPERATION DES JOUEURS
export const getPlayers = () => {
  try {
    return async (dispatch) => {
      dispatch({
        type: GET_PLAYERS,
        payload: players,
      });
    };
  } catch (error) {
    console.log(error);
  }
};
