import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { App } from "./app"
import { Header } from "./header/header";
import { User } from "./user/user";
import { SharedModule } from "./shared/shared.module";
import { TasksModule } from "./tasks/tasks.module";

/*
BrowserModule ist ein speziales module, das nur in das root-module importiert.
*/

@NgModule({
    declarations: [App, Header, User], //alle komponeneten deklarieren, registrieren, die zusammenarbeiten müssen. können auch directiven stat componenten sein. sind keine eigensctändige komponenten
    bootstrap: [App], //Angular weißt dass es mein Stammkomponente ist, mit dem ich starten möchte
    imports: [BrowserModule, SharedModule, TasksModulej] //eigenständige Komponenten 
})
export class AppModule {

}