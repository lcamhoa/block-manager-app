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
            let surveyor = block.get('surveyor');
            let surveyorId = block.get('surveyor').get('id');
            let surveyorSelectPath = '#editBlockModalSurveyor option[value="' + surveyorId + '"]';

            // dirty data , surveyor firstname is required
            if (surveyor.get('firstName') === undefined) {
                surveyorSelectPath = '#editBlockModalSurveyor option:first-child';
            }

            // Set the block's data in the edit block modal
            Ember.$('#ediBlockModalId').val(block.get('id')).trigger('change');
            Ember.$('#editBlockModalName').val(block.get('name')).trigger('change');
            Ember.$('#editBlockModalSite').val(block.get('site')).trigger('change');
            Ember.$('#editBlockModalReference').val(block.get('reference')).trigger('change');
            Ember.$('#editBlockModalCreated').text(block.get('created'));

            //Set the surveyor which block belong to
            Ember.$(surveyorSelectPath).attr('selected',true).trigger('change');

            // Show the edit surveyor modal
            Ember.$('#editBlockorModal').modal();
        }
    }
});
