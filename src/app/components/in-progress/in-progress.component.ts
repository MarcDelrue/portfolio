import { Component, OnInit } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-in-progress",
  templateUrl: "./in-progress.component.html",
  styleUrls: ["./in-progress.component.scss"],
})
export class InProgressComponent implements OnInit {
  step: number = 0;
  finalText: string[] = [
    this.translate.instant("IN_PROGRESS.FIRST_LINE"),
    this.translate.instant("IN_PROGRESS.SECOND_LINE"),
    this.translate.instant("IN_PROGRESS.THIRD_LINE"),
  ];
  linkedIn =
    `<u><a href="https://www.linkedin.com/in/marc-delrue">` +
    this.translate.instant("IN_PROGRESS.LINKEDIN") +
    `</a></u> 🌐`;
  loadedText: string[] = [];
  showPromptIndicator: boolean = true;
  interval: number | undefined;

  constructor(private translate: TranslateService) {}

  async ngOnInit(): Promise<void> {
    await this.generateFinalText();
    this.step += 1;
    this.loadedText[1] = this.finalText[1];
    this.step += 1;
    await this.generateFinalText();
    this.step += 1;
  }

  randomIntFromInterval(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  async generateFinalText() {
    return new Promise((resolve) => {
      let atChar = 0;
      this.loadedText[this.step] = "";
      const interval = setInterval(() => {
        if (atChar === this.finalText[this.step].length - 1) {
          clearInterval(interval);
          this.blinkingPrompt();
          setTimeout(() => resolve(""), 1000);
        }
        this.loadedText[this.step] += this.finalText[this.step][atChar];
        atChar += 1;
      }, this.randomIntFromInterval(50, 150));
    });
  }

  blinkingPrompt() {
    this.interval = setInterval(() => {
      this.showPromptIndicator = !this.showPromptIndicator;
    }, 500);
  }
}
