interface ToggleSwitchProps {
    handleToggle: () => void;
  }

function ToggleSwitch({ handleToggle }:ToggleSwitchProps) {
    return (
      <button onClick={handleToggle}>색 변경</button>
    );
  }
  
  export default ToggleSwitch;