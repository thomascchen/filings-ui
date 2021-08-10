import Model, { attr, belongsTo, hasMany } from '@ember-data/model';

export default class FilingModel extends Model {
  @attr('string') taxYear;
  @attr('boolean') amended;
  @attr('number') averageGrantSize;
  @attr topCategories;

  @belongsTo('filer') filer;
  @hasMany('award') awards;
  @hasMany('award') receivers;
}
