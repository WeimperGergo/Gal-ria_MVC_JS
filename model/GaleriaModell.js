import { kep_lista } from "./adatModell.js";

export default class GaleriaModell{
    #galleria_lista = [];

    constructor(){
        this.#galleria_lista = kep_lista;
    }

    get_galleria_lista(){
        return this.#galleria_lista;
    }

    balra_lep(akt_elem) {
        akt_elem--;
        if (akt_elem < 0) {
          akt_elem = this.get_galleria_lista().length - 1;
        }
        return this.get_galleria_lista()[akt_elem]
      }

    jobbra_lep(akt_elem) {
        akt_elem++;
        if (akt_elem >= this.get_galleria_lista().length) {
          akt_elem = 0;
        }
        return this.get_galleria_lista()[akt_elem];
      }
}