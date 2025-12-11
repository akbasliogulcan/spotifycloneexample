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
                  card.dataset.title = song.attributes?.name ?? song;  // eğer string ise song
                  card.dataset.subtitle = song.attributes?.genreNames?.[0] ?? "";

                  // Eğer artwork varsa ekle
                  const rawUrl = song.attributes?.artwork?.url;
                  const imgUrl = rawUrl
                        ? rawUrl.replace("{w}", 300).replace("{h}", 300)
                        : "img/default.jpg";

                  card.dataset.image = imgUrl;



                  card.innerHTML = `
    <figure>
        <img src="${imgUrl}" alt="${song.attributes?.name ?? "Unknown"}">
        <div class="play">
            <i class="bi bi-play-fill"></i>
        </div>
    </figure>

    <div class="card-info">
        <h4>${song.attributes?.name ?? "Unknown"}</h4>
        <h4>${song.attributes?.genreNames?.[0] ?? ""}</h4>
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

            // ✔ 1) Şarkı adı
            const title = song.attributes?.name ?? "Unknown Title";

            // ✔ 2) Sanatçı adı
            const artist = song.attributes?.artistName ?? "Unknown Artist";

            // ✔ 3) Artwork URL → {w} & {h} değiştir
            const artworkUrl = song.attributes?.artwork?.url
                  ? song.attributes.artwork.url
                        .replace("{w}", 400)
                        .replace("{h}", 400)
                  : "img/default.jpg";

            // ✔ 4) Önizleme müzik URL (previews array)
            const audioUrl = song.attributes?.previews?.[0]?.url ?? "";

            this.player.innerHTML = `
       <div class="info">
        <img src="${artworkUrl}" alt="${title}" />
        <div>
            <h5>${title}</h5>
            <p>${artist}</p>
        </div>
    </div>

    <audio controls src="${audioUrl}"></audio>

    <div class="icons">
        <i class="bi bi-music-note-list"></i>
        <i class="bi bi-boombox"></i>
        <i class="bi bi-pc-display"></i>
    </div>
            `;


      }



};


