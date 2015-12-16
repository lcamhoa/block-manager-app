import Ember from 'ember';

export default Ember.Component.extend({
    tagName: "tr",
    actions: {
        deleteBlock()
        {
            // Get the id
            let id = this.block.id;

            // Pass the id up to the delete function of the index table
            this.get('deleteBlock')(id);
        },
        editBlock()
        {
            let block = this.block;

            // Set the surveyor's data in the edit surveyor modal
            Ember.$('#ediBlockModalId').val(block.get('id')).trigger('change');
            Ember.$('#editBlockModalName').val(block.get('name')).trigger('change');
            Ember.$('#editBlockModalSite').val(block.get('site')).trigger('change');

            let surveyorId = block.get('reference').get('id');
            let referenceSelectPath = '#editBlockModalReference option[value="' + surveyorId + '"]';
            Ember.$(referenceSelectPath).attr('selected',true);

            Ember.$('#editBlockModalCreated').text(block.get('created'));
            // Show the edit surveyor modal
            Ember.$('#editBlockorModal').modal();
        }
    }
});
