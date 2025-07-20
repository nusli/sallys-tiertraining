# SallysTiertraining

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.0.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Deploying to github pages
Install github pages cli for angular
```npm install -g angular-cli-ghpages```

Build the code for production
```ng build --configuration production --base-href https://<username>.github.io/<reponame>/```

Deploy to GitHub
```angular-cli-ghpages -d dist/<project-name>/ --no-silent```
This command will create a new branch gh-pages in your repository and automatically push the dist build in that branch. Afterwards you can navigate to https://<username>.github.io/<reponame>/

You might have to navigate to repository settings and manually set the gh-pages branch to be used with github pages.

## Code Doku
### Special Folder
This folder contains all sites that advertise special events, like 1 time courses. These sites don't get a link in the navbar. Instead add them to the footer
**footer.component.ts** "*News*" array and **courses.component.ts** "*specialCards*" array.

### adding a new component
First, run `ng g c path-to-component\componentname`. Then add that component to *src\app\Modules\routing\routing.module.ts* with the desired url path.

Then add the following code to the newly generated *component.html* file:
```
<app-hero-section [mobilePortrait]="mobilePortrait" [hero]="hero"></app-hero-section>
```
This will generate a hero section that sets a good layout.

Add the following code to the newly generated *component.ts* file and add the corresponding imports:
```
  @Input() mobilePortrait = false;
  @Input() hero!: Hero;

  // Scroll to the top on load because Scrollrestoration does not work for some reason.
  ngAfterViewInit(): void {
    document.body.scrollTop = 0;
  }
```

To change the image and text of that hero, add a new Object to the **heroes** array in *src\app\app.component.ts* and link the hero to the route in the function **setHeroToActiveRoute**
