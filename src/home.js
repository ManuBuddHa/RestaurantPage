function home(){
   const mainContent = document.querySelector("#content");
   const heading = document.createElement("h1");
   const headDiv = document.createElement("div");
   const content = document.createElement("div");
   const p1 = document.createElement("p");
   p1.textContent = "This is the Home Page of the Page."
   content.classList.add("content");
   headDiv.classList.add("headDiv");
   heading.textContent = "Home";
   mainContent.innerHTML="";
   mainContent.appendChild(headDiv);
   mainContent.appendChild(content);
   headDiv.appendChild(heading);
   content.appendChild(p1);
}
export {home};