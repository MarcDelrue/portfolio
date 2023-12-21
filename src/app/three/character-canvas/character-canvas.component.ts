import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-character-canvas",
  templateUrl: "./character-canvas.component.html",
  styleUrls: ["./character-canvas.component.scss"],
  host: { style: "height: 300px; width: 300px; display: block" },
})
export class CharacterCanvasComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
