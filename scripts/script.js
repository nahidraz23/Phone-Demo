const body = document.querySelector('body');

const loadData = async searchText => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/phones?search=${searchText}`
  )
  const data = await res.json();
  const phones = data.data;

  displayPhones(phones);
}

function displayPhones (phones) {
  const phonesContainer = document.getElementById('phones-container')

  phonesContainer.textContent = ''

  phones.forEach(phone => {
    const phoneCard = document.createElement('div')
    phoneCard.classList = `card w-full bg-gray-100 shadow-xl`

    phoneCard.innerHTML = `
        <figure><img src="${phone.image}" alt="Shoes" /></figure>
        <div class="card-body">
          <h2 class="text-xl font-bold text-center">${phone.phone_name}</h2>
          <p class="text-center">${phone.slug}</p>
          <div class="card-actions justify-center">
            <button class="btn btn-accent">Buy Now</button>
          </div>
        </div>
        `
    phonesContainer.appendChild(phoneCard)
  })
}

const search = () => {
    const inputText = document.getElementById('search-input');
    const result = inputText.value;

    loadData(result);
}

const onKeyPress = e => {
  if (e.keyCode == 13) {
    const inputText = document.getElementById('search-input');
    const result = inputText.value;

    loadData(result);
  }
}

body.addEventListener('keyup', onKeyPress);
