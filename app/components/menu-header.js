import Ember from 'ember';

export default Ember.Component.extend({
    orderManager: Ember.inject.service('order-manager'),
    tagName: 'h2',
    classNames: ['menu-title']
});
