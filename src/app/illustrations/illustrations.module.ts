import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IllustrationsComponent } from './illustrations.component';
import { IllustrationComponent } from './illustration/illustration.component';

@NgModule({
  declarations: [IllustrationsComponent, IllustrationComponent],
  imports: [CommonModule],
  exports: [IllustrationsComponent],
})
export class IllustrationsModule {}
