const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');
let photosArray=[];


//API
const count = 10;
const apiKey="oySmLVlIpJIk_c_LAf_osdRUfUFHDuTfyzZV9VVsIro";
const apiUrl=`https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`

// Create Elements for Links and photos
function displayPhotos(){
	photosArray.forEach((photo) =>{
		const item = document.createElement('a');
		item.setAttribute('href', photo.links.html);
		item.setAttribute('target','_blank');
		
		const img = document.createElement('img');
		img.src= photo.urls.regular;
		img.alt=photo.alt_description;
		
		item.appendChild(img);
		document.getElementById('image-container').appendChild(item);
	});
}


// Get Photos from API

async function getPhotos(){
	try{
			const response = await fetch(apiUrl);
			photosArray = await response.json();
			displayPhotos()

	} catch(error){

	}
}

//check scrolling is near bottom of page
window.addEventListener('scroll',()=>{
	if(window.innerHeight + window.scrollY>= document.body.offsetHeight - 1000){
		getPhotos();
	}
})

// Onload

getPhotos();