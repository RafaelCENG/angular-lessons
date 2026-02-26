import { Component } from "@angular/core";
import { HousingLocationComponent } from "../housing-location/housing-location.component";
import type { HousingLocationInfo } from "../housinglocation";

@Component({
	selector: "app-home",
	imports: [HousingLocationComponent],
	templateUrl: "./home.component.html",
	styleUrls: ["./home.component.css"],
})
export class HomeComponent {
	readonly baseUrl = "https://angular.dev/assets/images/tutorials/common";
	housingLocation: HousingLocationInfo = {
		id: 9999,
		name: "Test Home",
		city: "Test city",
		state: "ST",
		photo: `${this.baseUrl}/example-house.jpg`,
		availableUnits: 99,
		wifi: true,
		laundry: false,
	};
}
