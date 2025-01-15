/*
 * The keys of the object will be the categories of toys
 * The values will be objects that have the toy names as keys and the total quantities of each toy in that category as values
 * If there are toys with the same name in the same category, you must sum their quiantities
 * if the array is empty the function should return and empty object;
 * */
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function organizeInventory(inventory) {
    // Code here
    if (inventory.length === 0) {
        return {};
    }
    var mapInventory = {};
    inventory.forEach(function (toy) {
        var _a, _b;
        // Validate not exists category
        if (!Object.keys(mapInventory).some(function (e) { return e === toy.category; })) {
            mapInventory["".concat(toy.category)] = {};
        }
        // Validate not exists the same name toy
        if (!Object.keys(mapInventory["".concat(toy.category)]).some(function (e) { return e === toy.name; })) {
            mapInventory["".concat(toy.category)] = __assign(__assign({}, mapInventory["".concat(toy.category)]), (_a = {}, _a["".concat(toy.name)] = toy.quantity, _a));
        }
        else {
            var mapToy = mapInventory["".concat(toy.category)]["".concat(toy.name)];
            mapInventory["".concat(toy.category)] = __assign(__assign({}, mapInventory["".concat(toy.category)]), (_b = {}, _b["".concat(toy.name)] = mapToy + toy.quantity, _b));
        }
    });
    return mapInventory;
}
var mockInventory = [
    { name: "doll", quantity: 5, category: "toys" },
    { name: "car", quantity: 3, category: "toys" },
    { name: "ball", quantity: 2, category: "sports" },
    { name: "car", quantity: 2, category: "toys" },
    { name: "racket", quantity: 4, category: "sports" },
];
console.log(organizeInventory(mockInventory));
