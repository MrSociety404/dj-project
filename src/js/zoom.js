// this js file is not yet connected to the gallery html do not forget to do it 
const images = document.querySelector(".gallery").children;
const container=document.getElementById('cont-div1');
const closeTab=document.getElementById("close-icon");
const zoomIn = (event) => {
    let targetImage = event.target;
    let zoomedImage = document.createElement("img");
    zoomedImage.classList.add("zoomed");
    zoomedImage.src = targetImage.src;
    container.appendChild(zoomedImage);
    container.classList.toggle("hidden");
    targetImage.src=targetImage.src;
};
// container.style.display;
const closeZoom = () => {
    container.classList.toggle('hidden');
    
    // container.style.display = "none";
    container.remove();
    console.log("zoomed image removed");
    window.top.location = window.top.location;
    
};

closeTab.addEventListener("click", closeZoom);

console.log(images[0].nodeName)
for (image of images) {
    if (image.nodeName === 'FIGURE') {
        image.addEventListener("click", zoomIn);
    }
}