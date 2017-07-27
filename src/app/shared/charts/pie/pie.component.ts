import { debug } from 'util';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
@Component(
    {
        selector: 'pie-chart',
        template: `
            <div><label>Routes</label><canvas #pieChart width="100" height="100"></canvas></div>
        `
    }
)
export class PieChart implements AfterViewInit {
    @ViewChild('pieChart') pieChart: ElementRef;

    ngAfterViewInit() {
        var myChart = new Chart(this.pieChart.nativeElement, {
            type: 'pie',
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
                    "Walmart",
                    "D-Mart",
                    "711",
                    "Brand"
                ]
            },
            options: {
                responsive: true
            }
        });
    }

}