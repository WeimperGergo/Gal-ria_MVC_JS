import GaleriaModell from "../model/GaleriaModell.js";
import GaleriaMegjelenito from "../view/GaleriaMegjelenito.js";
import KepMegjelenito from "../view/KepMegjelenito.js";


export default class GaleriaController{

    nagy_kep_index = 0;  

    constructor(){
        this.galeria_megjelenit = new GaleriaMegjelenito();
        this.galeria_modell = new GaleriaModell();
        this.galeria_megjelenit.megjelenit();

        this.kep_megjelenit = new KepMegjelenito();
        
        this.kep_megjelenit.megjelenitKicsik(this.galeria_modell.get_galleria_lista());
        this.kep_megjelenit.megjelenitNagy(this.galeria_modell.get_galleria_lista());


    }
    
    

}