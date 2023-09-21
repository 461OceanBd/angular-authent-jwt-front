import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePage } from './home.page';
import { HeaderComponent } from 'src/app/components/header/header.component';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomePage, HeaderComponent]
    });
    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
