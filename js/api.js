const options = {
           method: 'GET',
           headers: {
                      'x-rapidapi-key': 'f4a4a70765msh66883dcb5a788a9p1c9303jsn525125bf3efa',
                      'x-rapidapi-host': 'shazam.p.rapidapi.com'
           }
};

export class API {
           //take popular musics from api
           async getPopular() {
                      const response = await fetch('https://shazam.p.rapidapi.com/v2/search?term=kiss', options);
                      const data = await response.json()
                      const formattedData = data.results.songs.data.map(item => item.attributes.name);
                      return formattedData;
           };

};         