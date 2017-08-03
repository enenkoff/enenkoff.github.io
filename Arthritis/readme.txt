/*--- instructions ---*/

npm install

/*--- one-use commands ---*/

gulp svgstore       compile svg sprite (after in sprite.svg reformat code)
gulp imagemin       images optimization

gulp includer:html  compile html from templates
gulp rigger:js      compile js from libs and scripts
gulp optimize:css   compile css, add prefixes and minimize

gulp watch          compile all sass and browsersync in localhost