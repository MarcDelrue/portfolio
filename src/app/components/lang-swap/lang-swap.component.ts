import { Component, OnInit } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-lang-swap",
  templateUrl: "./lang-swap.component.html",
  styleUrls: ["./lang-swap.component.scss"],
})
export class LangSwapComponent implements OnInit {
  swapTo: { img: string; code: string };
  LANG = [
    {
      img: "assets/img/flags/france.png",
      code: "fr-FR",
    },
    {
      img: "assets/img/flags/etats-unis.png",
      code: "en-US",
    },
  ];

  constructor(private translate: TranslateService) {
    this.swapTo =
      this.LANG.find((el) => el.code !== this.translate.currentLang) ??
      this.LANG[0];
  }

  ngOnInit(): void {}

  swapLang() {
    this.translate.use(this.swapTo.code);
    this.swapTo =
      this.LANG.find((el) => el.code !== this.swapTo.code) ?? this.LANG[0];
  }
}
