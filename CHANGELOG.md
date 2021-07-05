# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- `npm run coverage` to browse coverage report on <http://localhost:5000>

## [1.2.0] - 2020-06-02

### Added

- [VS Code workspace settings](https://code.visualstudio.com/docs/getstarted/settings)
- [Prettier](https://prettier.io/) code formatter
- [Lodash](https://lodash.com/) general purpose JavaScript library
- `ApiSercice` with URL interpolation
- `NavigationService` for non-routed components
- `ConfigService` for embedded apps
- Check for uncommitted changes before push
- `DEV`, `PRE` and `PRO` build profiles
- [Stylelint](https://stylelint.io/) CSS linter
- Ivy `strictTemplates` error checking

### Changed

- [Angular update](https://angular.io/cli/update) to [v9.0](https://update.angular.io/#7.2:9.0l3)
- Updated `README.md` and Landing Page documentation
- Changelog format using [keepachangelog.com](https://keepachangelog.com/en/1.0.0/)
- Improved Sass architecture and default theme

### Removed

- [Default component library](https://gitlab.com/d4i-frontend-team/knowledge-base/-/blob/master/docs/angular/starter/webapp/ui-components.md)

## [1.1.0] - 2019-05-28

### Added

- CI support with config files for [Docker](https://www.docker.com),
  [Nginx](https://nginx.org/en/) and [Jenkins](https://www.jenkins.io/)
- [Line endings normalization](https://help.github.com/en/articles/configuring-git-to-handle-line-endings)
- [VS Code debug profile](https://code.visualstudio.com/docs/editor/debugging)
- `text-summary` report by [karma-coverage-istanbul-reporter](https://github.com/mattlewis92/karma-coverage-istanbul-reporter)
- [PM2](http://pm2.keymetrics.io/) process manager
- [`Layout` module](https://jurebajt.com/scalable-angular-app-architecture/#25-layout-module)
- [`Views` module](https://jurebajt.com/scalable-angular-app-architecture/#26-views-module)

### Changed

- [Angular update](https://angular.io/cli/update) to [v7.2](https://update.angular.io/#7.0:7.2l3)
- [Scroll to top on view change](https://angular.io/api/router/ExtraOptions#scrollPositionRestoration)

## [1.0.0] - 2019-02-22

### Added

- [Angular CLI](https://cli.angular.io/) generated project with [Angular v7.0](https://v7.angular.io/docs)
- Testing environment with [Jasmine](https://jasmine.github.io/),
  [Karma](https://karma-runner.github.io/) and [Istanbul](https://istanbul.js.org/)
- [Sass CSS preprocessor](https://sass-lang.com/)
- [Angular Router](https://angular.io/guide/router)
- [Husky](https://github.com/typicode/husky) `prepush` git hook
- [`Shared` feature module](https://angular.io/guide/styleguide#shared-feature-module)
- [`Core` feature module](https://v6.angular.io/guide/styleguide#core-feature-module)
- [Backend mock](https://gitlab.com/d4i-frontend-team/knowledge-base/-/blob/master/docs/angular/starter/project/backend-mock.md)
- [NgBootstrap](https://ng-bootstrap.github.io/) as default component library
- [Sass architecture](https://sass-guidelin.es/#architecture)

[unreleased]: https://gitlab.com/d4i-frontend-team/angular-starter/-/compare/v1.2.0...develop
[1.2.0]: https://gitlab.com/d4i-frontend-team/angular-starter/-/compare/v1.1.0...v1.2.0
[1.1.0]: https://gitlab.com/d4i-frontend-team/angular-starter/-/compare/v1.0.0...v1.1.0
[1.0.0]: https://gitlab.com/d4i-frontend-team/angular-starter/-/tags/v1.0.0
