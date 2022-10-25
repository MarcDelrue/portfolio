import { ComponentFixture, TestBed } from "@angular/core/testing";

import { CharacterSceneComponent } from "./character-scene.component";

describe("CharacterSceneComponent", () => {
  let component: CharacterSceneComponent;
  let fixture: ComponentFixture<CharacterSceneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CharacterSceneComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CharacterSceneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
