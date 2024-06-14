import { UserDataContext } from "../App";
import { useContext } from "react";

function AppHeader() {
  const { username, avatar } = useContext(UserDataContext);
  return (
    <div className="app-header-container">
      <h1 className="app-title">Products</h1>
      <img src={avatar} alt={username + " pic"} width="100" height="100" />
      <h2>สวัสดีคุณ {username}</h2>
    </div>
  );
}

export default AppHeader;
