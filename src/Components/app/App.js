import { useEffect, useState } from "react";
import { Icon } from "react-icons-kit";
import { eye } from "react-icons-kit/icomoon/eye";
import { eyeBlocked } from "react-icons-kit/icomoon/eyeBlocked";
const App = () => {
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(eyeBlocked);
  const changType = () => {
    if (type === "password") {
      setType("text");
      setIcon(eye);
    } else {
      setType("password");
      setIcon(eyeBlocked);
    }
  };

  return (
    <>
      <div className="bg-dark p-3 rounded-2 text-white col-6 offset-3 mt-5">
        <label htmlFor="name">Full Name:</label>
        <input type="text" name="name" className="mx-3 rounded-3" />
        <label htmlFor="pass">Password:</label>
        <input
          type={type}
          placeholder="password..."
          name="pass"
          className="mx-3 rounded-3"
        />
        <Icon icon={icon} size={22} onClick={changType} />
      </div>
    </>
  );
};

export default App;
