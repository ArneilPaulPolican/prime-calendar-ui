import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { CanActivate } from "@angular/router";

@Injectable()
export class ApplicationRouterActivate implements CanActivate {
    constructor(
        private router: Router
    ) { }

    canActivate() {
        // if (sessionStorage.getItem("access_token") == null) {
        //     this.router.navigate(["/landing"]);
        //     return false;
        // } else {
            return true;
        // }
    }
}