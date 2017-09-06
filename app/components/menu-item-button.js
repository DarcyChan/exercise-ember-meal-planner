import Ember from 'ember';

export default Ember.Component.extend({
    orderManager: Ember.inject.service('order-manager'),
    tagName: '',
    menuItemName: '',
    mealCategory: '',
    isActive: Ember.computed(function() {
        let manager = this.get('orderManager');
        let name = this.get('menuItemName');
        let category = this.get('mealCategory');

        return manager.menuSelection[manager.selectedDay][category] === name;
    }),

    actions: {
        chooseItem(menuItemName, mealCategory) {
            this.get('orderManager').chooseMenuOption(
                mealCategory,
                menuItemName
            );
            this.set('isActive', !this.get('isActive'));
        }
    }
});
