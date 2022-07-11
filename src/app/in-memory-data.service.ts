import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Dr Stone', quirk:["Cerebrito"] },
      { id: 12, name: 'Marco' , quirk:["Morir"]},
      { id: 13, name: 'Batman' , quirk:["Genio", "Detective", "Memoria Eidética","Dominio de artes marciales y técnicas de sigilo e intimidación", "Uso de equipamiento, dispositivos y armamento de alta tecnología"]},
      { id: 14, name: 'Saitama', quirk:["Fuerza sobrehumana", "Velocidad increíble", "Gran agilidad", "Increíble resistencia", "Sentido de percepción"] },
      { id: 15, name: 'Deku', quirk:["One For All"]} ,
      { id: 16, name: 'Danger Duck', quirk:["Teletransportación", "Huevos mágicos de diversos materiales" ,"Fuego","Controlar el agua"] },
      { id: 17, name: 'Superman', quirk:["Súper fuerza, velocidad, resistencia, agilidad, reflejos, durabilidad, sentidos y longevidad","Súper Audición","Poderes oculares:Agudeza sobrehumana, Visión de calor, Visión del espectro electromagnético, Visión microscópica, Visión de rayos X, Visión telescópica, Visión infrarroja","Aliento sobrehumano: Aliento helado , Aliento de viento", "Invulnerabilidad","Factor de curación rápida","Vuelo" ] },
      { id: 18, name: 'Samurai Jack', quirk:["Eternidad/Longevidad Mejorada" ,"Empatía Animal","Astucia","Habilidades de Caza/Supervivencia", "Maestro Arquero", "Maestro Tirador", "Artista Marcial Maestro", "Maestro de armas","Maestro en el Manejo de la Espada","Intuición del vehículo","Multilingüe","Ninjutsu","Saltos Sobrehumanos", "Acondicionamiento humano máximo", "Máxima Agilidad Humana","Máxima resistencia humana", "Reflejos Sobrehumanos","Velocidad Humana Máxima","Máxima Fuerza Humana","Fuerza de Voluntad"] },
      { id: 19, name: 'Ace Bunny', quirk:["Ojos láser" , "Escaneo","Rayo infrarojo"] },
      { id: 20, name: 'Tornado rojo', quirk:["Manipulación del viento","Cambio de Androide a la forma humana a voluntad", "Fuerza sobrehumana, durabilidad, audición e intelecto", "hacker de computadora"] }
    ];
    return {heroes};
  }
  

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}