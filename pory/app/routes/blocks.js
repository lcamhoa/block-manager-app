import Ember from 'ember';

export default Ember.Route.extend({
    model: function()
    {
        return {
                    blocks: this.get('store').findAll('block') ,
                    surveyors: this.get('store').findAll('surveyor') ,
            };
    }

});
