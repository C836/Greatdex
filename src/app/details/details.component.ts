import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent{
  @Input() item:any = {};
  @Input() hide!: any;

  pokemonStats = ['HP', 'ATK', 'DEF','S.ATK', 'S.DEF', 'SPD']
  STATS_PERCENTAGE: number = 0.39

  constructor() { }
}
