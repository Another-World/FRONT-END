import About from "../../components/sections/About";
import Evolution from "../../components/sections/Evolution";
import MissionVisionValues from "../../components/sections/MissionVisionValues";
import TeamBanner from "../../components/sections/TeamBanner";

export default function QuemSomos() {
  return (
    <>
      <TeamBanner/>
      <About/>
      <MissionVisionValues />
      <Evolution/>
    </>
  );
}
