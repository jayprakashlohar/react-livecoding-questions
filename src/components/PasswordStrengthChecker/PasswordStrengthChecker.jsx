import { useState } from "react";

const PasswordStrengthChecker = () => {
  const [password, setPassword] = useState("");
  const [score, setScore] = useState(0);

  const handleChange = (event) => {
    let { value } = event.target;
    setPassword(value);
    setScore(calculatePasswordStrength(value));
  };

  const calculatePasswordStrength = (password) => {
    let score = 0;
    if (password.length >= 8) {
      score += 1;
    }
    if (password.match(/[a-z]/)) {
      score += 1;
    }
    if (password.match(/[A-Z]/)) {
      score += 1;
    }
    if (password.match(/[0-9]/)) {
      score += 1;
    }
    if (password.match(/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/)) {
      score += 1;
    }
    return score;
  };

  const renderScore = () => {
    switch (score) {
      case 1:
        return "Weak";
      case 2:
        return "Moderate";
      case 3:
        return "Strong";
      case 4:
        return "Very Strong";
      default:
        return "";
    }
  };

  return (
    <>
      <div>
        <label>Password</label>
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={handleChange}
        />
        <p>Strength : {renderScore()}</p>
      </div>
    </>
  );
};

export default PasswordStrengthChecker;
