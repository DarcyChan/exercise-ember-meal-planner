import Ember from 'ember';

export default Ember.Component.extend({
    orderManager: Ember.inject.service('order-manager'),
    tagName: 'span',
    classNames: ['order-item'],

    actions: {
        remove(day, menuCategory, item) {
            this.get('orderManager').removeMenuOption(day, menuCategory, item);
        }
    }
});
