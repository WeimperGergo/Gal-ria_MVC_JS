export default class KepMegjelenito{

    constructor(){
        this.megj_elem = $('#kisKepekElem');
        this.megj_nagyElem = $('#nagyKepElem');
        this.nagyIndex = 0;
    }

    megjelenitKicsik(lista){
        let txt = "";
        lista.forEach((elem) => {
            txt += `
                <img src="${elem.forras}" id="${elem.id}" alt="${elem.nev}">
            `;
            console.log(elem);
        });
        
        this.megj_elem.append(txt);
    }

    megjelenitNagy(lista){
        let txt = `<img src="${lista[this.nagyIndex].forras}" id="${lista[this.nagyIndex].id}" alt="${lista[this.nagyIndex].nev}">`;
        
        this.megj_nagyElem.append(txt);
    }



}