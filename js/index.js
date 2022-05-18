const now = new Date();
const $year = document.querySelector(".year");
$year.innerText = now.getFullYear();

const $status = document.querySelector(".status");
const hours = now.getHours();
const day = now.getDay();

if (hours >= 7 && hours < 18 && day !== 0) {
  $status.classList.add("open");
} else {
  $status.classList.add("close");
}
