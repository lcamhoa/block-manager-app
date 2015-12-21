import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        createBlock(data)
        {
            let surveyor = this.store.peekRecord('surveyor', data.reference);
            let block = this.store.createRecord('block', {
                reference: surveyor,
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
            let surveyor = this.store.peekRecord('surveyor', data.reference);
            this.store.findRecord('block', data.id).then(function(block)
            {
                // Update the block
                block.set("reference", surveyor);
                block.set("site", data.site);
                block.set("name", data.name);

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
