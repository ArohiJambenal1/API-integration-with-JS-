const apiKey = 'dKyReUZRRmqmp4ScAraa1UILvNKmrk0GHuNFcD9W';
const url = 'https://api.nasa.gov/planetary/apod?';


let container = document.querySelector('.container');

let imagecontainer = document.querySelector('.image-container');

let button = document.getElementById('Fetch-Image');

button.addEventListener('click', () => 
{
    let imageContainer = document.querySelector(' .image-container');
    imageContainer.remove();

    let newimageContainer = document.createElement('div');
    newimageContainer.classList.add('image-container');
    container.append(newimageContainer);

    let dateInput = document.querySelector('.details-input input');


    let date = dateInput.value;

    let request = new XMLHttpRequest();

    request.open('GET', url+ "date="+ date +"&api_key="  +apiKey,true);
    request.send();
    request.onload = function()
    {
        if(request.status === 200)
        {
            let data = JSON.parse(request.responseText);
            let imageUrl = data.hdurl;
            let image = document.createElement('img');
            image.src = imageUrl;
            newimageContainer.append(image);

        } else{
            window.alert('Please enter the date in correct format.');
        }
    }

})

