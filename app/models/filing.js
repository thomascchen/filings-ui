import Model, { attr, belongsTo, hasMany } from '@ember-data/model';

export default class FilingModel extends Model {
  @attr('string') taxYear;
  @attr('boolean') amended;

  @belongsTo('filer') filer;
  @hasMany('award') awards;
}
