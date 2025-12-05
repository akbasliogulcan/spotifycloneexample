const options = {
           method: 'GET',
           headers: {
                      'x-rapidapi-key': '2a599cce07msh70997a04b752261p18db01jsnbf6d3c0a7542',
                      'x-rapidapi-host': 'shazam.p.rapidapi.com'

           }
};

export class API {
           //take popular musics from api
           async getPopular() {
                      const response = await fetch('https://shazam.p.rapidapi.com/v2/search?term=duman', options);
                      const data = await response.json()
                      const formattedData = data.results.artists.data.map(item => item);
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