export class UI {
           //*kurucu metod        
           constructor() {
                      //*htmldeki elemanlara eriş
                      this.list = document.querySelector("#list");

           }
           //*arayüzü Renderlayan fonks.
           renderCards(songs) {
                      //*her bir şarkı için kart oluştur
                      songs.forEach((song) => {
                                 console.log(song);
                                 const card = document.createElement("div");

                                 //*Css class ekle Card clası eklendi.
                                 card.classList.add("card");


                                 card.innerHTML = `
                                                                  <figure>
                                                                       <img src="${song.artwork.url.replace('{w}', 300).replace('{h}', 300)}">
                                                                                        
                                                                             <div class="play">
                                                                                        <i class="bi bi-play-fill"></i>
                                                                             </div>
                                                                  </figure>
                                                                  <div class="card-info">
                                                                             <h4>${song.name}</h4>
                                                                             <h4>${song.artistName}</h4>
                                                                  </div>

                                                       `;



                                 this.list.appendChild(card);




                      })

           };
};


