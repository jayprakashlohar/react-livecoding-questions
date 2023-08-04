import ToggleSwitch from "./ToggleSwitch"

const MySwitch = () => {

  const handleSwitch1Toggle = (state) => {
    console.log(`Switch 1 is now ${state ? "ON" : "OFF"}`)
  }

    const handleSwitch2Toggle = (state) => {
      console.log(`Switch 2 is now ${state ? "ON" : "OFF"}`);
    };



  return (
    <>
      <div>
        <ToggleSwitch
          initialState={false}
          label="Switch 1"
          callback={handleSwitch1Toggle}
        />

        <ToggleSwitch
          initialState={false}
          label="Switch 2"
          callback={handleSwitch2Toggle}
        />
      </div>
    </>
  );
}

export default MySwitch
