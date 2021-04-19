let cards = [
  {
    title: 'Card title1',
    description: 'Card description',
    img: './rscs/kelly.jpg',
  },
  {
    title: 'Card title2',
    description: 'Card description',
    img: './rscs/kelly.jpg',
  },
  {
    title: 'Card title3',
    description: 'Card description',
    img: './rscs/kelly.jpg',
  },
  {
    title: 'Card title4',
    description: 'Card description',
    img: './rscs/kelly.jpg',
  },
];
document.addEventListener('DOMContentLoaded', function () {
  CreateCards();
  AddListenerToModalCont();
  AddListenerToCard();
});

let AddListenerToCard = () => {
  let cards = document.querySelectorAll('.card');
  cards.forEach((card) => {
    card.addEventListener('click', (event) => {
      console.log(event);
      let modalCont = document.querySelector('.modal_container');
      modalCont.classList.add('show');
      const target = event.target;
      const card = target.closest('.card');
      console.log(card);
      let usedIndex = card.dataset.index;
      ChangeModalContent(parseInt(usedIndex));
    });
  });
};

const ChangeModalContent = (index) => {
  const title = document.querySelector('.title');
  const description = document.querySelector('.description');
  const image = document.querySelector('.img');
  title.textContent = cards[index].title;
  description.textContent = cards[index].description;
  image.src = cards[index].img;
};
let AddListenerToModalCont = () => {
  let modalCont = document.querySelector('.modal_container');
  modalCont.addEventListener('click', (event) => {
    if (event.target === modalCont) {
      modalCont.classList.remove('show');
    } else {
      console.log('se hizo click en el modal');
    }
  });
};

const CreateCards = () => {
  const cardElements = cards.map((el, index) => {
    return `<div data-index="${index}" class="card">
        <div class="card_img">
          <img src="${el.img}" alt="" />
        </div>
        <div class="card_description">
          <h4 class="card_title">${el.title}</h4>
          <p class="card_text">${el.description}</p>
        </div>
      </div>`;
  });
  console.log(cardElements);
  cardElements.forEach((element) => {
    const temporalParent = document.createElement('div');
    temporalParent.innerHTML = element;
    const cardsContainer = document.querySelector('.cards_container');
    cardsContainer.appendChild(temporalParent.firstChild);
  });
};

const OpenWindow = (location) => {
  window.open(`https://www.${location}.com/`);
};
