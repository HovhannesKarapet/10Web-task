import {NgModule} from "@angular/core";
import {NoSanitizePipe} from "./pipes/no-sanitize.pipe";

@NgModule({
  declarations: [
    NoSanitizePipe
  ],
  exports: [
    NoSanitizePipe
  ]
})
export class SharedModule {

}
