/**
 * Created by realm on 2017/4/5.
 */

const Generator = require('yeoman-generator');

class RevealSiteGenerator extends Generator {
  constructor(args, options) {
    super(args, options);

    this.option('babel');
  }

  prompting() {
    return this.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What\'s the name of slide this time?',
        default: this.appname
      },
      {
        type: 'input',
        name: 'description',
        message: 'Any description?'
      },
      {
        type: 'input',
        name: 'version',
        message: 'What\'s the basic version?',
        default: '0.0.1'
      }
    ])
      .then( answers => {
        this.props = answers;
      })
  }

  writing() {
    ['package.json', 'index.dev.html', 'gulpfile.js', 'content.md', 'app/main.js'].forEach( filename => {
      this.fs.copyTpl(
        this.templatePath(filename),
        this.destinationPath(filename),
        this.props
      );
    });
  }

  installing() {
    this.npmInstall([
      'del',
      'font-awesome',
      'gulp',
      'gulp-clean-css',
      'gulp-rename',
      'gulp-replace',
      'gulp-stylus',
      'gulp-uglify',
      'highlight.js',
      'marked',
      'reveal.js',
      'run-sequence'], { 'save-dev': true});
  }
}
module.exports = RevealSiteGenerator;