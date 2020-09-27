import { SlidesComponent } from "./slides/slides.component";
import { StartComponent } from "./start/start.component";
import { LogoComponent } from "./logo/logo.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [LogoComponent, StartComponent, LogoComponent, SlidesComponent],
  exports: [LogoComponent, StartComponent, LogoComponent, SlidesComponent],
  imports: [CommonModule],
})
export class ComponentsModule {}
