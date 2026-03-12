import sevenImg from "../assets/images/escaperooms/seven/main.png";
import stalkerImg from "../assets/images/escaperooms/stalker/main.png";
import lastlaugh from "../assets/images/escaperooms/lastlaugh/main.png";
import theothers from "../assets/images/escaperooms/theothers/main.png";
import foreveralone from "../assets/images/escaperooms/foreveralone/main.png";

const roomsData = [
  {
    id: 1,
    title: "seven",
    main_image: sevenImg,
    subtitle: "The way to redemption is only one!",
    players: "2-6",
    difficulty: 5,
    time: 60,
    city: "mashhad",
  },
  {
    id: 2,
    title: "stalker",
    main_image: stalkerImg,
    subtitle: "Reveal the clues and discover the Stalker!",
    players: "2-6",
    difficulty: 2,
    time: 90,
    city: "yerevan",
  },
  {
    id: 3,
    title: "last laugh",
    main_image: lastlaugh,
    subtitle: "Are you ready to perform? Not that easy",
    players: "3-10",
    difficulty: 3,
    time: 120,
    city: "mashhad",
  },
  {
    id: 4,
    title: "the others",
    main_image: theothers,
    subtitle: "Save the souls of the abandoned children!",
    players: "2-6",
    difficulty: 5,
    time: 80,
    city: "tehran",
  },
  {
    id: 5,
    title: "forever alone (pt 1)",
    main_image: foreveralone,
    subtitle: "1st escape room based on a true story!",
    players: "3-7",
    difficulty: 5,
    time: 120,
    city: "mashhad",
  },
];

export default roomsData;
