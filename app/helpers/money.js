import { helper } from '@ember/component/helper';

function money(number) {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(number);
}

export default helper(money);