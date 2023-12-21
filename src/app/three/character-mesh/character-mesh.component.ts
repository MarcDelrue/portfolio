import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import {
  NgtObjectProps,
  provideNgtObject,
  provideObjectHostRef,
  provideObjectRef,
} from "@angular-three/core";
import * as THREE from "three";
import { NgtGLTFLoader } from "@angular-three/soba/loaders";
import { Observable } from "rxjs";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";

const characterNodesAndMaterials = [
  "Hips",
  "Wolf3D_Body",
  "Wolf3D_Glasses",
  "Wolf3D_Hair",
  "Wolf3D_Outfit_Bottom",
  "Wolf3D_Outfit_Footwear",
  "Wolf3D_Outfit_Top",
  "EyeLeft",
  "EyeRight",
  "Wolf3D_Head",
  "Wolf3D_Teeth",
  "Wolf3D_Skin",
] as const;

type characterNodeAndMaterial = typeof characterNodesAndMaterials[number];

interface CharacterGLB extends GLTF {
  nodes: { [key: string]: THREE.Mesh } | undefined;
  materials: { [key: string]: THREE.Material } | undefined;
}

@Component({
  selector: "app-character-mesh",
  templateUrl: "./character-mesh.component.html",
  styleUrls: ["./character-mesh.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    provideNgtObject(CharacterMeshComponent),
    provideObjectRef(CharacterMeshComponent),
    provideObjectHostRef(CharacterMeshComponent),
  ],
})
export class CharacterMeshComponent extends NgtObjectProps<THREE.Group> {
  readonly encoding = THREE.LinearEncoding;
  private gltfLoader = inject(NgtGLTFLoader);
  readonly character$: Observable<CharacterGLB> = this.gltfLoader.load(
    "assets/3Dmodels/typingWithTexture.glb"
  ) as unknown as Observable<CharacterGLB>;
}
