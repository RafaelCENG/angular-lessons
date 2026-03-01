import { Component, input } from "@angular/core";
import { RouterLink, RouterOutlet } from "@angular/router";
import type { HousingLocationInfo } from "../housinglocation";

@Component({
	selector: "app-housing-location",
	imports: [RouterLink, RouterOutlet],
	templateUrl: "./housing-location.component.html",
	styleUrl: "./housing-location.component.css",
})
export class HousingLocationComponent {
	housingLocation = input.required<HousingLocationInfo>();
}
