import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import person1 from "../../../assets/images/team/1.jpg";
import person2 from "../../../assets/images/team/2.jpg";
import person3 from "../../../assets/images/team/3.jpg";
import Headline from "../../../Components/Headline";
import PersonCard from "./PersonCard";

const Team = () => {
  return (
    <div className="flex justify-center items-center flex-col my-4">
      <Headline title={"Team"} content={"Meet Our Team"}></Headline>
      <div className="grid grid-cols-3 py-4 lg:gap-16 md:gap-10 xsm:gap-2">
        <PersonCard person={person1}></PersonCard>
        <PersonCard person={person2}></PersonCard>
        <PersonCard person={person3}></PersonCard>
      </div>
    </div>
  );
};

export default Team;
