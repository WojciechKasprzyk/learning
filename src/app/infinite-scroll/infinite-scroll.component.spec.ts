import { ItemsService } from './../items.service';
import { MatTabsModule, MatListModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfiniteScrollComponent } from './infinite-scroll.component';

describe('InfiniteScrollComponent', () => {
  let component: InfiniteScrollComponent;
  let fixture: ComponentFixture<InfiniteScrollComponent>;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfiniteScrollComponent ],
      imports: [
        InfiniteScrollModule,
        BrowserAnimationsModule,
        MatTabsModule,
        MatListModule
      ],
      providers: [ ItemsService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfiniteScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
