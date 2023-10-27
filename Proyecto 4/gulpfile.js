//llamaos a las dependencias
const {src, dest, watch ,series}=require('gulp');
const sass = require('gulp-sass')(require('sass'));

/* imagenmin */
const imagenmin = require('gulp-imagemin');


/* gulp-poscss y autoprefixer */
const poscss =require('gulp-postcss');
const autoprefixer = require('autoprefixer');

/* sourcemaps para saber a que archivo pertenece el codigo css */
const sourcemaps = require('gulp-sourcemaps');

/* css nano para optimizar el codigo */
const cssnano = require('cssnano');

/* funcion para compilar sass */
function css(done){
  
    //ideptificamos la hoja de sass
    src('src/scss/app.scss')
     //pipe para el sourcemaps
     .pipe(sourcemaps.init())
    //compilamos la hoja de sass
    .pipe(sass({outputStyle: 'compressed'}))

    //pipe para el autoprefixer
    .pipe(poscss([autoprefixer(),cssnano()]))
    //guardamos el sourcemaps
    .pipe(sourcemaps.write('.'))

    //guardamos la hoja de sass
    .pipe(dest('build/css'));

    done();


}
function script (done){
    /* ruta del archivo */
    src('src/js/app.js')

    //guardamos el archivo
    .pipe(dest('build/js'));


    done();

}
function imagenes(done){
    src('src/img/**/*')
    .pipe(imagenmin({optimizationLevel : 3}))
    .pipe(dest('build/img'))

    done();
}

function dev(done){

    watch('src/scss/**/*',css)
    watch('src/js/**/*',script)
    watch('src/img/**/*', imagenes)


    done();
}

/* exportamos la funciones */
exports.css = css;
exports.script = script;
exports.imagenes = imagenes;
exports.dev = dev;

/* funcion que se ejecuta por default con gulp */
exports.default= series(css,script,imagenes,dev)