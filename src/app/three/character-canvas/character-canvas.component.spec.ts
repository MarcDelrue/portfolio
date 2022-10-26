import { ComponentFixture, TestBed } from "@angular/core/testing";

import { CharacterCanvasComponent } from "./character-canvas.component";

describe("CharacterCanvasComponent", () => {
  let component: CharacterCanvasComponent;
  let fixture: ComponentFixture<CharacterCanvasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CharacterCanvasComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CharacterCanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
