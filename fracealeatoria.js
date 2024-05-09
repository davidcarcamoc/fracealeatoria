function aleatorio(aleatorio){
    return Math.floor(Math.random()*aleatorio)
    }
    const coleeciontema={
        palabra:["Sostenibilidad",
                "Diversidad",
                "Resiliencia",
                "Agroecosistema",
                "Permacultura",
                "Soberanía alimentaria",
                "Ciclo de nutrientes",
                "Interdependencia",
                "Biodiversidad",
                ,],
    
        frace:["La agroecología busca sistemas agrícolas más sostenibles y respetuosos con el medio ambiente.",
                "La diversidad de cultivos y especies beneficia la salud de los agroecosistemas.",
                "La agroecología promueve la interacción armoniosa entre los seres vivos y su entorno.",
                "La soberanía alimentaria es un principio fundamental de la agroecología.",
                "El cuidado del suelo y el agua es esencial en la práctica agroecológica.",],
    
        consejo:["Fomenta la diversidad de cultivos en tus terrenos.",
                "Utiliza abonos orgánicos y evita el uso de productos químicos.",
                "Mantén la cobertura vegetal en tus suelos para mejorar su salud.",
                "Favorece la presencia de fauna beneficiosa en tus cultivos.",
                "Promueve la colaboración y el intercambio de conocimientos con otros agricultores.",]
    
    }
    
    let mensaje=[];
    
    for(let nfrace in coleeciontema ){
    
        const aleatoriomsj=aleatorio(coleeciontema[nfrace].length);
    
        if(nfrace=== 'palabra'){
            mensaje.push('Su tema es: '+ coleeciontema[nfrace][aleatoriomsj]);
    
        }else if(nfrace==='frace'){
            mensaje.push('Es '+ coleeciontema[nfrace][aleatoriomsj]);
    
        }else if(nfrace==='consejo'){
            mensaje.push('Ademas '+ [coleeciontema[nfrace][aleatoriomsj]]);
            
        }else{
            mensaje.push('Ther is not any subject' );
    
        }
    
    }
    
    function salida(msj){
    
        const formato = mensaje.join("\n");
        console.log(formato);
    
    }
    console.log('Hello');
    salida(mensaje)
    
    
    