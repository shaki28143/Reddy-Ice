import { debug } from 'util';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
@Component(
    {
        selector: 'line-chart',
        template: `
            <div><label>Routes</label> <canvas #lineChart width="100px" height="100px"></canvas></div>            
        `
    }
)
export class LineChart implements AfterViewInit {
    @ViewChild('lineChart') lineChart: ElementRef;

    ngAfterViewInit() {
        var myChart = new Chart(this.lineChart.nativeElement, {
            type: 'line',
            data: {
                labels: ["Route 1", "Route 2", "Route 3", "Route 4"],
                datasets: [{
                    label: "Routes details",
                    backgroundColor: 'cyan',
                    borderColor: 'cyan',
                    fill: false,
                    data: [
                        21,
                        54,
                        32,
                        25
                    ],
                }]
            },
            options: {
                responsive: true,
                title: {
                    display: true,
                    text: 'Routes'
                },
                scales: {
                    xAxes: [{
                        display: true,
                    }],
                    yAxes: [{
                        display: false,
                        type: 'logarithmic',
                    }]
                }
            }
        });
}

}