import Ember from 'ember';

export default Ember.Component.extend({
    alertErrorClass: "",
    alertErrorMessage: "",

    reference: "",
    referenceField: "form-group",
    referenceInput: "form-control",

    name: "",
    nameField: "form-group",
    nameInput: "form-control",

    site: "",
    siteField: "form-group",
    siteInput: "form-control",

    actions: {
        validate()
        {
            let reference = this.get("reference");
            let name = this.get("name");
            let site = this.get("site");
            let surveyor = Ember.$('#createBlockModalSurveyor').val();

            // No name was entered
            if(! name.trim().length) {
                this.set("alertErrorClass", "alert alert-danger");
                this.set("alertErrorMessage", "Please enter a name.");

                this.set("nameField", "form-group has-error");
                this.set("nameInput", "form-control form-control-error");

                Ember.$('#createBlockModalName').focus();
                return;
            }

            // They entered their name correctly
            else {
                this.set("nameField", "form-group has-success");
                this.set("nameInput", "form-control form-control-success");
            }

            // No site was entered
            if(! site.trim().length) {
                this.set("alertErrorClass", "alert alert-danger");
                this.set("alertErrorMessage", "Please enter a site.");

                this.set("siteField", "form-group has-error");
                this.set("siteInput", "form-control form-control-error");

                Ember.$('#createBlockModalSite').focus();
                return;
            }

            // They entered their name correctly
            else {
                this.set("siteField", "form-group has-success");
                this.set("siteInput", "form-control form-control-success");
            }

            // No reference was entered
            if(! reference.trim().length) {
                this.set("alertErrorClass", "alert alert-danger");
                this.set("alertErrorMessage", "Please enter a reference.");

                this.set("referenceField", "form-group has-error");
                this.set("referenceInput", "form-control form-control-error");

                Ember.$('#createBlockModalReference').focus();
                return;
            }

            // They entered their reference correctly
            else {
                this.set("referenceField", "form-group has-success");
                this.set("referenceInput", "form-control form-control-success");
            }


            // Create a data object containing the form data
            let data = {
                reference: reference,
                name: name,
                site: site,
                surveyor: surveyor
            };

            // Process the form data
            let response = this.get('process')(data);

            // There was an error
            if (response.error) {
                this.set("alertErrorClass", "alert alert-danger");
                this.set("alertErrorMessage", response.error);
            } else {
                // Remove any error messages
                this.set("alertErrorClass", "");
                this.set("alertErrorMessage", "");

                // Set the success message
                this.set("alertSuccessClass", "alert alert-success");
                this.set("alertSuccessMessage", response.success);

                // Show the success message
                Ember.$('#createBlockorAlertSuccess').attr('hidden', false).fadeIn();

                // Reset the inputs
                this.set("nameField", "form-group");
                this.set("nameInput", "form-control");

                this.set("siteField", "form-group");
                this.set("siteInput", "form-control");

                this.set("referenceField", "form-group");
                this.set("referenceInput", "form-control");

                this.set("name", "");
                this.set("site", "");
                this.set("reference", "");

                Ember.$('#createBlockorModal').modal('hide');

                // Reload Tablesorter on any eligible tables
                Ember.$('.table-sortable').trigger('update').trigger('appendCache');

                // Set the success message to clear in 3 seconds
                Ember.run.later(function()
                {
                    // Fade it out
                    Ember.$('#createBlockorAlertSuccess').fadeOut({
                        complete: function()
                        {
                            // Reset it's display settings
                            Ember.$(this).attr('hidden', true).show();
                        }
                    });
                }, 2000);
            }
        }
    }
});
