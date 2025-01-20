# Ng18MixinResourceResolve

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.12. The point of it is to
showcase the affect of changes in
SCSS resource resolution since Angular v18 in respect to calling mixins that generate url() values using relative paths
to icons that should get included as resources inside the application, and it's affect on the ability to use Typescript
path mapping and point applications to library sources.

Run `npm run build` to build the library and consuming application successfully. The changes in Angular v18+ have no
direct effect on this functionality, other than the required potential changes in how SCSS mixins are consumed, if the
resource path is passed into a mixin as a parameter and the mixin itself is responsible for generating the url() value.

Run `ng serve`, which will fail as it attempts to utilize the `tsconfig.app-dev.json` to bypass the requirement to build
the library independently, but fail to compile due to differences in the behavior of SCSS resource resolution.
