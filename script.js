fetch('https://swapi.dev/api/films/')//hago un fetch con la url para hacer la solicitud a la API
    .then(function (response) {
        return response.json();//después convierte la respuesta en formato json
    })
    .then(data => {

        let year = [];
        let titles = [];
        let starW = data.results;
        for (let i = 0; i < starW.length; i++) {
            // console.log(starW[i]);
            titles.push(starW[i].title);
            year.push(starW[i].release_date.slice(0, 4))
        }
        console.log(year);

        new Chartist.Line('.nameYear', {

            labels: titles,
            series: [year]
        }, {
            fullWidth: true,
            chartPadding: {
                right: 40
            }
        });
    });

fetch('https://swapi.dev/api/people/')
    .then(function (response) {
        return response.json();//después convierte la respuesta en formato json
    })
    .then(data => {

        let personajes = [];
        let movies = [];
        let starM = data.results;
        for (let i = 0; i < starM.length; i++) {
            // console.log(starW[i]);
            personajes.push(starM[i].name);
            movies.push(starM[i].films.length)
        }
        console.log();

        new Chartist.Line('.moviesName', {

            labels: personajes,
            series: [movies]
        }, {
            fullWidth: true,
            high:10,
            chartPadding: {
                right: 40,
            }
        });
    });

