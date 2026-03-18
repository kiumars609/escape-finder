import React from "react";
import "./style.css";
import Card from "../../../Components/Card/Card";

export default function Cards({ roomsData }) {
  const items =
    roomsData &&
    roomsData.map((item) => {
      return (
        <div key={item.id} className="col-12 col-md-4">
          <Card item={item} />
        </div>
      );
    });
  return (
    <>
      <div className="row col-12 col-md-10 mx-auto show-cards g-3">
        {items}
      </div>
    </>
  );
}




// const [filtered, setFiltered] = useState({
//     city: "",
//     players: "",
//   });

//   const handleFilteredChange = (key, value) => {
//     setFiltered((prev) => ({
//       ...prev,
//       [key]: value,
//     }));
//   };

//   const filteredRooms = roomsData.filter((room) => {
//     return (
//       (!filtered.city || room.city === filtered.city) &&
//       (!filtered.players || room.players === filtered.players)
//     );
//   });