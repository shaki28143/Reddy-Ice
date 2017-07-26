import { debug } from 'util';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
@Component(
    {
        selector: 'donought-chart',
        template: `
            <div><label>Routes</label> <canvas #donoughtChart width="100px" height="100px"></canvas></div>            
        `
    }
)
export class DonoughtChart implements AfterViewInit {
    @ViewChild('donoughtChart') donoughtChart: ElementRef;

    ngAfterViewInit() {
        var myChart = new Chart(this.donoughtChart.nativeElement, {
            type: 'doughnut',
            data: {
                datasets: [{
                    data: [
                        25,
                        35,
                        15,
                        25
                    ],
                    backgroundColor: [
                        'pink',
                        'orange',
                        'magenta',
                        'cyan'
                    ],
                    label: 'Dataset 1'
                }],
                labels: [
                    "Red",
                    "Orange",
                    "Yellow",
                    "Green"
                ]
            },
            options: {
                responsive: true
            }
        });
    }

}