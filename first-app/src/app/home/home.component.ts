import { Component, inject } from "@angular/core";
import { HousingService } from "../housing.service";
import { HousingLocationComponent } from "../housing-location/housing-location.component";
import type { HousingLocationInfo } from "../housinglocation";

@Component({
	selector: "app-home",
	imports: [HousingLocationComponent],
	templateUrl: "./home.component.html",
	styleUrls: ["./home.component.css"],
})
export class HomeComponent {
	housingLocationList: HousingLocationInfo[] = [];
	housingService: HousingService = inject(HousingService);
	constructor() {
		this.housingLocationList = this.housingService.getAllHousingLocations();
	}
}
