import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule} from '@angular/common/http/testing'

import { PokemonsComponent } from './pokemons.component';
import { DataService } from './../services/data.service'

describe('PokemonsComponent', () => {
  let component: PokemonsComponent;
  let fixture: ComponentFixture<PokemonsComponent>;
  let service: DataService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonsComponent ],
      imports: [
        HttpClientTestingModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonsComponent);
    service = TestBed.inject(DataService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
