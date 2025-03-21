function home(){
   const mainContent = document.querySelector("#content");
   const heading = document.createElement("h1");
   const headDiv = document.createElement("div");
   const content = document.createElement("div");
   content.classList.add("content");
   headDiv.classList.add("headDiv");
   heading.textContent = "Home";
   mainContent.innerHTML="";
   mainContent.appendChild(headDiv);
   mainContent.appendChild(content);
   headDiv.appendChild(heading);
   
}
export {home};