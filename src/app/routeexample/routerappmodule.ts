import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { StartComponent } from "./start.component"; import { BrowserModule } from "@angular/platform-browser";
import { AComponent } from "./a.component";
import { BComponent } from "./b.component";
import { CComponent } from "./c.component";
import { LoginComponent } from "./login.component";
import { routes } from './route.config'
@NgModule({
    declarations: [LoginComponent, StartComponent, AComponent, BComponent, CComponent],
    imports: [BrowserModule, RouterModule.forRoot(routes)],
    providers: [],
    bootstrap: [StartComponent]
})
export class RouterAppModule {

}