const options = {
           method: 'GET',
           headers: {
                      'x-rapidapi-key': '9b06edb9cbmsh0f65fa722829550p1802fajsn45fb031b6556',
                      'x-rapidapi-host': 'shazam-api6.p.rapidapi.com',
                      'Content-Type': 'application/x-www-form-urlencoded'
           }
};

export class API {
           //take popular musics from api
           async getPopular() {
                      const response = await fetch('https://shazam.p.rapidapi.com/v2/search?term=kiss', options);
                      const data = await response.json()

                      const formattedData = data.results.songs.data.map(item => item.attributes);
                      return formattedData;
           };

};                   