import Ember from 'ember';

export default Ember.Component.extend({
    orderManager: Ember.inject.service('order-manager'),
    classNames: ['order-tracker'],

    actions: {
        toggleActive() {
            this.get('orderManager').toggleMenu();
        },
        setDayTo(day) {
            this.get('orderManager').setSelectedDayTo(day);
            this.get('orderManager').toggleMenu('close');
        }
    }
});
