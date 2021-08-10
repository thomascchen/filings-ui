import Model, { attr, belongsTo } from '@ember-data/model';

export default class AwardModel extends Model {
  @attr('number') cashAmount;
  @attr('string') purpose;

  @belongsTo('receiver') receiver;
}
