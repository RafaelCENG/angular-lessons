// TODO: Add the resource import from @angular/core
import {
	ChangeDetectionStrategy,
	Component,
	computed,
	ResourceStatus,
	resource,
	signal,
} from "@angular/core";
import { getUserData } from "./user-api";

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.css"],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
	// TODO: Create a signal for userId
	userId = signal(1);
	// TODO: Create a resource for user data
	userResource = resource({
		request: () => ({ id: this.userId() }),
		loader: (params) => getUserData(params.request.id),
	});
	// TODO: Create computed signals for resource states
	isLoading = computed(
		() => this.userResource.status() === ResourceStatus.Loading,
	);
	hasError = computed(
		() => this.userResource.status() === ResourceStatus.Error,
	);
	// TODO: Add loadUser method

	// TODO: Add reloadUser method
	loadUser(id: number) {
		this.userId.set(id);
	}
	reloadUser() {
		this.userResource.reload();
	}
}
