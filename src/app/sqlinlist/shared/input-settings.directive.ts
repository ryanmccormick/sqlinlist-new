import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appInputSettings]'
})
export class InputSettingsDirective {

  constructor() { }

  @HostBinding('attr.spellcheck')
  handleSpellCheck() {
    return false;
  }

}
