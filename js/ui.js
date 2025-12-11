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

                  // Eğer sonuç item'ı string ise (çok düşük ihtimal) fallback olarak direkt song kullanıyoruz.
                  card.dataset.title = song?.attributes?.name ?? String(song);

                  // Genre varsa al, yoksa boş bırak
                  card.dataset.subtitle = song?.attributes?.genreNames?.[0] ?? "";

                  // Artwork URL varsa 300x300 olacak şekilde düzenle
                  const rawUrl = song?.attributes?.artwork?.url;

                  const imgUrl = rawUrl
                        ? rawUrl.replace("{w}", "300").replace("{h}", "300")
                        : "img/default.jpg";  // yedek resim

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
      toggleAnimation() {
            const image = document.querySelector('.info img');
            image.classList.toggle("animate");
      };

      //*player kısmını dinamik olarak renderlayan fonks.
      renderPlayer(song) {
            this.player.innerHTML = ` 
      <div class="info">
        <img
          src="${song.image}"
          alt=""
        />
        <div>
          <h5>${song.title}</h5>
          <p>${song.subtitle}</p>
        </div>
      </div>


      <audio
        controls
        autoplay
        src="${song.mp3}"
      ></audio>

 
      <div class="icons">
        <i class="bi bi-music-note-list"></i>
        <i class="bi bi-boombox"></i>
        <i class="bi bi-pc-display"></i>
      </div>`;


            //*Şarkı resminin oynatılma durumuna bağlı olarak play ve pause addevent listener ekle
            const audio = document.querySelector("audio")
            audio.addEventListener("play", this.toggleAnimation);
            audio.addEventListener("pause", this.toggleAnimation);

      }



};


