import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IllustrationsService } from './illustrations.service';
import { IllustrationsComponent } from './illustrations.component';
import { IllustrationComponent } from './illustration/illustration.component';

@NgModule({
  declarations: [IllustrationsComponent, IllustrationComponent],
  providers: [IllustrationsService],
  imports: [CommonModule],
  exports: [IllustrationsComponent],
})
export class IllustrationsModule {}
