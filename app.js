






    const cargar = async()=>{

            let palabraClave = document.getElementById('textBuscar').value ;
            const apiKey = 'QItTTWwtAy1wVTru0DtEAgEAQVd17fY7';
            let url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${palabraClave}&limit=3`;

        try{
            const gifConsultado = await fetch(url);
            const gif = await gifConsultado.json();
            console.log('este es el gif:');
            console.log(gif.data[0].images.original.url);

            let contenido = ""
            gif.data.map((item) => {
                contenido += `<img src="${item.images.original.url}">`
            });

            document.getElementById('gifis').innerHTML = contenido;


        }catch(err){
            console.log('este es el error');
            console.log(err);
        }
    }


