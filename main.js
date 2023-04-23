const summaryScoreNum = document.querySelectorAll('.summary__score--num')
const summaryComponentsWrapper = document.querySelector('.summary__components--wrapper')
const summaryScore = []
console.log(summaryScoreNum)
let score = "80"

// card__summary--wrapper

let summaryScoreData = {}

const fetchData = async () => {
  const response = await fetch("./data.json");
  const data = await response.json();
  const summaryScore = [] = data;
  

  summaryScore.forEach((element) => {
    summaryComponentsWrapper.insertAdjacentHTML("beforeend", renderSummaryComponents(element, score));
  });

};

// function updateCard(component, score) {
//   const cardTitle = card.querySelector(".card-title").innerText;
//   // const currentTimeframe = activityCardsData[cardTitle][timeframe]["current"];
//   // const previousTimeframe = activityCardsData[cardTitle][timeframe]["previous"];

//   // const timeframeText = {
//   //   daily: "Yesterday",
//   //   weekly: "Last Week",
//   //   monthly: "Last Month",
//   // };

//   // const currentTimeframeText = card.querySelector(".current-timeframe");
//   // currentTimeframeText.innerText = `${currentTimeframe}hrs`;
//   // const textElement = card.querySelector(".timeframe-text");
//   // textElement.innerText = `${timeframeText[timeframe]} - ${previousTimeframe}hrs`;
// }

function renderSummaryComponents(element, score) {
  const summaryCategory = element["category"];
  const summaryComponentClassName = summaryCategory.toLowerCase().replace(" ", "-");
  const summaryScore = element["score"]
  const summaryIcons = element["icon"]

return ` <div class="summary__component summary__component--${summaryComponentClassName}">
            <img
              class="${summaryComponentClassName}__img"
              src="${summaryIcons}"
              alt=""
            />
            <h3 class="${summaryComponentClassName}__title fs-s">${summaryComponentClassName}</h3>
            <p class="${summaryComponentClassName}__score">
              <span
                class="summary__score--num ${summaryComponentClassName}__score--num fs-s"
                data-option="80"
                >${summaryScore}</span
              >
              / 100
            </p>
          </div>`
}
fetchData()