import { ChangeDetectionStrategy, Component, signal } from "@angular/core";
import { RouterOutlet } from "@angular/router";

@Component({
	selector: "app-root",
	imports: [RouterOutlet],
	templateUrl: "./app.component.html",
	styleUrl: "./app.component.css",
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
	title = "signals";
	userStatus = signal<"online" | "offline">("offline");

	goOnline() {
		this.userStatus.set("online");
	}
	goOffline() {
		this.userStatus.set("offline");
	}
	toggleStatus() {
		this.userStatus.update((current) =>
			current === "offline" ? "online" : "offline",
		);
	}
}
