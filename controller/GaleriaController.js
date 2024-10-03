import { kep_lista } from "../model/adatModell.js";
import GaleriaModell from "../model/GaleriaModell.js";
import GaleriaMegjelenito from "../view/GaleriaMegjelenito.js";
import KisKep from "../view/KisKep.js";
import NagyKep from "../view/NagyKep.js";


export default class GaleriaController{

    nagy_kep_index = 0;  

    constructor(){
        this.galeria_megjelenit = new GaleriaMegjelenito();
        this.galeria_modell = new GaleriaModell(this.galeria_megjelenit);

    }
    
    

}