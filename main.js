const secret = document.querySelector(".secret");
const links = document.querySelector(".links")

const body = document.querySelector("body")

document.addEventListener("dblclick", () => {
  
  if (secret.style.display === "none" || secret.style.display === "") {
    body.style.backgroundImage = "url(Untitled_Artwork.jpg)";
    secret.style.display = "block"
    links.style.display = "none";
  } else {
    secret.style.display = "none";
    links.style.display = "flex"
  }
})