import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
const NgZorroMaterialComponents = [
  NzPageHeaderModule,
  NzMenuModule,
  NzIconModule,
  NzLayoutModule,
  NzCarouselModule
]



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgZorroMaterialComponents
  ],
  exports:[NgZorroMaterialComponents]
})
export class NgzorroModule { }
