let photoArray =[
	{url:"images/roseruins.jpg",
	caption:"Terme di Diocleziano"
	},
	{url:"images/StPeter.jpg",
	caption:"Saint Peter's Basilica"
	},
	{url:"images/RomulusRemus.jpg",
	caption:"Estate fuori con Romolo e Remo"
	},
	{url:"images/HadrianVilla.jpg",
	caption:"The Canopus at Hadrian's Villa, Tivoli"
	}
]

let currentIndex = 0;


function getPhotos(index){
	$.each(photoArray, function(index, object){
		console.log ("object", object);
		$('.container ul').append(`<li id="photo${index}"><figure ><img src="${object.url}" alt=""><figcaption>${object.caption}</figcaption></figure></li>`);
	})

	hideImages();
}

function hideImages(){
	$('li').hide();
}

function autoRotate(currentIndex){
//.delay?

	let photo=$('li').eq(currentIndex);

		photo.fadeIn("slow").delay(5000);
		photo.fadeOut("slow");
}

let slide =setInterval(function(){
	currentIndex++;
	if (currentIndex===photoArray.length){
			currentIndex= 0;
		}
	autoRotate(currentIndex);
}, 3000);

getPhotos(currentIndex);
//buttons with click events

// $('.next').on("click", function(){


// })




//.eq(index)
