import Ember from 'ember';

export default Ember.Component.extend({
    tagName: "tr",

    actions: {
        deleteSurveyor()
        {
            // Get the id
            let id = this.surveyor.id;

            // Pass the id up to the delete function of the index table
            this.get('deleteSurveyor')(id);
        },

        editSurveyor()
        {
            // Get the surveyor
            let surveyor = this.surveyor;

            // Set the surveyor's data in the edit surveyor modal
            Ember.$('#editSurveyorModalId').val(surveyor.get('id')).trigger('change');
            Ember.$('#editSurveyorModalTitle').val(surveyor.get('title')).trigger('change');
            Ember.$('#editSurveyorModalFirstName').val(surveyor.get('firstName')).trigger('change');
            Ember.$('#editSurveyorModalSurname').val(surveyor.get('surname')).trigger('change');
            Ember.$('#editSurveyorModalCompany').val(surveyor.get('company')).trigger('change');
            Ember.$('#editSurveyorModalTelephone').val(surveyor.get('telephone')).trigger('change');
            Ember.$('#editSurveyorModalMobile').val(surveyor.get('mobile')).trigger('change');
            Ember.$('#editSurveyorModalFax').val(surveyor.get('fax')).trigger('change');
            Ember.$('#editSurveyorModalEmail').val(surveyor.get('email')).trigger('change');
            Ember.$('#editSurveyorModalHouse').val(surveyor.get('house')).trigger('change');
            Ember.$('#editSurveyorModalStreet').val(surveyor.get('street')).trigger('change');
            Ember.$('#editSurveyorModalLocality').val(surveyor.get('locality')).trigger('change');
            Ember.$('#editSurveyorModalTown').val(surveyor.get('town')).trigger('change');
            Ember.$('#editSurveyorModalCounty').val(surveyor.get('county')).trigger('change');
            Ember.$('#editSurveyorModalPostcode').val(surveyor.get('postcode')).trigger('change');

            // Show the edit surveyor modal
            Ember.$('#editSurveyorModal').modal();
        }
    }
});
