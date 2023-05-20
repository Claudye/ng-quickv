# NgQuickv

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.0.

## Installation
After clone, install the project dependencies with:
```bash
  npm install
```
In the main index.html file, you should have the importing of the quickv source code
```html
 <script src="assets/quickv.js"></script>
```

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

@Directive({
  selector: 'form',
})
export class QuickvDirective implements AfterViewInit {
  constructor(private refElement: ElementRef<HTMLElement>) {}
  
  ngAfterViewInit(): void {
    //@ts-ignore
    const qvForm = new QvForm(this.refElement.nativeElement);
    qvForm.init({
      validClass: 'is-valid',
    });
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
    <div class="row mb-2">
      <div class="col">
        <div class="">
          <label class="form-label">First name</label>
          <input
            name="first_name"
            qv-rules="required|startWithUpper|minlength:2|maxlength:32"
            type="text"
            class="form-control"
          />
          <div class="invalid-feedback" qv-feedback="first_name"></div>
        </div>
      </div>
      <div class="col">
        <div class="">
          <label class="form-label">Last name</label>
          <input
            name="last_name"
            qv-rules="required|startWithUpper|minlength:2|maxlength:32"
            type="text"
            class="form-control"
          />
          <div class="invalid-feedback" qv-feedback="last_name"></div>
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

    <!-- Number input -->
    <div class="mb-2">
      <label class="form-label">Benin Phone Number</label>
      <input
        type="text"
        name="phone"
        qv-rules="required|phone:BJ"
        class="form-control"
      />
      <div class="invalid-feedback" qv-feedback="phone"></div>
      <p class="form-text text-muted">
        The phone number must be started by (+229) or (00229)
      </p>
    </div>
    <div class="mb-3">
      <label for="profession" class="form-label">Programing language</label>
      <select
        class="form-select"
        data-qv-rules
        required
        name="profession"
        id="profession"
      >
        <option value="" selected>Select one</option>
        <option value="programer">Programer</option>
        <option value="developer">Software enginear</option>
        <option value="designer">Designer / UX</option>
      </select>
      <div class="invalid-feedback" qv-feedback="profession"></div>
    </div>
    <div class="mb-3">
      <label for="languages" class="form-label">Languages</label>
      <select
        class="form-select"
        data-qv-rules="requiredIf:profession,programer,developer"
        name="languages"
        id="languages"
      >
        <option value="" selected>Select one</option>
        <option value="">No language</option>
        <option>Typescript / JavaScript</option>
        <option>PHP / JAVA / PYTHON</option>
        <option>HTML / CSS / XHTML</option>
      </select>
      <div class="invalid-feedback" qv-feedback="languages"></div>
    </div>

    <div class="mb-3">
      <label for="tools" class="form-label">Design tools</label>
      <select
        data-qv-rules="requiredIf:profession,designer"
        class="form-select"
        name="tools"
        id="tools"
      >
        <option value="" selected>Select one</option>
        <option>Figma</option>
        <option>Boostrap</option>
        <option>TailwindCss</option>
      </select>
      <div class="invalid-feedback" qv-feedback="tools"></div>
    </div>

    <div class="alert alert-warning" role="alert">
      <strong>Note</strong> <br />
      If profession is Programmer or Software developer, <b>Languages</b> is
      required <br />
      If profession is Designer / UX, <b>Tools</b> is required <br />
    </div>

    <button type="submit" qv-submit class="btn btn-primary btn-block mb-2">
      Submit
    </button>
  </form>
</div>
```
Please note that this project uses version `2.0.0-alpha` of `Quickv`. Further testing was not done, the main goal was to observe the behavior of Quickv with Angular.

It is important to mention that the `requiredIf` rule is not available in version 1.2.0 of `Quickv`.

### Credits

These project were developed by [Claude Fassinou](https://github.com/Claudye) for [Quickv](https://github.com/quick-v).

**_Happy coding_**
