import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { provideHttpClient, HttpClientModule } from '@angular/common/http'; // Import HttpClientModule

import { AppComponent } from './app.component';
import { PostListComponent } from './post-list.component'; // Ensure this import exists

@NgModule({
    declarations: [
        AppComponent,
        PostListComponent // Ensure this declaration exists
    ],
    imports: [
        BrowserModule,
        HttpClientModule // Add HttpClientModule here
    ],
    providers: [
        provideHttpClient()
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
