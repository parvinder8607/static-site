document.getElementById("time").textContent = new Date().toLocaleString();
let clicks = 0;
document.getElementById("btn").addEventListener("click", () => {
  clicks += 1;
  document.getElementById("count").textContent = `Clicked ${clicks} time${clicks === 1 ? "" : "s"}`;
});
