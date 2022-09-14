import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-in-progress",
  templateUrl: "./in-progress.component.html",
  styleUrls: ["./in-progress.component.scss"],
})
export class InProgressComponent implements OnInit {
  step: number = 0;
  finalText: string[] = [
    `Website currently in progress ... 👨‍💻`,
    "zsh: command not found: Website",
    `You can still check my `,
  ];
  linkedIn = `<u><a href="https://www.linkedin.com/in/marc-delrue">LinkedIn</a></u>`;
  loadedText: string[] = [];
  showPromptIndicator: boolean = true;
  interval: number | undefined;

  constructor() {}

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
