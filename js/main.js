
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




ui.form.addEventListener("submit", (e) => {
           //*form gönderildğinde sayfa yeninelenmesin
           e.preventDefault();

           const query = (e.target[0].value);
});

const data = await api.getSearchMusic("manga");
console.log(data);
