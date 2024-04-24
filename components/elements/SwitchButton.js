import { useDispatch, useSelector } from "react-redux";
import { setThemeDark } from "../../store";

function SwitchButton() {
  const { theme } = useSelector((state) => state?.textClass);
  const dispatch = useDispatch();

  function handleChange() {
    if (theme) {
      dispatch(setThemeDark(false));
    } else {
      dispatch(setThemeDark(true));
    }
  }

  return (
    <div className="switch-button" style={{ cursor: "pointer" }}>
      <div className="form-check form-switch">
        <input
          className="form-check-input"
          id="flexSwitchCheckChecked"
          type="checkbox"
          role="switch"
          checked={theme}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}

export default SwitchButton;
