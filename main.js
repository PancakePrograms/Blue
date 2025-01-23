const secret = document.querySelector(".secret");
const links = document.querySelector(".links")

document.addEventListener("dblclick", () => {
  
  if (secret.style.display === "none" || secret.style.display === "") {
    secret.style.display = "block";
    links.style.display = "none";
  } else {
    secret.style.display = "none";
    links.style.display = "flex"
  }
})