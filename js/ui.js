export class UI {
      //*kurucu metod        
      constructor() {
            //*htmldeki elemanlara eriş
            this.list = document.querySelector("#list");
            this.form = document.querySelector("form");
            this.title = document.querySelector("#title");

      }
      //*arayüzü Renderlayan fonks.
      renderCards(songs) {
            //* listeyi temizle
            this.list.innerHTML = "";

            //*her bir şarkı için kart oluştur
            songs.forEach((song) => {
                  const card = document.createElement("div");

                  //*Css class ekle Card clası eklendi.
                  card.classList.add("card");

                  //*carda şarkıya ait bilgileri ekle
                  card.dataset.title = song.attributes.name;
                  card.dataset.subtitle = song.attributes.genreNames[0];
                  card.dataset.image = song.attributes.artwork.url
                        .replace("{w}", 300)
                        .replace("{h}", 300);




                  // Dinamik görsel URL üretme
                  const imgUrl = song.attributes.artwork.url
                        .replace("{w}", 300)
                        .replace("{h}", 300);

                  card.innerHTML = `
    <figure>
        <img src="${imgUrl}" alt="${song.attributes.name}">
        <div class="play">
            <i class="bi bi-play-fill"></i>
        </div>
    </figure>

    <div class="card-info">
        <h4>${song.attributes.name}</h4>
        <h4>${song.attributes.genreNames[0]}</h4>
    </div>
`;




                  this.list.appendChild(card);




            })

      };


      //*loader render eden fonks.
      renderLoader() {

            this.list.innerHTML = `

  <div class="loader">
    <span class="loader-text">loading</span>
      <span class="load"></span>
  </div>

`;
      };
};


