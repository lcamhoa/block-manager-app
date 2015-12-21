import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        createBlock(data)
        {
            let surveyor = this.store.peekRecord('surveyor', data.surveyor);
            let block = this.store.createRecord('block', {
                surveyor: surveyor,
                reference: data.reference,
                site: data.site,
                name: data.name,
                created: new Date()
            });

            // Save the block
            block.save();

            // Create a response
            let response = {
                success: "You successfully created the block '" + data.name + "'."
            };

            return response;
        },

        deleteBlock(id)
        {
            // Find the block
            this.store.findRecord('block', id).then(function(block)
            {
                // Destroy the block
                block.destroyRecord();
            });
        },

        editBlock(data)
        {
            // Find the surveyor
            let surveyor = this.store.peekRecord('surveyor', data.surveyor);
            this.store.findRecord('block', data.id).then(function(block)
            {
                // Update the block
                block.set("surveyor", surveyor);
                block.set("site", data.site);
                block.set("name", data.name);
                block.set("reference", data.reference);

                // Save the surveyor
                block.save();
            });

            // Create a response
            let response = {
                success: "Your changes were successfully saved."
            };

            return response;
        }
    },
});
