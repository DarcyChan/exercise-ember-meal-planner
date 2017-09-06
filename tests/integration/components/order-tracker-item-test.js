import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent(
    'order-tracker-item',
    'Integration | Component | order tracker item',
    {
        integration: true
    }
);

test('it renders', function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.set('label', 'Burger');
    this.render(hbs`{{order-tracker-item label=label}}`);

    assert.equal(
        this.$()
            .text()
            .trim()
            .replace(/\s+|\r?\n|\r/g, ' '),
        `Burger x`
    );
});
