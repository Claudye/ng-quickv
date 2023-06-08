# NgQuickv

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.0.

This project was used with Quickv version 1.2.2 

## Usage

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

The main directive is "quickv", which is used to select all forms and attach a `QvForm` instance to them. This allows you to take advantage of Quickv's validation features within Angular forms.

## Intregations in your application
To integrate Quickv into your application, follow these steps:


1. Installer Quickv : Exécutez la commande suivante dans votre projet pour installer Quickv via npm :
   ```
   npm install quickv
   ```

2. Copier le dossier Quickv : 
Copiez le dossier `/src/app/quickv` du projet que vous avez cloné dans votre propre projet Angular, à n'importe quel endroit où Angular peut le charger. Par exemple, vous pouvez le coller dans le dossier `/src/app/quickv` de votre projet.

4. Importer le module QuickvModule : Dans le module où vous souhaitez utiliser Quickv, importez le module `QuickvModule` à partir de `quickv`. Par exemple, si vous souhaitez l'utiliser dans votre `AppModule`, vous pouvez ajouter l'importation suivante :

```typescript
import { QuickvModule } from './quickv/quickv.module';

@NgModule({
     imports: [
       // ...
       QuickvModule
     ],
     // ...
})
export class AppModule { }
```

4. Utiliser la directive Quickv : Ajoutez la directive `quickv` à votre formulaire pour l'activer. Par exemple, si vous avez le formulaire suivant :

```html
   <form quickv>
     <!-- Vos champs de formulaire ici -->
   </form>
```

5. Définir les règles de validation : Pour chaque champ de formulaire que vous souhaitez valider, utilisez l'attribut `qv-rules` pour définir les règles de validation. Par exemple :

```html
<input
	name="first_name"
	rules="required|startWithUpper|minlength:2|maxlength:32"
	type="text"
	class="form-control"
/>
```

   Vous pouvez ajouter plusieurs règles en les séparant par le caractère `|`.

6. Afficher les messages d'erreur : Pour afficher les messages d'erreur de validation, ajoutez un élément HTML avec la classe `invalid-feedback` et l'attribut `qv-feedback` spécifiant le nom du champ. Par exemple :

```html
<div class="invalid-feedback" qv-feedback="first_name"></div>
```

   Vous pouvez personnaliser les messages d'erreur en utilisant l'attribut `qv-messages`. Par exemple :

```html
<div class="invalid-feedback" qv-feedback="first_name" qv-messages="Erreur règle 1|Erreur règle 2"></div>
```

7. Désactiver le bouton de soumission par défaut : Si vous souhaitez désactiver le bouton de soumission par défaut fourni par Quickv, ajoutez l'attribut `data-qv-submit` à celui-ci. Par exemple :
```html
<button type="submit" qv-submit class="btn btn-primary btn-block mb-2">
     Submit
</button>
```
Une fois que vous avez suivi ces étapes, vous devriez pouvoir utiliser Quickv pour la validation de formulaire dans votre projet Angular. Assurez-vous d'avoir correctement importé les modules et suivi les directives dans votre template.
###  Exemple
```html
<form class="col-sm-7 mx-auto bg-white rounded p-3 shadow" quickv>
  <h3>
    Testing <a href="https://github.com/quick-v/quickv">Quickv</a> in Angular
  </h3>
  <div class="row mb-2">
    <div class="col">
      <div class="">
        <label class="form-label">First name</label>
        <input
          name="first_name"
          qv- rules="required|startWithUpper|minlength:2|maxlength:32"
          type="text"
          class="form-control"
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

  <!-- File input -->
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
```
 
### Credits

These project were developed by [Claude Fassinou](https://github.com/Claudye) for [Quickv](https://github.com/quick-v).

**_Happy coding_**
