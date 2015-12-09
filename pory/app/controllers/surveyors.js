import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        createSurveyor(data)
        {
            // Create the surveyor
            let surveyor = this.store.createRecord('surveyor', {
                title: data.title,
                firstName: data.firstName,
                surname: data.surname,
                company: data.company,
                telephone: data.telephone,
                mobile: data.mobile,
                fax: data.fax,
                email: data.email,
                house: data.house,
                street: data.street,
                locality: data.locality,
                town: data.town,
                county: data.county,
                postcode: data.postcode
            });

            // Save the surveyor
            surveyor.save();

            // Create a response
            let response = {
                success: "You successfully created the surveyor '"+data.title+" "+data.firstName+" "+data.surname+"'."
            };

            return response;
        },

        deleteSurveyor(id)
        {
            // Find the surveyor
            this.store.findRecord('surveyor', id).then(function(surveyor)
            {
                // Destroy the record
                surveyor.destroyRecord();
            });
        },

        editSurveyor(data)
        {
            // Find the surveyor
            this.store.findRecord('surveyor', data.id).then(function(surveyor)
            {
                // Update the surveyor
                surveyor.set("title", data.title);
                surveyor.set("firstName", data.firstName);
                surveyor.set("surname", data.surname);
                surveyor.set("company", data.company);
                surveyor.set("telephone", data.telephone);
                surveyor.set("mobile", data.mobile);
                surveyor.set("fax", data.fax);
                surveyor.set("email", data.email);
                surveyor.set("house", data.house);
                surveyor.set("street", data.street);
                surveyor.set("locality", data.locality);
                surveyor.set("town", data.town);
                surveyor.set("county", data.county);
                surveyor.set("postcode", data.postcode);

                // Save the surveyor
                surveyor.save();
            });

            // Create a response
            let response = {
                success: "Your changes were successfully saved."
            };

            return response;
        }
    }
});
