
// Hier werden die Bilder, deren Größe bestimmt. 
let mygallery=new fadeSlideShow({
    // Die Box in der die Slideshow steckt. Muss unten eingebettet sein
    wrapperid: "fadeshow", 
    dimensions: [725,483], // Breite und Höhe der Galeriebilder
    imagearray: [
        ["images/fadeshow.jpg"],
        ["images/fadeshow1.jpg"],
        ["images/fadeshow2.jpg"],
        ["images/fadeshow3.jpg"],
        ["images/fadeshow4.jpg"],
        ["images/fadeshow5.jpg"],
        ["images/fadeshow6.jpg"],
        ["images/fadeshow7.jpg"],
        ["images/fadeshow9.jpg"],
        ["images/fadeshow10.jpg"],
        ["images/fadeshow11.jpg"],
        ["images/fadeshow12.jpg"],
        ["images/fadeshow14.jpg"],
        ["images/fadeshow15.jpg"],
        ["images/fadeshow16.jpg"],
        ["images/fadeshow17.jpg"],
        ["images/fadeshow18.jpg"],
        ["images/fadeshow19.jpg"]//<--Kein Abschlusskomma!!
    ],
    displaymode: {type:'auto', pause:1000, cycles:0, wraparound:false}, 
    persist: false, // Wird das letzte Bilder beim nächsten Besuch eingeblendet?
    fadeduration: 2000, // Überblenden Dauer (millisekunden)
    descreveal: "ondemand",
    togglerid: ""
})