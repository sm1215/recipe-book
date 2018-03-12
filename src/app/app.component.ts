import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

}

/*
*
* Root: General Component Container
* |
* |- Header: Component Controller for 2 views
* |
* |- Shopping List: Feature
* |--|
* |--|- Shopping List: Component
* |--|- Shopping List Edit: Component
* |--|- Ingredient: Model
* |
* |- Recipe Book: Feature
* |--|
* |--|- Recipe List: Component
* |--|- Recipe Item: Component
* |--|- Recipe Detail: Component
* |--|- Recipe: Model
*
*/
