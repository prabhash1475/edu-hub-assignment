import { Button, Image } from "antd";
import { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

export const Navbar = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    if (username === "admin" && password === "password") {
      setIsLoggedIn(true);
    } else {
      alert("Invalid username or password");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername("");
    setPassword("");
  };
  return (
    <>
      <div style={{ padding: "10px" }}>
        <Image
          width={150}
          src="https://www.mceduhub.com/Lead/public/images/logo_mceduhub_v4.png"
        />
        <div style={{ marginTop: "10px" }}>
          <Image
            width="100%"
            height="500px"
            src="https://www.mceduhub.com/Lead/public/images/slider1.jpg"
          />
        </div>
        <div style={{ display: "flex" }}>
          <div style={{ width: "50%", margin: "auto" }}>
            <Button type="primary">I have an Access Code!</Button>
          </div>
          <div className="login-page">
            {isLoggedIn ? (
              <div>
                <h2>Welcome, {username}!</h2>
                <button onClick={handleLogout}>Logout</button>
              </div>
            ) : (
              <div style={{ display: "block" }}>
                <h2>Login</h2>
                <input
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={handleUsernameChange}
                />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={handlePasswordChange}
                />
                <button onClick={handleLogin}>Login</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
