const options = {
           method: 'GET',
           headers: {
                      'x-rapidapi-key': 'f4a4a70765msh66883dcb5a788a9p1c9303jsn525125bf3efa',
                      'x-rapidapi-host': 'shazam.p.rapidapi.com',

           }
};

export class API {
           //take popular musics from api
           async getPopular() {
                      const response = await fetch("https://shazam.p.rapidapi.com/v2/search?term=kiss%20the%20rain&locale=en-US&offset=0&limit=5", options);
                      const data = await response.json()
                      console.log(data);
                      const formattedData = data.results.artists.data.map(item => item);
                      console.log(formattedData);
                      return formattedData;
           };


           async getSearchMusic(query) {
                      const res = await fetch(`https://shazam.p.rapidapi.com/v2/search?term=${query}`, options)

                      const data = await res.json();

                      console.log(data);
                      const formattedData = data.results.artists.data.map(item => item);
                      return formattedData;


           };



};                   