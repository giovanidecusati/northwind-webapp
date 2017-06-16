import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Root
import { AppComponent } from './app.component';

// Components
import { TopbarComponent } from './components/topbar/topbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SubmenuComponent } from './components/submenu/submenu.component';

// Rotas
import { Routing, RoutingProviders } from './app.routing';

// Services
import { AuthService } from './services/auth.service';

// Pages
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    HomePageComponent,
    TopbarComponent,
    FooterComponent,
    SubmenuComponent,
    ProductsPageComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    Routing
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
