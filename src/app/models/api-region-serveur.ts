import { Region } from "./enum/region";
import { Serveur } from "./enum/serveur";

export interface ApiRegionServeur {
    region: Region,
    serveur: Serveur,
    nom: string
}
