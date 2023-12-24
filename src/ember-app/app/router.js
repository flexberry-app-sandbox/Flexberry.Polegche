import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-polegche-виды-l');
  this.route('i-i-s-polegche-виды-e',
  { path: 'i-i-s-polegche-виды-e/:id' });
  this.route('i-i-s-polegche-виды-e.new',
  { path: 'i-i-s-polegche-виды-e/new' });
  this.route('i-i-s-polegche-вольер-l');
  this.route('i-i-s-polegche-вольер-e',
  { path: 'i-i-s-polegche-вольер-e/:id' });
  this.route('i-i-s-polegche-вольер-e.new',
  { path: 'i-i-s-polegche-вольер-e/new' });
  this.route('i-i-s-polegche-должность-l');
  this.route('i-i-s-polegche-должность-e',
  { path: 'i-i-s-polegche-должность-e/:id' });
  this.route('i-i-s-polegche-должность-e.new',
  { path: 'i-i-s-polegche-должность-e/new' });
  this.route('i-i-s-polegche-животные-l');
  this.route('i-i-s-polegche-животные-e',
  { path: 'i-i-s-polegche-животные-e/:id' });
  this.route('i-i-s-polegche-животные-e.new',
  { path: 'i-i-s-polegche-животные-e/new' });
  this.route('i-i-s-polegche-сотрудники-l');
  this.route('i-i-s-polegche-сотрудники-e',
  { path: 'i-i-s-polegche-сотрудники-e/:id' });
  this.route('i-i-s-polegche-сотрудники-e.new',
  { path: 'i-i-s-polegche-сотрудники-e/new' });
  this.route('i-i-s-polegche-уборка-l');
  this.route('i-i-s-polegche-уборка-e',
  { path: 'i-i-s-polegche-уборка-e/:id' });
  this.route('i-i-s-polegche-уборка-e.new',
  { path: 'i-i-s-polegche-уборка-e/new' });
});

export default Router;
