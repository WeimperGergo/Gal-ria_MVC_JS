export default class GaleriaMegjelenito{

    constructor(){
        this.elemben = $('#galeria_div');
    }

    tartalom(){
        const txt = `
            <button id="balra">⏪</button>
            <div id="nagyKepElem"></div>
            <button id="jobbra">⏩</button>
            <div id="kisKepekElem"></div>
        `;
        return txt;
    }

    megjelenit(){
        this.elemben.append(this.tartalom());
    }

}