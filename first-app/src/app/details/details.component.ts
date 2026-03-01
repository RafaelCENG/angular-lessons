import { Component, inject } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { HousingService } from "../housing.service";
import type { HousingLocationInfo } from "../housinglocation";
@Component({
	selector: "app-details",
	imports: [],
	templateUrl: "./details.component.html",
	styleUrl: "./details.component.css",
})
export class DetailsComponent {
	route: ActivatedRoute = inject(ActivatedRoute);
	housingService = inject(HousingService);
	housingLocation: HousingLocationInfo | undefined;
	constructor() {
		const housingLocationId = Number(this.route.snapshot.params["id"]);
		this.housingLocation =
			this.housingService.getHousingLocationById(housingLocationId);
	}
}
