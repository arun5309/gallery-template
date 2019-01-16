// Just for testing
function addGalleryItem(href, alt, description){
    var gallery = document.getElementById("gallery");
    gallery.innerHTML += '<div class="responsive"><div class="galleryItem"><a target="_blank" href="' + href + '"><img src="' + href + '" alt="' + alt + '" height=400px width=600px ></a><div class="description">' + description + '</div></div></div>';
}

for(i=1;i<=10;++i){
    var href = 'images/flower' + String(i) + '.jpg';
    var alt = 'Flower ' + String(i);
    var description = alt;
    addGalleryItem(href, alt, description);
}