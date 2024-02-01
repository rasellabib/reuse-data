const url = "https://dev.jobkhuzi.com/api/companies";
const container = document.getElementById("custom-card-container");

const createSingleCard = (element) => {
  const card = document.createElement("div");

  card.setAttribute("class", "card mb-5");
  card.setAttribute("style", "width:18rem");

  const image = document.createElement("img");
  image.setAttribute("src", element.company_log);
  image.classList.add("card-img-top");
  image.classList.add("card-image");
  card.appendChild(image);

  const cardBody = document.createElement("div");
  cardBody.setAttribute("class", "card-body");
  card.appendChild(cardBody);

  const heading = document.createElement("h2");
  heading.innerText = element.name;
  cardBody.appendChild(heading);

  container.appendChild(card);
};

const createCardList = (data) => {
  data.forEach((element) => {
    createSingleCard(element);
  });
};

const fetchingCompanies = () => {
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      createCardList(data);
    });
};

fetchingCompanies();
