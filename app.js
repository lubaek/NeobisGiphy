const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');
const gifs = document.querySelector('.gifs');
searchForm.addEventListener('submit', e=> {
    e.preventDefault();
    const queryString = searchInput.value;
    searchGif(queryString);
})
searchForm.addEventListener('reset', e=> {
    gifs.innerHTML = '';
    searchInput.value = '';
})

function searchGif(queryString) {
    const apikey = 'bZmGhDit6ReSZCGtOUwUnKIKkRCJxGcE';
    const path = `http://api.giphy.com/v1/gifs/search?api_key=${apikey}&q=${queryString}`;
    fetch(path).then(res=> {
        return res.json();
    }).then(json =>{
        let imgHTML = '';
        json.data.forEach(obj => {
            // console.log(obj.images.fixed_width.url);
            const url = obj.images.fixed_width.url;
            const title = obj.title;
            imgHTML+=  `<img src="${url}" alt="${title}">`
        });
        gifs.innerHTML = imgHTML;
    }).catch(err => {
        console.log(err.message);
    })
}



