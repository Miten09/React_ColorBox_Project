import React, { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";

const Rectangle = () => {
  const params = useParams();
  const navigate = useNavigate();

  const [colors, setColors] = useState([]);

  const handleChangeColor = (index, newColor) => {
    let newColors = [...colors];
    newColors[index] = newColor;
    setColors(newColors);
  };

  useEffect(() => {
    if (Number(params.id) <= 0 || !Number(params.id)) {
      navigate("/1");
    }
  }, []);

  function rec(n) {
    if (n > 0) {
      return (
        <div
          style={{
            display: "inline-block",
            width: "70%",
            border: "2px solid black",
            padding: "10%",
            backgroundColor: colors[n],
          }}
        >
          <input
            type="text"
            placeholder="Enter Color"
            style={{ margin: "10px" }}
            onChange={(e) => handleChangeColor(n, e.target.value)}
          />

          {rec(n - 1)}
        </div>
      );
    }
  }

  return rec(Number(params.id));
};

export default Rectangle;
