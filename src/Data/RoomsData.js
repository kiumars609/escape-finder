import sevenImg from "../assets/images/escaperooms/seven/main.png";
import stalkerImg from "../assets/images/escaperooms/stalker/main.png";
import lastlaugh from "../assets/images/escaperooms/lastlaugh/main.png";

const roomsData = [
  {
    id: 1,
    title: "seven",
    main_image: sevenImg,
    subtitle: "The way to redemption is only one!",
    players: "2-6",
    difficulty: 4,
    time: 60,
  },
  {
    id: 2,
    title: "stalker",
    main_image: stalkerImg,
    subtitle: "Reveal the clues and discover the Stalker!",
    players: "2-6",
    difficulty: 4,
    time: 90,
  },
  {
    id: 3,
    title: "last laugh",
    main_image: lastlaugh,
    subtitle: "Are you ready to perform? Not that easy",
    players: "3-10",
    difficulty: 3,
    time: 120,
  },
];

export default roomsData;
