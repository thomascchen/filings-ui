import Model, { attr } from '@ember-data/model';

export default class FilerModel extends Model {
  @attr('string') ein;
  @attr('string') name;
  @attr('string') street;
  @attr('string') city;
  @attr('string') state;
  @attr('string') zip;
}
