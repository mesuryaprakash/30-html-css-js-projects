const sign = document.createElement("p");
sign.textContent = "";
sign.className = "signature"
document.body.appendChild(sign);

const interval = setInterval(() => {
  const a = document.querySelector('[data-v-10465fb6]');
  if (a) {
    a.style.display = "none";
    a.style.background = "#fff";
    clearInterval(interval); // stop once it's found
  }
}, 100)