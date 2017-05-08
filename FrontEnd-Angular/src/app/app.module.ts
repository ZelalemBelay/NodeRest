import { RouterModule } from '@angular/router';
import { AppComponent } from './app.comonent';

import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpModule, JsonpModule } from "@angular/http"
import { TestComponent } from "./test/test.component";
import { TestService } from "./test/test.service";

@NgModule({
    imports: [BrowserModule,
              HttpModule,
              JsonpModule,
              RouterModule.forRoot(
                                [
                                            {path: 'testFrontEnd', component: TestComponent},
                                            {path: '**', redirectTo: "testFrontEnd", pathMatch: 'full'}
                                ])
         
    ],  //tells application that its going to be used in a browser.
    declarations: [
        AppComponent,
        TestComponent
            ],

    providers: [
        TestService,
    ],

    bootstrap: [AppComponent]
})
export class AppModule{
        
}