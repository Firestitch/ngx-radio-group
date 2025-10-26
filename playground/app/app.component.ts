import { Component } from '@angular/core';
import { environment } from '../environments/environment';
import { FsExampleModule } from '@firestitch/example';
import { HorizontalComponent } from './components/horizontal/horizontal.component';
import { VerticalComponent } from './components/vertical/vertical.component';
import { VerticalMultilineComponent } from './components/vertical-multiline/vertical-multiline.component';


@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    standalone: true,
    imports: [FsExampleModule, HorizontalComponent, VerticalComponent, VerticalMultilineComponent]
})
export class AppComponent {
  public config = environment;
}
