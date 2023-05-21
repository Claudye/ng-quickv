# NgQuickv

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.0.

This project was used with Quickv version 1.2.2

See the [Live demo](https://angulat-quickv.vercel.app/) here

## Installation
After clone, install the project dependencies with:
```bash
  npm install
```
This command will install the project dependencies, `Quickv` included.

Bootstrap 5 cdn is used for default apparence styles

## Run the project
Run ng serve for a dev server. Navigate to http://localhost:4200/. The application will automatically reload if you change any of the source files.

## Architecture
I create a module named quickv that is in the source directory `/src/app/quickv` and I export it into the  `AppModule`

## Note
Quickv is an attribute-based package that provides form validation functionality. As part of the integration with Angular, I've created directives that allow `Quickv` attributes to be changed using the "qv-" prefix instead of "data-qv-" for brevity.

The main directive is "quickv", which is used to select all forms and attach a QvForm instance to them. This allows you to take advantage of Quickv's validation features within Angular forms.

Ex:
```ts
import { AfterViewInit, Directive, ElementRef } from '@angular/core';
import { QvForm } from 'quickv';

@Directive({
  selector: 'form',
})
export class QuickvDirective implements AfterViewInit {
  constructor(private refElement: ElementRef<HTMLElement>) {}
  
  ngAfterViewInit(): void {
    const qvForm = new QvForm(this.refElement.nativeElement);
    qvForm.init();
  }
}
```

Here is an example of qv-rules attribute directive
```ts
import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[qv-rules]',
})
export class QvRulesDirective {
  @Input('qv-rules') qvRules: string = '';

  @HostBinding('attr.data-qv-rules') get qvRulesValues() {
    return this.qvRules;
  }
}
```

The full HTML Code

```html
<div class="bg-light vh-100 py-5">
  <form class="col-sm-7 mx-auto bg-white rounded p-3 shadow">
    <h3>
      Testing <a href="https://github.com/quick-v/quickv">Quickv</a> in Angular
    </h3>
    <div class="row mb-2">
      <div class="col">
        <div class="">
          <label class="form-label">First name</label>
          <input
            name="first_name"
            qv-rules="required|startWithUpper|minlength:2|maxlength:32"
            type="text"
            class="form-control"
            placeholder="required|startWithUpper|minlength:2|maxlength:32"
          />
          <div class="invalid-feedback" qv-feedback="first_name"></div>
        </div>
      </div>
      <div class="col">
        <div class="">
          <label class="form-label">Age</label>
          <input
            name="age"
            qv-rules="required|int|min:18|max:35"
            type="text"
            class="form-control"
            placeholder="required|int|min:18|max:35"
          />
          <div class="invalid-feedback" qv-feedback="age"></div>
        </div>
      </div>
    </div>

    <!-- Text input -->
    <div class="mb-2">
      <label class="form-label">Company name</label>
      <input
        type="text"
        name="company"
        qv-rules="required|startWith:@|minlength:3|maxlength:20"
        class="form-control"
      />
      <div class="invalid-feedback" qv-feedback="company"></div>
    </div>

    <!-- Text input -->
    <div class="mb-2">
      <label class="form-label">Cv</label>
      <input
        type="file"
        name="cv"
        qv-rules="required|file|maxFileSize:3MB|minFileSize:1MB"
        class="form-control"
      />
      <div class="invalid-feedback" qv-feedback="cv"></div>
    </div>

    <button type="submit" qv-submit class="btn btn-primary btn-block mb-2">
      Submit
    </button>
  </form>
  <div class="text-center mt-3">
    <a href="https://github.com/Claudye/ng-quickv">
      Source code is availlable on GitHub</a
    >
  </div>
</div>
```
 
### Credits

These project were developed by [Claude Fassinou](https://github.com/Claudye) for [Quickv](https://github.com/quick-v).

**_Happy coding_**
