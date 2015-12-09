import Ember from 'ember';

export default Ember.Component.extend({
    alertErrorClass: "",
    alertErrorMessage: "",

    id: "",

    firstName: "",
    firstNameField: "form-group",
    firstNameInput: "form-control",

    title: "",
    titleField: "form-group",
    titleInput: "form-control",

    surname: "",
    surnameField: "form-group",
    surnameInput: "form-control",

    company: "",
    companyField: "form-group",
    companyInput: "form-control",

    telephone: "",
    telephoneField: "form-group",
    telephoneInput: "form-control",

    mobile: "",
    mobileField: "form-group",
    mobileInput: "form-control",

    fax: "",
    faxField: "form-group",
    faxInput: "form-control",

    email: "",
    emailField: "form-group",
    emailInput: "form-control",

    house: "",
    houseField: "form-group",
    houseInput: "form-control",

    street: "",
    streetField: "form-group",
    streetInput: "form-control",

    locality: "",
    localityField: "form-group",
    localityInput: "form-control",

    town: "",
    townField: "form-group",
    townInput: "form-control",

    county: "",
    countyField: "form-group",
    countyInput: "form-control",

    postcode: "",
    postcodeField: "form-group",
    postcodeInput: "form-control",

    actions: {
        validate()
        {
            let id = this.get("id");
            let title = this.get("title");
            let surname = this.get("surname");
            let firstName = this.get("firstName");
            let company = this.get("company");
            let telephone = this.get("telephone");
            let mobile = this.get("mobile");
            let fax = this.get("fax");
            let email = this.get("email");
            let house = this.get("house");
            let street = this.get("street");
            let locality = this.get("locality");
            let town = this.get("town");
            let county = this.get("county");
            let postcode = this.get("postcode");

            // No title was entered
            if (! title.trim().length) {
                this.set("alertErrorClass", "alert alert-danger");
                this.set("alertErrorMessage", "Please enter a title.");

                this.set("titleField", "form-group has-error");
                this.set("titleInput", "form-control form-control-error");

                Ember.$('#editSurveyorModalTitle').focus();

                return;
            }

            // They entered their title correctly 
            else {
                this.set("titleField", "form-group has-success");
                this.set("titleInput", "form-control form-control-success");
            }

            // No first name was entered
            if (! firstName.trim().length) {
                this.set("alertErrorClass", "alert alert-danger");
                this.set("alertErrorMessage", "Please enter a first name.");

                this.set("firstNameField", "form-group has-error");
                this.set("firstNameInput", "form-control form-control-error");

                Ember.$('#editSurveyorModalFirstName').focus();

                return;
            }

            // They entered their first name correctly 
            else {
                this.set("firstNameField", "form-group has-success");
                this.set("firstNameInput", "form-control form-control-success");
            }

            // No surname was entered
            if (! surname.trim().length) {
                this.set("alertErrorClass", "alert alert-danger");
                this.set("alertErrorMessage", "Please enter a surname.");

                this.set("surnameField", "form-group has-error");
                this.set("surnameInput", "form-control form-control-error");

                Ember.$('#editSurveyorModalSurname').focus();

                return;
            }

            // They entered their surname correctly 
            else {
                this.set("surnameField", "form-group has-success");
                this.set("surnameInput", "form-control form-control-success");
            }

            // No company was entered
            if (! company.trim().length) {
                this.set("alertErrorClass", "alert alert-danger");
                this.set("alertErrorMessage", "Please enter a company.");

                this.set("companyField", "form-group has-error");
                this.set("companyInput", "form-control form-control-error");

                Ember.$('#editSurveyorModalCompany').focus();

                return;
            }

            // They entered their company correctly 
            else {
                this.set("companyField", "form-group has-success");
                this.set("companyInput", "form-control form-control-success");
            }

            // No telephone was entered
            if (! telephone.trim().length) {
                this.set("alertErrorClass", "alert alert-danger");
                this.set("alertErrorMessage", "Please enter a telephone.");

                this.set("telephoneField", "form-group has-error");
                this.set("telephoneInput", "form-control form-control-error");

                Ember.$('#editSurveyorModalTelephone').focus();

                return;
            }

            // They entered their telephone correctly 
            else {
                this.set("telephoneField", "form-group has-success");
                this.set("telephoneInput", "form-control form-control-success");
            }

            // No mobile was entered
            if (! mobile.trim().length) {
                this.set("alertErrorClass", "alert alert-danger");
                this.set("alertErrorMessage", "Please enter a mobile.");

                this.set("mobileField", "form-group has-error");
                this.set("mobileInput", "form-control form-control-error");

                Ember.$('#editSurveyorModalMobile').focus();

                return;
            }

            // They entered their mobile correctly 
            else {
                this.set("mobileField", "form-group has-success");
                this.set("mobileInput", "form-control form-control-success");
            }

            // No fax was entered
            if (! fax.trim().length) {
                this.set("alertErrorClass", "alert alert-danger");
                this.set("alertErrorMessage", "Please enter a fax.");

                this.set("faxField", "form-group has-error");
                this.set("faxInput", "form-control form-control-error");

                Ember.$('#editSurveyorModalFax').focus();

                return;
            }

            // They entered their fax correctly 
            else {
                this.set("faxField", "form-group has-success");
                this.set("faxInput", "form-control form-control-success");
            }

            // No email was entered
            if (! email.trim().length) {
                this.set("alertErrorClass", "alert alert-danger");
                this.set("alertErrorMessage", "Please enter a email.");

                this.set("emailField", "form-group has-error");
                this.set("emailInput", "form-control form-control-error");

                Ember.$('#editSurveyorModalEmail').focus();

                return;
            }

            // They entered their email correctly 
            else {
                this.set("emailField", "form-group has-success");
                this.set("emailInput", "form-control form-control-success");
            }

            // No house was entered
            if (! house.trim().length) {
                this.set("alertErrorClass", "alert alert-danger");
                this.set("alertErrorMessage", "Please enter a house.");

                this.set("houseField", "form-group has-error");
                this.set("houseInput", "form-control form-control-error");

                Ember.$('#editSurveyorModalHouse').focus();

                return;
            }

            // They entered their house correctly 
            else {
                this.set("houseField", "form-group has-success");
                this.set("houseInput", "form-control form-control-success");
            }

            // No street was entered
            if (! street.trim().length) {
                this.set("alertErrorClass", "alert alert-danger");
                this.set("alertErrorMessage", "Please enter a street.");

                this.set("streetField", "form-group has-error");
                this.set("streetInput", "form-control form-control-error");

                Ember.$('#editSurveyorModalStreet').focus();

                return;
            }

            // They entered their street correctly 
            else {
                this.set("streetField", "form-group has-success");
                this.set("streetInput", "form-control form-control-success");
            }

            // No locality was entered
            if (! locality.trim().length) {
                this.set("alertErrorClass", "alert alert-danger");
                this.set("alertErrorMessage", "Please enter a locality.");

                this.set("localityField", "form-group has-error");
                this.set("localityInput", "form-control form-control-error");

                Ember.$('#editSurveyorModalLocality').focus();

                return;
            }

            // They entered their locality correctly 
            else {
                this.set("localityField", "form-group has-success");
                this.set("localityInput", "form-control form-control-success");
            }

            // No town was entered
            if (! town.trim().length) {
                this.set("alertErrorClass", "alert alert-danger");
                this.set("alertErrorMessage", "Please enter a town.");

                this.set("townField", "form-group has-error");
                this.set("townInput", "form-control form-control-error");

                Ember.$('#editSurveyorModalTown').focus();

                return;
            }

            // They entered their town correctly 
            else {
                this.set("townField", "form-group has-success");
                this.set("townInput", "form-control form-control-success");
            }

            // No county was entered
            if (! county.trim().length) {
                this.set("alertErrorClass", "alert alert-danger");
                this.set("alertErrorMessage", "Please enter a county.");

                this.set("countyField", "form-group has-error");
                this.set("countyInput", "form-control form-control-error");

                Ember.$('#editSurveyorModalCounty').focus();

                return;
            }

            // They entered their county correctly 
            else {
                this.set("countyField", "form-group has-success");
                this.set("countyInput", "form-control form-control-success");
            }

            // No postcode was entered
            if (! postcode.trim().length) {
                this.set("alertErrorClass", "alert alert-danger");
                this.set("alertErrorMessage", "Please enter a postcode.");

                this.set("postcodeField", "form-group has-error");
                this.set("postcodeInput", "form-control form-control-error");

                Ember.$('#editSurveyorModalPostcode').focus();

                return;
            }

            // They entered their postcode correctly 
            else {
                this.set("postcodeField", "form-group has-success");
                this.set("postcodeInput", "form-control form-control-success");
            }

            // Create a data object containing the form data
            let data = {
                id: id,
                title: title,
                firstName: firstName,
                surname: surname,
                company: company,
                telephone: telephone,
                mobile: mobile,
                fax: fax,
                email: email,
                house: house,
                street: street,
                locality: locality,
                town: town,
                county: county,
                postcode: postcode
            };

            // Process the form data
            let response = this.get('process')(data);

            // There was an error
            if (response.error) {
                this.set("alertErrorClass", "alert alert-danger");
                this.set("alertErrorMessage", response.error);
            }

            // There were no errors
            else {

                // Remove any error messages
                this.set("alertErrorClass", "");
                this.set("alertErrorMessage", "");

                // Set the success message
                this.set("alertSuccessClass", "alert alert-success");
                this.set("alertSuccessMessage", response.success);

                // Show the success message
                Ember.$('#editSurveyorAlertSuccess').attr('hidden', false).fadeIn();

                // Reset the inputs
                this.set("titleField", "form-group");
                this.set("titleInput", "form-control");

                this.set("firstNameField", "form-group");
                this.set("firstNameInput", "form-control");

                this.set("surnameField", "form-group");
                this.set("surnameInput", "form-control");

                this.set("companyField", "form-group");
                this.set("companyInput", "form-control");

                this.set("telephoneField", "form-group");
                this.set("telephoneInput", "form-control");

                this.set("mobileField", "form-group");
                this.set("mobileInput", "form-control");

                this.set("faxField", "form-group");
                this.set("faxInput", "form-control");

                this.set("emailField", "form-group");
                this.set("emailInput", "form-control");

                this.set("houseField", "form-group");
                this.set("houseInput", "form-control");

                this.set("streetField", "form-group");
                this.set("streetInput", "form-control");

                this.set("localityField", "form-group");
                this.set("localityInput", "form-control");

                this.set("townField", "form-group");
                this.set("townInput", "form-control");

                this.set("countyField", "form-group");
                this.set("countyInput", "form-control");

                this.set("postcodeField", "form-group");
                this.set("postcodeInput", "form-control");

                this.set("title", "");
                this.set("firstName", "");
                this.set("surname", "");
                this.set("company", "");
                this.set("telephone", "");
                this.set("mobile", "");
                this.set("fax", "");
                this.set("email", "");
                this.set("house", "");
                this.set("street", "");
                this.set("locality", "");
                this.set("town", "");
                this.set("county", "");
                this.set("postcode", "");

                Ember.$('#editSurveyorModal').modal('hide');

                // Reload Tablesorter on any eligible tables
                Ember.$('.table-sortable').trigger('update').trigger('appendCache');

                // Set the success message to clear in 3 seconds
                Ember.run.later(function()
                {
                    // Fade it out
                    Ember.$('#editSurveyorAlertSuccess').fadeOut({
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
