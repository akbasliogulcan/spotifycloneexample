
//api clasını import et
import { API } from "./api.js";
//ui clasını import et
import { UI } from "./ui.js";

//api class yapısını kullanabilmek için örnek oluştur
const api = new API();
//ui class yapısını kullanabilmek için örnek oluştur
const ui = new UI();


//!sayfa yüklendiğinde  API  ya istek at.
document.addEventListener("DOMContentLoaded", async () => {

           //*render loader
           ui.renderLoader();


           //****Data'ya ulaş
           const data = await api.getPopular();

           //****Render'la
           ui.renderCards(data);
});




ui.form.addEventListener("submit", async (e) => {
           //*form gönderildğinde sayfa yeninelenmesin
           e.preventDefault();

           //****inputtaki değeri al
           const query = (e.target[0].value);

           //*eper inputa bir şey yazılmadıysa api isteği atma
           if (!query.trim()) {
                      alert("Please enter a search term");
                      return;

           }


           //*loader renderla
           ui.renderLoader();

           //*title dinamik oalrak renderla
           ui.title.textContent = `Search Results for "${query}"`;

           const songs = await api.getSearchMusic(query);

           //*renderla
           ui.renderCards(songs);


});


