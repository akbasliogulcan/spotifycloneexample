export class UI {
      //*kurucu metod        
      constructor() {
            //*htmldeki elemanlara eriş
            this.list = document.querySelector("#list");
            this.form = document.querySelector("form");
            this.title = document.querySelector("#title");
            this.player = document.querySelector(".player");

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
                  //*cardı listeye ekle, aslında list div'nin içinde card divi oluşturmak*/
                  this.list.appendChild(card);




            })

      };


      //*loader render eden fonks.
      renderLoader() {

            this.list.innerHTML = `<div class="loader">
           <span class="loader-text">loading</span>
             <span class="load"></span>
             </div>`;
      };



      //*animasyon ekleyen fonks.


      //*player kısmını dinamik olarak renderlayan fonks.
      renderPlayer(song) {
            console.log(song);
            this.player.innerHTML = ` 
                      <div class="info">
                                 <img src="https://is1-ssl.mzstatic.com/image/thumb/Music128/v4/99/4a/a6/994aa6ee-8232-c580-a7a4-1d4dfd602511/00602498648841.rgb.jpg/400x400cc.jpg"
                                            alt="" />
                                 <div>
                                            <h5>Mockingbird</h5>
                                            <p>Eminem</p>
                                 </div>
                      </div>

                      <audio controls
                                 src="https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/65/c6/15/65c61537-1c2f-e2bd-0f26-2ed9818fb86f/mzaf_9317418265960662555.plus.aac.ep.m4a"></audio>

                      <div class="icons">
                                 <i class="bi bi-music-note-list"></i>
                                 <i class="bi bi-boombox"></i>
                                 <i class="bi bi-pc-display"></i>
                      </div>
            `;
      }


};


