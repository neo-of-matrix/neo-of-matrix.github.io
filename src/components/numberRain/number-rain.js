import React, { useEffect, useRef } from "react";
import _debounce from "lodash/debounce";
export default function NumberRain() {
  const textInput = useRef(null);
  let timeId = null;
  const init = function () {
    const can = textInput.current;
    can.width = document.documentElement.clientWidth;
    can.height = 510;
    const canWidth = can.width;
    const canHeight = can.height;
    const str = "01";
    const fontSize = 16;
    const ctx = can.getContext("2d");
    ctx.font = fontSize + "px '宋体'";
    const column = canWidth / fontSize;
    const arr = [];
    for (let i = 0; i < column; i++) {
      arr[i] = 60;
    }
    timeId = setInterval(draw, 50);
    function draw() {
      ctx.fillStyle = "rgba(0,0,0,0.07)";
      ctx.fillRect(0, 0, canWidth, canHeight);
      ctx.fillStyle = "#7CFC00";
      for (let a = 0; a < arr.length; a++) {
        ctx.fillText(
          str[Math.floor(Math.random() * str.length)],
          fontSize * a,
          fontSize * arr[a]
        );
        arr[a]++;
        if (arr[a] * fontSize > canHeight && Math.random() > 0.9) {
          arr[a] = 0;
        }
      }
    }
  };
  useEffect(() => {
    textInput.current && init();
  });
  window.addEventListener(
    "resize",
    _debounce(function () {
      clearInterval(timeId);
      textInput.current && init();
    }, 600)
  );
  return <canvas ref={textInput}>您的浏览器不支持 HTML5 canvas 标签。</canvas>;
}
