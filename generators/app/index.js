/**
 * Created by realm on 2017/4/5.
 */

const gitRemoteOriginUrl = require('git-remote-origin-url');
const Generator = require('yeoman-generator');
const mkdirp = require('mkdirp');

class RevealSiteGenerator extends Generator {

  constructor(args, options) {
    super(args, options);

    this.config.save();
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
        default: '0.1.0'
      }
    ])
      .then( answers => {
        this.props = answers;
      })
      .then( () => {
        return gitRemoteOriginUrl();
      })
      .then( url => {
        this.props.git = url;
      });
  }

  writing() {
    [
      'package.json',
      'index.dev.html',
      'gulpfile.js',
      'content.md',
      'app/main.js',
      '.gitignore',
      'README.md'
    ].forEach( filename => {
      this.fs.copyTpl(
        this.templatePath(filename),
        this.destinationPath(filename),
        this.props
      );
    });
    let base = this.destinationPath();
    mkdirp.sync(base + '/css/');
    mkdirp.sync(base + '/styl/');
  }

  installing() {
    this.npmInstall();
  }
}
module.exports = RevealSiteGenerator;