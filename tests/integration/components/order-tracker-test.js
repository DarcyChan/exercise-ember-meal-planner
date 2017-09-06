import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import Ember from 'ember';

const orderManager = Ember.Service.extend({
    menuSelection: {
        Monday: { isSelected: false }
    }
});

moduleForComponent('order-tracker', 'Integration | Component | order tracker', {
    integration: true,

    beforeEach: function() {
        this.register('service:order-manager', orderManager);
        // Calling inject puts the service instance in the context of the test,
        // making it accessible as "orderManager" within each test
        this.inject.service('order-manager', { as: 'orderManager' });
    }
});

test('it renders', function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(hbs`{{order-tracker}}`);

    assert.equal(
        this.$()
            .text()
            .trim()
            .replace(/\s+|\r?\n|\r/g, ' '),
        'Weekly Meal Planner Select a day Monday Breakfast: No meal selected Lunch: No meal selected Dinner: No meal selected'
    );
});
