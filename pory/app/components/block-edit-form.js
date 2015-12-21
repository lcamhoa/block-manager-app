import Ember from 'ember';

export default Ember.Component.extend({
    alertErrorClass: "",
    alertErrorMessage: "",

    reference: "",
    name: "",
    site: "",

    actions: {
        validate()
        {
            let reference = this.get("reference"); // Ember.$('#editBlockModalReference').val();
            let name = this.get("name");
            let site = this.get("site");

            // Create a data object containing the form data
            let data = {
                reference: reference,
                name: name,
                site: site,
            };

            // Process the form data
            let response = this.get('process')(data);

            // There was an error
            if (response.error) {
                this.set("alertErrorClass", "alert alert-danger");
                this.set("alertErrorMessage", response.error);
            } else {
                // Set the success message
                this.set("alertSuccessClass", "alert alert-success");
                this.set("alertSuccessMessage", response.success);

                // Show the success message
                Ember.$('#editBlockorAlertSuccess').attr('hidden', false).fadeIn();
                Ember.$('#editBlockorModal').modal('hide');

                // Reload Tablesorter on any eligible tables
                Ember.$('.table-sortable').trigger('update').trigger('appendCache');

                // Set the success message to clear in 3 seconds
                Ember.run.later(function()
                {
                    // Fade it out
                    Ember.$('#editBlockorAlertSuccess').fadeOut({
                        complete: function()
                        {
                            // Reset it's display settings
                            Ember.$(this).attr('hidden', true).show();
                        }
                    });
                }, 2000);
            }
        },
        changeReference(reference)
        {
             this.set('reference', reference);
        }
    }
});
