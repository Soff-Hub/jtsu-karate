import { useState } from 'react';

function SwitchButton() {
  const [isChecked, setIsChecked] = useState(false);

  function handleChange() {
    setIsChecked(!isChecked);
    if (!isChecked) {
      document.documentElement.classList.add('theme-day');
    } else {
      document.documentElement.classList.remove('theme-day');
    }
  }

  return (
    <div className="switch-button">
      <div className="form-check form-switch">
        <input
          className="form-check-input"
          id="flexSwitchCheckChecked"
          type="checkbox"
          role="switch"
          checked={isChecked}
          onChange={handleChange}
          onClick={handleChange}
        />
      </div>
    </div>
  );
}

export default SwitchButton;