import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import Ember from 'ember';

const orderManager = Ember.Service.extend({
    selectedDay: 'Monday'
});

moduleForComponent('menu-header', 'Integration | Component | menu header', {
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

    this.render(hbs`{{menu-header}}`);

    assert.equal(
        this.$()
            .text()
            .trim(),
        'Select a meal plan for Monday'
    );

    this.set('orderManager.selectedDay', 'Tuesday');
    assert.equal(
        this.$()
            .text()
            .trim(),
        'Select a meal plan for Tuesday',
        'location display should change'
    );
});
