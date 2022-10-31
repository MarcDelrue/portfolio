import { ComponentFixture, TestBed } from "@angular/core/testing";

import { LangSwapComponent } from "./lang-swap.component";

describe("LangSwapComponent", () => {
  let component: LangSwapComponent;
  let fixture: ComponentFixture<LangSwapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LangSwapComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LangSwapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
