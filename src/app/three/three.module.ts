import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CharacterCanvasComponent } from "./character-canvas/character-canvas.component";
import { CharacterMeshComponent } from "./character-mesh/character-mesh.component";
import { NgtCanvas } from "@angular-three/core";
import { NgtMesh, NgtSkinnedMesh } from "@angular-three/core/meshes";
import { NgtBoxGeometry } from "@angular-three/core/geometries";
import {
  NgtMeshBasicMaterial,
  NgtMeshStandardMaterial,
} from "@angular-three/core/materials";
import { NgtSobaOrbitControls } from "@angular-three/soba/controls";
import { NgtGroup } from "@angular-three/core/group";
import { NgtValueAttribute } from "@angular-three/core/attributes";
import { NgtPrimitive } from "@angular-three/core/primitive";

@NgModule({
  declarations: [CharacterCanvasComponent, CharacterMeshComponent],
  imports: [
    CommonModule,
    NgtCanvas,
    NgtMesh,
    NgtBoxGeometry,
    NgtMeshBasicMaterial,
    NgtSobaOrbitControls,
    NgtGroup,
    NgtValueAttribute,
    NgtMeshStandardMaterial,
    NgtPrimitive,
    NgtSkinnedMesh,
  ],
  exports: [CharacterCanvasComponent],
})
export class ThreeModule {}
