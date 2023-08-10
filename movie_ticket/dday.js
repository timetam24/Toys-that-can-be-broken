const openingDays = document.querySelectorAll("time");
const movieCards = document.querySelectorAll(".release-container");

const putDDayInsideMovieCard = () => {
  const ddayArray = [];

  const today = new Date();
  [...openingDays].forEach((day) => {
    const openDay = new Date(`${day.dateTime} 00:00:00`);
    const diffDay = Math.floor((openDay - today) / (1000 * 60 * 60 * 24)) + 1;
    ddayArray[ddayArray.length] = diffDay;
  });

  movieCards.forEach((card, index) => {
    const $span = document.createElement("span");
    $span.className = "d-day";
    $span.innerText = `D-${ddayArray[index]}`;
    card.appendChild($span);
  });
};

window.addEventListener("load", putDDayInsideMovieCard);
