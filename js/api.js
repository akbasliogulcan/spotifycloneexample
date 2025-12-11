const options = {
           method: 'GET',
           headers: {
                      'x-rapidapi-key': '07df508ffcmsh9dbd3370df633fep1f2794jsn95bb2953fcf1',
                      'x-rapidapi-host': 'shazam.p.rapidapi.com',

           }
};

export class API {
           //take popular musics from api

           async getPopular() {
                      try {

                                 const response = await fetch("https://shazam.p.rapidapi.com/v2/auto-complete?term=kiss%20the&locale=en-US", options);
                                 console.log(response);
                                 const data = await response.json()
                                 console.log(data);
                                 const formattedData = data.results.terms.map(item => item);
                                 console.log(formattedData);
                                 return formattedData;
                      } catch (error) {
                                 alert("Error fetching popular music:", error);
                      }

           };


           async getSearchMusic(query) {
                      const res = await fetch(`https://shazam.p.rapidapi.com/v2/search?term=${query}`, options)
                      const data = await res.json();
                      const formattedData = data.results.artists.data.map(item => item);
                      return formattedData;


           };



};                   