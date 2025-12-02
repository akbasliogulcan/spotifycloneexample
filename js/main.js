
//api clasını import et
import { API } from "./api.js";
//ui clasını import et
import { UI } from "./ui.js";

//api class yapısını kullanabilmek için örnek oluştur
const api = new API();
//ui class yapısını kullanabilmek için örnek oluştur
const ui = new UI();

//*Data'ya ulaş
const data = await api.getPopular();

//* renderla
ui.renderCards(data);


