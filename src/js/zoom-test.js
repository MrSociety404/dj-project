const main=document.querySelector("main");
const images = document.querySelectorAll(".gallery");
const zoomIn = (event) => {
  let targetImage = event.target;
 
  let container=document.createElement('div');
  container.classList.add("container");
//   container.innerText="This is Test if you can see me then your container div has been created properly";
 let zoomedImage = document.createElement("img");
  zoomedImage.classList.add("zoomed");
  zoomedImage.src = targetImage.src;
  let closeTab=document.createElement('span');
  closeTab.innerHTML="x";
  container.append(closeTab);
  container.appendChild(zoomedImage);
  images[0].appendChild(container);
  console.log("image display have been changed");
  zoomedImage.addEventListener("click",closeZoom);

  const closeZoom=()=>{
    container.remove();
    zoomedImage.remove();
    console.log('zoomed image removed');
}

};
//adding an event listener to each item of an array of objects using for each method

images.forEach((image) => {
  image.addEventListener("click", zoomIn);
});


