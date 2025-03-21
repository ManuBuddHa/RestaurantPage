function about(){
   const mainContent = document.querySelector("#content");
   const heading = document.createElement("h1");
   const headDiv = document.createElement("div");
   const content = document.createElement("div");
   const images = document.createElement("div");
   const text = document.createElement("div");
   const p1 = document.createElement("p");
   p1.textContent = "Welcome to the about section of this Page. Here should be About!";
   text.appendChild(p1);
   images.classList.add("imageDiv");
   const img1 = document.createElement("img");
   const img2 = document.createElement("img");
   const img3 = document.createElement("img");
   img1.src="./odin-lined.png";
   img1.alt="No Image";
   img1.classList.add("images");
   img2.classList.add("images");
   img3.classList.add("images");
   content.classList.add("content");
   headDiv.classList.add("headDiv");
   heading.textContent = "About";
   mainContent.innerHTML="";
   mainContent.appendChild(headDiv);
   mainContent.appendChild(content);
   headDiv.appendChild(heading);
   content.appendChild(images);
   content.appendChild(text);
   images.appendChild(img1);
   images.appendChild(img2);
   images.appendChild(img3);
}
export {about};