import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpApiService } from "../http-api.service";
import { LoginDto } from "./LoginDto";
import { LoginApiRoutes } from "./LoginRoutes";


@Injectable()
export class LoginService {
	constructor(public httpService: HttpApiService) {
	}

	public login(
		request: LoginDto,
		cancellationSubject: Observable<void>
	): Observable<LoginDto> {
		return this.httpService.post<LoginDto>(
			`${LoginApiRoutes.Root}/${LoginApiRoutes.Login}`,
			request,
			cancellationSubject
		);
	}
}
