/*
 * The keys of the object will be the categories of toys
 * The values will be objects that have the toy names as keys and the total quantities of each toy in that category as values
 * If there are toys with the same name in the same category, you must sum their quiantities
 * if the array is empty the function should return and empty object;
 * */

type Inventory = Array<{ name: string; quantity: number; category: string }>;

function organizeInventory(inventory: Inventory): object {
  // Code here
  if (inventory.length === 0) {
    return {};
  }

  const mapInventory = {};

  inventory.forEach((toy) => {
    // Validate not exists category
    if (!Object.keys(mapInventory).some((e) => e === toy.category)) {
      mapInventory[`${toy.category}`] = {};
    }

    // Validate not exists the same name toy
    if (
      !Object.keys(mapInventory[`${toy.category}`]).some((e) => e === toy.name)
    ) {
      mapInventory[`${toy.category}`] = {
        ...mapInventory[`${toy.category}`],
        [`${toy.name}`]: toy.quantity,
      };
    } else {
      const mapToy = mapInventory[`${toy.category}`][`${toy.name}`];
      mapInventory[`${toy.category}`] = {
        ...mapInventory[`${toy.category}`],
        [`${toy.name}`]: mapToy + toy.quantity,
      };
    }
  });

  return mapInventory;
}

const mockInventory: Inventory = [
  { name: "doll", quantity: 5, category: "toys" },
  { name: "car", quantity: 3, category: "toys" },
  { name: "ball", quantity: 2, category: "sports" },
  { name: "car", quantity: 2, category: "toys" },
  { name: "racket", quantity: 4, category: "sports" },
];

console.log(organizeInventory(mockInventory));
