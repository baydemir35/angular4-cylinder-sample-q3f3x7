import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  id = 'chart1';
  width = 600;
  height = 400;
  type = 'cylinder';
  dataFormat = 'json';
  dataSource;
  title = 'Cylinder Sample';

  constructor() {
    this.dataSource = {
      "chart": {
        "caption": "Fuel Meter",
        "subcaption": "Diesel level in generator Bakersfield Central",
        "subcaptionFontBold": "0",
        "lowerLimit": "0",
        "upperLimit": "120",
        "lowerLimitDisplay": "Empty",
        "upperLimitDisplay": "Full",
        "numberSuffix": " ltrs",
        "showValue": "0",
        "showhovereffect": "1",
        "bgCOlor": "#ffffff",
        "borderAlpha": "0",
        "cylFillColor": "#008ee4"
      },
      "value": "110"
    }
  }
}