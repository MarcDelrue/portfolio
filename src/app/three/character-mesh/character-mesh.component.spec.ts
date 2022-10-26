import { ComponentFixture, TestBed } from "@angular/core/testing";

import { CharacterMeshComponent } from "./character-mesh.component";

describe("CharacterMeshComponent", () => {
  let component: CharacterMeshComponent;
  let fixture: ComponentFixture<CharacterMeshComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CharacterMeshComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CharacterMeshComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
