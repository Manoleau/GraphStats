import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApiRegionServeur } from './models/api-region-serveur';
import { Region } from './models/enum/region';
import { Serveur } from './models/enum/serveur';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  apiRegionServeurs: ApiRegionServeur[] = []
  title = 'GraphStats';

  ngOnInit(): void {
    this.apiRegionServeurs = [
        { region: Region.EUROPE, serveur: Serveur.EUW1, nom: Serveur.EUW1.toString().toLocaleLowerCase() },
        { region: Region.EUROPE, serveur: Serveur.EUN1, nom: Serveur.EUN1.toString().toLocaleLowerCase() },
        { region: Region.AMERICAS, serveur: Serveur.BR1, nom: Serveur.BR1.toString().toLocaleLowerCase() },
        { region: Region.ASIA, serveur: Serveur.JP1, nom: Serveur.JP1.toString().toLocaleLowerCase() },
        { region: Region.ASIA, serveur: Serveur.KR, nom: Serveur.KR.toString().toLocaleLowerCase() },
        { region: Region.AMERICAS, serveur: Serveur.LA1, nom: Serveur.LA1.toString().toLocaleLowerCase() },
        { region: Region.AMERICAS, serveur: Serveur.LA2, nom: Serveur.LA2.toString().toLocaleLowerCase() },
        { region: Region.AMERICAS, serveur: Serveur.NA1, nom: Serveur.NA1.toString().toLocaleLowerCase() },
        { region: Region.SEA, serveur: Serveur.OC1, nom: Serveur.OC1.toString().toLocaleLowerCase() },
        { region: Region.EUROPE, serveur: Serveur.TR1, nom: Serveur.TR1.toString().toLocaleLowerCase() },
        { region: Region.EUROPE, serveur: Serveur.RU, nom: Serveur.RU.toString().toLocaleLowerCase() },
        { region: Region.SEA, serveur: Serveur.PH2, nom: Serveur.PH2.toString().toLocaleLowerCase() },
        { region: Region.SEA, serveur: Serveur.SG2, nom: Serveur.SG2.toString().toLocaleLowerCase() },
        { region: Region.SEA, serveur: Serveur.TH2, nom: Serveur.TH2.toString().toLocaleLowerCase() },
        { region: Region.SEA, serveur: Serveur.TW2, nom: Serveur.TW2.toString().toLocaleLowerCase() },
        { region: Region.SEA, serveur: Serveur.VN2, nom: Serveur.VN2.toString().toLocaleLowerCase() }
    ];
  }
 
}
