import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.page.html',
  styleUrls: ['./first.page.scss'],
})
export class FirstPage implements OnInit {

  constructor() { }

  ngOnInit() {
    this.useAngularLibrary();
  }
  pieChartData;
  
  useAngularLibrary(){
    this.pieChartData = {
      chartType: 'PieChart',
      dataTable: [
        ['Languages', 'Percnet'],
        ['Ionic', 33],
        ['Angular', 33],
        ['JavaScript',33]
      ],
      options: {
        'title': 'Technologies',
       'width': 400,
       'height': 300
      }

    };
  }

}
