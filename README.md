# SimpleImagePreloader
It is as the other image preloader, but in class version format and simplified to get a single image name array and a path as parameters.


Hi there,

This version is created to be able to pre-read a set of image files into the browser and gives the images references back. All the read is based on Promises, so when all files from the array had been read the result from the promis gonna be an array of object with the name of the file and the image reference itself.

Usage:

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
            //Inside this you have the results
            console.log(img.id, ': ', img.image.width, ', ', img.image.height);
        });
    });;

This version is applicable for a system, where you want to load images from different places without knowing each other. So you can create seperate instances for the jobs. They are totaly independet, not blocking each other.

ther result are: [
  {
    id: [image name with path],
    image: [the image object]
  },
  ....
]
