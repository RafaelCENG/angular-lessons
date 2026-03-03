import {
	ChangeDetectionStrategy,
	Component,
	computed,
	linkedSignal,
	signal,
} from "@angular/core";
import { RouterOutlet } from "@angular/router";

@Component({
	selector: "app-root",
	imports: [RouterOutlet],
	templateUrl: "./signals-tutorial.component.html",
	styleUrl: "./signals-tutorial.component.css",
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
	title = "signals";
	userStatus = signal<"online" | "offline" | "away">("offline");
	notificationsEnabled = linkedSignal(() => this.userStatus() === "online");
	goOnline() {
		this.userStatus.set("online");
	}
	goOffline() {
		this.userStatus.set("offline");
	}
	goAway() {
		this.userStatus.set("away");
	}

	toggleStatus() {
		this.userStatus.update((current) =>
			current === "offline" ? "online" : "offline",
		);
	}
	toggleNotifications() {
		this.notificationsEnabled.set(!this.notificationsEnabled());
	}
	statusMessage = computed(() => {
		const status = this.userStatus();
		switch (status) {
			case "online":
				return "Available for meetings and messages";
			case "away":
				return "Temporarily away, will respond soon";
			case "offline":
				return "Not available, check back later";
			default:
				return "Status unknown";
		}
	});

	isWithinWorkingHours = computed(() => {
		const now = new Date();
		const hour = now.getHours();
		const isWeekday = now.getDay() > 0 && now.getDay() < 6;
		return (
			isWeekday && hour >= 9 && hour < 17 && this.userStatus() !== "offline"
		);
	});
}
