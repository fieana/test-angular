/// <reference types="web-bluetooth" />
import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'test-angular';
	constructor() {
	}
	ngOnInit() {

	}
	async requestBluetooth() {
		let bluetooth = navigator.bluetooth.requestDevice({ acceptAllDevices: true }).catch((error) => console.error(error))
		console.log(bluetooth)
	}
}
