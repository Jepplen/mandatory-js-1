// QuerySelect av huvudelementen
let main = document.querySelector("main");


// Länkar till main.css
let cssMainLink = document.createElement("link");
cssMainLink.rel = "stylesheet";
cssMainLink.type = "text/css";
cssMainLink.href = "main.css";
document.head.appendChild(cssMainLink);


// Ändrar titel-taggen till rätt företagsnamn
document.title = "Fruits & Vegetables Corp";


// Ändrar Överskriften till rätt företagsnamn
document.querySelector("h1").textContent = "Fruits & Vegetables Corp";


// Ändrar sista länken i listan samt texten i länken i listan till Vegetables
let a = document.querySelector("ul li:last-child a");
a.textContent = "Vegetables";
a.href = "#vegetables";


// Lägger till texten i en p-tagg samt lägger flyttar "About" ovanför "Contact"
let about = document.querySelector("#about");
let aboutH2 = document.createElement("h2");
let aboutP = document.createElement("p");

about.innerHTML = "";
aboutH2.textContent = "About";
aboutP.textContent = "We're the best in fruits & vegetables"

about.appendChild(aboutH2);
about.appendChild(aboutP);
main.insertBefore(about, main.firstChild);


// Lägger till h2 i "Contact" samt sätter texten till "Contact"
let contact = document.querySelector("#contact");
let h2Contact = document.createElement("h2");
h2Contact.textContent = "Contact";
contact.appendChild(h2Contact);
contact.insertBefore(h2Contact, contact.firstChild);


// Tar bort befintlig tr i thead
let thead = document.querySelector("thead");
let tr = document.querySelector("thead tr");
thead.removeChild(tr);


// Lägger till tr samt th i thead samt sätter texten i th
let newTr = document.createElement("tr");
let newTh1 = document.createElement("th");
let newTh2 = document.createElement("th");

newTh1.textContent = "Name";
newTh2.textContent = "Email";

thead.appendChild(newTr);
newTr.appendChild(newTh1);
newTr.appendChild(newTh2);
