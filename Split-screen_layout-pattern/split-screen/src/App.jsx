import { hexlify } from "ethers";
import { SplitScreen } from "./components/SplitScreen";

const LeftHandComponent = ({ name }) => {
  return (
    <h1 style={{ backgroundColor: "green", width: "100%", height: "100vh" }}>
      {name}!
    </h1>
  );
};

const CenterHandComponent = ({ name }) => {
  return (
    <h1 style={{ backgroundColor: "blue", width: "100%", height: "100vh" }}>
      {name}!
    </h1>
  );
};

const RightHandComponent = ({ message }) => {
  return (
    <h1 style={{ backgroundColor: "red", width: "100%", height: "100vh" }}>
      {message}!
    </h1>
  );
};

const DownHandComponent = ({ message }) => {
  return (
    <h1 style={{ backgroundColor: "yellow", width: "100%", height: "100vh" }}>
      {message}!
    </h1>
  );
};

function App() {
  return (
    <SplitScreen>
      <LeftHandComponent name="Left" />
      <CenterHandComponent name="center" />
      <RightHandComponent message="Right" />
      <DownHandComponent message="Down" />
    </SplitScreen>
  );
}

export default App;
