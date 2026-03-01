import { ChangeDetectorRef, Component, inject } from "@angular/core";
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
	changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
	filteredLocationList: HousingLocationInfo[] = [];

	filterResults(text: string) {
		if (!text) {
			this.filteredLocationList = this.housingLocationList;
			return;
		}
		this.filteredLocationList = this.housingLocationList.filter(
			(housingLocation) =>
				housingLocation?.city.toLowerCase().includes(text.toLowerCase()),
		);
	}
	constructor() {
		this.housingService
			.getAllHousingLocations()
			.then((housingLocationList: HousingLocationInfo[]) => {
				this.housingLocationList = housingLocationList;
				this.filteredLocationList = housingLocationList;
				this.changeDetectorRef.markForCheck();
			});
	}
}
