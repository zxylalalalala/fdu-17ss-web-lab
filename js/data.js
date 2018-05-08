const countries = [
    { name: "Canada", continent: "North America", cities: ["Calgary","Montreal","Toronto"], photos: ["canada1.jpg","canada2.jpg","canada3.jpg"] },
    { name: "United States", continent: "North America", cities: ["Boston","Chicago","New York","Seattle","Washington"], photos: ["us1.jpg","us2.jpg"] },
    { name: "Italy", continent: "Europe", cities: ["Florence","Milan","Naples","Rome"], photos: ["italy1.jpg","italy2.jpg","italy3.jpg","italy4.jpg","italy5.jpg","italy6.jpg"] },
    { name: "Spain", continent: "Europe", cities: ["Almeria","Barcelona","Madrid"], photos: ["spain1.jpg","spain2.jpg"] }
];

window.onload = function(){
    let element = document.getElementsByClassName("flex-container justify")[0];
    for (let i = 0; i < countries.length; i++) {
        let div1 = document.createElement("div");
        div1.className = "item";

        let h2 = document.createElement("h2");
        const node1 = document.createTextNode(countries[i].name);
        h2.appendChild(node1);

        let p = document.createElement("p");
        const node2 = document.createTextNode(countries[i].continent);
        p.appendChild(node2);

        let diva = document.createElement("div");
        diva.className = "inner-box";

        let h3I = document.createElement("h3");
        const node3 = document.createTextNode("Cities");
        h3I.appendChild(node3);
        diva.appendChild(h3I);
        let ul = document.createElement("ul");
        diva.appendChild(ul);
        for (let j = 0; j < countries[i].cities.length; j++) {
            let li = document.createElement("li");
            li.innerText = countries[i].cities[j];
            ul.appendChild(li);
        }

        const divb = document.createElement("div");
        divb.className = "inner-box";
        let h3II = document.createElement("h3");
        const node4 = document.createTextNode("Popular photos");
        h3II.appendChild(node4);
        divb.appendChild(h3II);
        for (let j = 0; j < countries[i].photos.length; j++) {
            let img = document.createElement("img");
            img.className = "photo";
            img.src ="./images/"+ countries[i].photos[j];
            divb.appendChild(img);
        }

        let button = document.createElement("button");
        button.innerText = "Visit";
        div1.appendChild(h2);
        div1.appendChild(p);
        div1.appendChild(diva);
        div1.appendChild(divb);
        div1.appendChild(button);

        element.appendChild(div1);
    }
}
