import Ember from 'ember';

export function formatSurveyor(param/*, hash*/) {
  let surveyor = param[0];

  if (surveyor== null) return '';

  // dirty data , firstname is required of surveyor
  if (surveyor.get('firstName') === undefined) return '';

  //sureyor format: fistName space surName
  return surveyor.get('firstName') + ' ' + surveyor.get('surname');
}

export default Ember.Helper.helper(formatSurveyor);
