import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RideinfoPage } from './rideinfo.page';

describe('RideinfoPage', () => {
  let component: RideinfoPage;
  let fixture: ComponentFixture<RideinfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RideinfoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RideinfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
