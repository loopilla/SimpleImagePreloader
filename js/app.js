(function(){
    var preloader = new ImagePreloader(
        {
            path: './images',
            images: [
                'tile01.png',
                'tile02.png',
                'tile03.png',
                'tile04.png',
                'tile05.png',
                'tile06.png',
                'tile07.png',
                'tile08.png',
                'tile09.png'
            ]
        }
    );

    preloader.loadAll().then(function(result){
        result.forEach(function(img){
            console.log(img.id, ': ', img.image.width, ', ', img.image.height);
        });
    });;
})();