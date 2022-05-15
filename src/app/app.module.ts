import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';
import { Component404 } from './component404/component404.component';

interface configSpec {
    routes: any
}
@NgModule({
  declarations: [
        AppComponent,
  ],
  imports: [
      HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
    private configFileUrl: string = "http://localhost:4200/assets/config.json";
    constructor(private http: HttpClient, private router: Router) {
        this.http.get<configSpec>(this.configFileUrl).subscribe(data => {
            for (let route in data.routes) {
                route = data.routes[route];
                let routeItem: any = route;
                this.router.config.push({
                    path: routeItem.path,
                    loadChildren: () =>
                        loadRemoteModule(routeItem.module).then(m => m[routeItem.name]).catch(e => {
                            console.log(e);
                            return import('src/app/moduledne/moduledne.module').then(m => m.ModuledneModule);
                        })
                });
            }
        });
        //this.router.config.push({ path: '**', component: Component404 })


    }
}
