import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('menu-item', 'Integration | Component | menu item', {
    integration: true
});

test('it renders', function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(hbs`{{menu-item}}`);

    assert.equal(
        this.$()
            .text()
            .trim()
            .replace(/\s+|\r?\n|\r/g, ' '),
        'More info Breakfast Lunch Dinner'
    );
});
