import { createStore } from "vuex";

export default createStore({
  state: () => ({
    items: [
      {
        name: "Алматы",
        count: 100,
        children: [
          {
            name: "Управление 1",
            count: 50,
            children: [
              {
                name: "Отдел 1",
                count: 25,
                children: []
              },
              {
                name: "Отдел 2",
                count: 25,
                children: []
              }
            ]
          },
          {
            name: "Управление 2",
            count: 50,
            children: [
              {
                name: "Отдел 1",
                count: 25,
                children: []
              },
              {
                name: "Отдел 2",
                count: 25,
                children: []
              }
            ]
          }
        ]
      },
      {
        name: "Уральск",
        count: 100,
        children: [
          {
            name: "Управление 1",
            count: 50,
            children: [
              {
                name: "Отдел 1",
                count: 25,
                children: []
              },
              {
                name: "Отдел 2",
                count: 25,
                children: []
              }
            ]
          },
          {
            name: "Управление 2",
            count: 50,
            children: [
              {
                name: "Отдел 1",
                count: 25,
                children: []
              },
              {
                name: "Отдел 2",
                count: 25,
                children: []
              }
            ]
          }
        ]
      },
      {
        name: "Петропавловск",
        count: 100,
        children: [
          {
            name: "Управление 1",
            count: 50,
            children: [
              {
                name: "Отдел 1",
                count: 25,
                children: []
              },
              {
                name: "Отдел 2",
                count: 25,
                children: []
              }
            ]
          },
          {
            name: "Управление 2",
            count: 50,
            children: [
              {
                name: "Отдел 1",
                count: 25,
                children: []
              },
              {
                name: "Отдел 2",
                count: 25,
                children: []
              }
            ]
          }
        ]
      }
    ]
  }),
  mutations: {
    deleteItem(_, { item, items }) {
      items.splice(items.indexOf(item), 1);
    },
    updateItem(_, { item, name, count }) {
      item.name = name;
      item.count = count;
    },
    addItem(_, { list, itemName, itemCount, itemChildren }) {
      list.push({
        name: itemName,
        count: itemCount,
        children: itemChildren
      });
    }
  },
  actions: {
    onDeleteItem({ commit }, payload) {
      commit("deleteItem", payload);
    },
    onUpdateItem({ commit }, payload) {
      commit("updateItem", payload);
    },
    onAddItem({ commit }, payload) {
      commit("addItem", payload);
    }
  },
  getters: {
    getItems({ items }) {
      for (let item of items) {
        item.totalCount = sumUp(item);
      }
      return items;
    }
  }
});

function sumUp(object) {
  object.totalCount = object.count;
  for (let child of object.children) {
    object.totalCount += sumUp(child);
  }
  return object.totalCount;
}
