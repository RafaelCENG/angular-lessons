import { Component } from "@angular/core";
import { RouterLink, RouterOutlet } from "@angular/router";
import { HomeComponent } from "./home/home.component";

@Component({
	selector: "app-root",
	imports: [RouterOutlet, HomeComponent, RouterLink],
	templateUrl: "./app.component.html",
	// template: ` <h1>Hello world!</h1> `,
	styleUrl: "./app.component.css",
})
export class AppComponent {
	title = "first-app";
}
