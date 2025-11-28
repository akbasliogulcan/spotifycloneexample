export class UI {
           //kurucu metod        
           constructor() {
                      this.list = document.querySelector("#list");

           }


           //arayüzü Renderlayan fonks.
           renderCards(songs) {
                      songs.forEach(() => {
                                 console.log("card rendered");
                      })

           };
}


