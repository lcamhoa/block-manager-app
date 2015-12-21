import Ember from 'ember';

export function formatSurveyor(param/*, hash*/) {
  let surveyor = param[0];

  if( surveyor== null) return '';

  //sureyor format: fistName space surName
  return surveyor.get('firstName') + ' ' + surveyor.get('surname');
}

export default Ember.Helper.helper(formatSurveyor);
