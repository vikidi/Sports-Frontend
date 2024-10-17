import { DatePipe } from '@angular/common';
import {
  Component,
  Input,
  OnInit,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { orderBy } from 'lodash';
import { ChartComponent, NgApexchartsModule } from 'ng-apexcharts';
import { Group } from 'src/app/models/group.model';
import { StyleManager } from 'src/app/services/style-manager.service';
import { PacePipe } from 'src/app/shared/pipes/pace.pipe';
import { movingAverage } from 'src/app/utils/movingAverage';

@Component({
  selector: 'app-group-charts',
  standalone: true,
  templateUrl: './group-charts.component.html',
  styleUrls: ['./group-charts.component.scss'],
  imports: [FlexLayoutModule, NgApexchartsModule],
  encapsulation: ViewEncapsulation.None,
})
export class GroupChartsComponent implements OnInit {
  @Input() group!: Group;

  public movingAveCadence: any[] = [];
  public movingAveWatts: any[] = [];

  public paceChart: any;
  public heartRateChart: any;
  public cadenceChart: any;
  public wattsChart: any;
  public commonOptions: any;

  @ViewChild('chart') chart!: ChartComponent;

  constructor(private readonly styleManager: StyleManager) {
    const initMode = this.styleManager.isInitDark() ? 'dark' : 'light';
    this.commonOptions = {
      stroke: {
        curve: 'smooth',
        width: 1,
      },
      markers: {
        size: [2, 5],
      },
      legend: {
        show: false,
      },
      xaxis: {
        labels: {
          formatter: this.dateFormatter,
        },
      },
      theme: {
        mode: initMode,
      },
      tooltip: {
        theme: initMode,
      },
    };

    this.styleManager.isDark().subscribe((value) => {
      const mode = value ? 'dark' : 'light';
      this.chart?.updateOptions({
        theme: {
          mode: mode,
        },
        tooltip: {
          theme: mode,
        },
      });
    });
  }

  ngOnInit() {
    const orderedData = orderBy(
      this.group.exercises,
      ['startingEpoch'],
      ['asc']
    );

    const heartRates = orderedData.map((e) => e.averageHeartRate);
    this.heartRateChart = {
      series: [
        {
          name: 'Moving Average',
          type: 'line',
          data: movingAverage(heartRates).map((val, i) => {
            return {
              y: val,
              x: orderedData[i].parsedDate,
            };
          }),
        },
        {
          name: 'Heart Rate',
          type: 'scatter',
          data: heartRates.map((val, i) => {
            return {
              y: val,
              x: orderedData[i].parsedDate,
            };
          }),
        },
      ],
      title: {
        text: 'Heart Rate',
      },
      yaxis: {
        reversed: true,
        labels: {
          formatter: (val: number) => Math.floor(val),
        },
      },
      chart: {
        id: 'heartrate',
        height: 350,
        group: 'averageCharts',
      },
    };

    const paces = orderedData.map((e) => e.averagePace);
    this.paceChart = {
      series: [
        {
          name: 'Moving Average',
          type: 'line',
          data: movingAverage(paces).map((val, i) => {
            return {
              y: val,
              x: orderedData[i].parsedDate,
            };
          }),
        },
        {
          name: 'Pace',
          type: 'scatter',
          data: paces.map((val, i) => {
            return {
              y: val,
              x: orderedData[i].parsedDate,
            };
          }),
        },
      ],
      title: {
        text: 'Pace',
      },
      yaxis: {
        reversed: true,
        labels: {
          formatter: this.paceFormatter,
        },
      },
      chart: {
        id: 'pace',
        height: 350,
        group: 'averageCharts',
      },
    };

    const cadences = orderedData.map((e) => e.averageCadence);
    this.cadenceChart = {
      series: [
        {
          name: 'Moving Average',
          type: 'line',
          data: movingAverage(cadences).map((val, i) => {
            return {
              y: val,
              x: orderedData[i].parsedDate,
            };
          }),
        },
        {
          name: 'Cadence',
          type: 'scatter',
          data: cadences.map((val, i) => {
            return {
              y: val,
              x: orderedData[i].parsedDate,
            };
          }),
        },
      ],
      title: {
        text: 'Cadence',
      },
      yaxis: {
        labels: {
          formatter: (val: number) => Math.floor(val * 2),
        },
      },
      chart: {
        id: 'cadence',
        height: 350,
        group: 'averageCharts',
      },
    };

    this.movingAveWatts = movingAverage(orderedData.map((e) => e.averageWatts));
    const watts = orderedData.map((e) => e.averageWatts);
    this.wattsChart = {
      series: [
        {
          name: 'Moving Average',
          type: 'line',
          data: movingAverage(watts).map((val, i) => {
            return {
              y: val,
              x: orderedData[i].parsedDate,
            };
          }),
        },
        {
          name: 'Watts',
          type: 'scatter',
          data: watts.map((val, i) => {
            return {
              y: val,
              x: orderedData[i].parsedDate,
            };
          }),
        },
      ],
      title: {
        text: 'Watts',
      },
      yaxis: {
        labels: {
          formatter: (val: number) => Math.floor(val),
        },
      },
      chart: {
        id: 'watts',
        height: 350,
        group: 'averageCharts',
      },
    };
  }

  dateFormatter(date: string): string {
    const datePipe = new DatePipe('en-US');
    let formatted = datePipe.transform(date, 'd.M.');
    return formatted ?? date;
  }

  paceFormatter(pace: number): string {
    const datePipe = new PacePipe();
    let formatted = datePipe.transform(pace);
    return formatted || pace.toString();
  }
}
