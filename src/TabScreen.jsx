import DeparturesAppend from "./DeparturesAppend";
import ShowMeetPoint from "./ShowMeetPoint";
import SurroundFind from "./components/map/SurroundFind";

const HomeScreen = () => {
  return <DeparturesAppend />;
};

const MeetPointScreen = () => {
  return <ShowMeetPoint />;
};

const SurroundPlaceScreen = () => {
  return <SurroundFind />;
};

export { HomeScreen, MeetPointScreen, SurroundPlaceScreen };
