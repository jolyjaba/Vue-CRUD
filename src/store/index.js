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
    changeName(_, { event, obj }) {
      obj.name = event;
    },
    addItem(_, { list, itemName, itemCount, itemChildren }) {
      list.push({ name: itemName, count: itemCount, children: itemChildren });
    }
  },
  actions: {
    onDeleteItem({ commit }, payload) {
      commit("deleteItem", payload);
    },
    onChangeName({ commit }, payload) {
      commit("changeName", payload);
    },
    onAddItem({ commit }, payload) {
      commit("addItem", payload);
    }
  },
  getters: {
    getItems({ items }) {
      return items;
    }
  },
  modules: {}
});
