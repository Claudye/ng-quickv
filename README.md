# NgQuickv

This project is an example Angular application that demonstrates the usage of Quickv version 1.2.2 for form validation. The following instructions will guide you through the process of integrating Quickv into your own Angular project.

## Usage

After cloning the project, navigate to its root directory and install the project dependencies by running the following command:
```bash
npm install
```
This command will install the necessary dependencies, including Quickv.

The project uses Bootstrap 5 CDN for default appearance styles.

## Running the Project

To run the project, use the following command in the project's root directory:
```bash
ng serve
```
This will start a development server, and you can navigate to http://localhost:4200/ in your browser. The application will automatically reload if you make any changes to the source files.

## Project Architecture

In this project, I have created a module named `quickv` located in the `/src/app/quickv` directory. This module is then imported and used in the `AppModule` to enable Quickv functionality throughout the application.

## Note

Quickv is an attribute-based package that provides form validation functionality. To integrate it with Angular, I have created directives that allow you to use Quickv attributes with the "qv-" prefix instead of "data-qv-" for brevity.

The main directive is "quickv", which is used to select all forms and attach a `QvForm` instance to them. This enables you to leverage Quickv's validation features within Angular forms.

## Integrating Quickv into Your Application

To integrate Quickv into your own Angular application, follow these steps:

1. Install Quickv: Run the following command in your Angular project's root directory to install Quickv via npm:
```bash
npm install quickv
```

2. Import QuickvModule: In the module where you want to use Quickv, import the `QuickvModule` from `quickv`. For example, if you want to use it in your `AppModule`, open the `app.module.ts` file and add the import statement:
```typescript
import { QuickvModule } from 'quickv';

@NgModule({
  imports: [
    // ... other imports
    QuickvModule
  ],
  // ... other module configurations
})
export class AppModule { }
```
Copy the `/src/app/quickv` folder from this project, and paste it into your project.

3. Use Quickv directives in your forms: Open the template file containing your form and add the Quickv directives to the form and form fields. For example:
```html
<form quickv>
  <label>Username</label>
  <input type="text" name="username" qv-rules="required|minlength:5" />

  <label>Email</label>
  <input type="email" name="email" qv-rules="required|email" />

  <button type="submit" qv-submit>Submit</button>
</form>
```

4. Display validation messages: To display validation error messages, add elements with the `qv-feedback` attribute inside or near the form fields. For example:
```html
<form quickv>
  <label>Username</label>
  <input type="text" name="username" qv-rules="required|minlength:5" />
  <div qv-feedback="username" class="error-message"></div>

  <label>Email</label>
  <input type="email" name="email" qv-rules="required|email" />
  <div qv-feedback="email" class="error-message"></div>

  <button type="submit" qv-submit>Submit</button>
</form>
```

5. Customize error messages: To customize the error messages for specific validation rules, you can

 use the `qv-messages` attribute on the feedback element. For example:
```html
<form quickv>
  <label>Username</label>
  <input type="text" name="username" qv-rules="required|minlength:5" />
  <div qv-feedback="username" qv-messages="Username is required|Username must have at least 5 characters" class="error-message"></div>

  <label>Email</label>
  <input type="email" name="email" qv-rules="required|email" />
  <div qv-feedback="email" qv-messages="Email is required|Please enter a valid email address" class="error-message"></div>

  <button type="submit" qv-submit>Submit</button>
</form>
```

6. Disable default submit button behavior (optional): If you want to disable the default form submission behavior provided by Quickv, add the `data-qv-submit` attribute to your submit button. For example:
```html
<button type="submit" qv-submit data-qv-submit>Submit</button>
```

Once you have followed these steps, Quickv will handle form validation based on the defined rules, display error messages, and prevent form submission if there are any validation errors.

## Customization
This code is just one use of Quickv in Angular, if you want your own logic, you can follow the quickv [documentation](https://github.com/quick-v/quickv).
