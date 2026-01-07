import Navbar from "./Navbar";
import { albumsData } from "../assets/assets";
import AlbumItem from "./AlbumItem";
import { songsData } from "../assets/assets";
import SongItem from "./SongItem";
const DisplayHome = () => {
  return (
    <>
      <Navbar />
      {/* THIS IS FEATURED CHARTS DATA*/}
      <div className="mb-4">
        <h1 className="my-5 font-bold text-2xl">Featured Charts</h1>
        <div className="flex overflow-auto ">
          {albumsData.map((item, idx) => (
            <AlbumItem
              key={idx}
              name={item.name}
              desc={item.desc}
              id={item.id}
              image={item.image}
            />
          ))}
        </div>
      </div>
      {/* THIS IS TODAY'S HITS SECTION DATA */}
      <div className="mb-4">
        <h1 className="my-5 font-bold text-2xl">Today's biggest hits </h1>
        <div className="flex overflow-auto ">
          {songsData.map((item, idx) => (
            <SongItem
              key={idx}
              image={item.image}
              id={item.id}
              desc={item.desc}
              name={item.name}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default DisplayHome;
