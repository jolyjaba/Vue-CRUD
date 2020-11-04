<template>
  <div class="header">
    <div class="header__title">Организационная структура</div>
  </div>
  <div class="main">
    <div class="main__section main__section--add">
      <div class="add-button" @click="onAddModalOpen(getItems)">
        <img
          class="add-button__icon"
          src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPGc+DQoJCTxwYXRoIGQ9Ik0yNTYsMEMxMTQuODMzLDAsMCwxMTQuODMzLDAsMjU2czExNC44MzMsMjU2LDI1NiwyNTZzMjU2LTExNC44NTMsMjU2LTI1NlMzOTcuMTY3LDAsMjU2LDB6IE0yNTYsNDcyLjM0MQ0KCQkJYy0xMTkuMjc1LDAtMjE2LjM0MS05Ny4wNDYtMjE2LjM0MS0yMTYuMzQxUzEzNi43MjUsMzkuNjU5LDI1NiwzOS42NTlTNDcyLjM0MSwxMzYuNzA1LDQ3Mi4zNDEsMjU2UzM3NS4yOTUsNDcyLjM0MSwyNTYsNDcyLjM0MXoNCgkJCSIvPg0KCTwvZz4NCjwvZz4NCjxnPg0KCTxnPg0KCQk8cGF0aCBkPSJNMzU1LjE0OCwyMzQuMzg2SDI3NS44M3YtNzkuMzE4YzAtMTAuOTQ2LTguODY0LTE5LjgzLTE5LjgzLTE5Ljgzcy0xOS44Myw4Ljg4NC0xOS44MywxOS44M3Y3OS4zMThoLTc5LjMxOA0KCQkJYy0xMC45NjYsMC0xOS44Myw4Ljg4NC0xOS44MywxOS44M3M4Ljg2NCwxOS44MywxOS44MywxOS44M2g3OS4zMTh2NzkuMzE4YzAsMTAuOTQ2LDguODY0LDE5LjgzLDE5LjgzLDE5LjgzDQoJCQlzMTkuODMtOC44ODQsMTkuODMtMTkuODN2LTc5LjMxOGg3OS4zMThjMTAuOTY2LDAsMTkuODMtOC44ODQsMTkuODMtMTkuODNTMzY2LjExNCwyMzQuMzg2LDM1NS4xNDgsMjM0LjM4NnoiLz4NCgk8L2c+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg=="
        />
        <p>Добавить</p>
      </div>
    </div>
    <div class="main__section">
      <div class="table">
        <div class="table__header">
          <div class="table__column table__column--name">
            <p>Name</p>
          </div>
          <div class="table__column table__column--count">
            <p>Count</p>
          </div>
          <div class="table__column table__column--actions">
            <p>Actions</p>
          </div>
        </div>
        <ul class="table__content">
          <row-item
            v-for="(item, index) in getItems"
            :item="item"
            :items="getItems"
            :key="`${item.name}-${index}`"
            @delete-item="onDeleteModalOpen"
            @input-name="onInputName"
            @input-count="onInputCount"
            @add-item-to-child="onAddModalOpen"
            @update-item="onUpdateModalOpen"
          />
        </ul>
      </div>
    </div>
  </div>
  <modal-block
    :isDeleteBlock="true"
    :isModalOpen="isDeleteModalOpen"
    :onModalOpen="onDeleteModalOpen"
    :onConfirm="onConfirmDeleteItem"
  />
  <modal-block
    :isDeleteBlock="false"
    :isModalOpen="isAddModalOpen"
    :onModalOpen="onAddModalOpen"
    :onConfirm="onConfirmAddItem"
    :itemForm="itemForm"
    @input-name="onInputName"
    @input-count="onInputCount"
  />
  <modal-block
    :isDeleteBlock="false"
    :isUpdateBlock="true"
    :isModalOpen="isUpdateModalOpen"
    :onModalOpen="onUpdateModalOpen"
    :onConfirm="onConfirmUpdateItem"
    :itemForm="itemForm"
    @input-name="onInputName"
    @input-count="onInputCount"
  />
</template>

<script>
import RowItem from "@/components/Item";
import ModalBlock from "@/components/ModalBlock";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "App",
  components: { RowItem, ModalBlock },
  data: () => ({
    isDeleteModalOpen: false,
    isAddModalOpen: false,
    isUpdateModalOpen: false,
    itemToDelete: null,
    itemToUpdate: null,
    listToAdd: null,
    itemForm: {
      itemName: "",
      itemCount: "",
      itemChildren: []
    }
  }),
  methods: {
    ...mapActions(["onDeleteItem", "onAddItem", "onUpdateItem"]),
    onDeleteModalOpen(obj) {
      this.isDeleteModalOpen = !this.isDeleteModalOpen;
      if (this.isDeleteModalOpen) {
        this.itemToDelete = obj;
      } else {
        this.itemToDelete = null;
      }
    },
    onUpdateModalOpen(obj) {
      this.isUpdateModalOpen = !this.isUpdateModalOpen;
      if (this.isUpdateModalOpen) {
        this.itemToUpdate = obj;
        this.itemForm.itemName = obj.name;
        this.itemForm.itemCount = obj.count ? obj.count : 0;
      } else {
        this.itemForm.itemName = "";
        this.itemForm.itemCount = "";
      }
    },
    onAddModalOpen(obj) {
      this.isAddModalOpen = !this.isAddModalOpen;
      if (this.isAddModalOpen) {
        this.listToAdd = obj;
      } else {
        this.listToAdd = null;
        this.itemForm.itemName = "";
        this.itemForm.itemCount = "";
        this.itemForm.itemChildren = [];
      }
    },
    onConfirmDeleteItem() {
      if (this.itemToDelete) {
        this.onDeleteItem(this.itemToDelete);
        this.onDeleteModalOpen();
      }
    },
    onConfirmAddItem() {
      if (this.itemForm.itemName) {
        let itemToAdd = {
          list: this.listToAdd,
          itemName: this.itemForm.itemName,
          itemCount: this.itemForm.itemCount ? this.itemForm.itemCount : 0,
          itemChildren: this.itemForm.itemChildren
        };
        this.onAddItem(itemToAdd);
        this.onAddModalOpen();
      } else {
        alert("Заполните поля название!");
      }
    },
    onConfirmUpdateItem() {
      this.onUpdateItem({
        item: this.itemToUpdate,
        name: this.itemForm.itemName,
        count: this.itemForm.itemCount
      });
      this.onUpdateModalOpen();
    },
    onInputName(value) {
      this.itemForm.itemName = value;
    },
    onInputCount(value) {
      this.itemForm.itemCount = +value;
    }
  },
  computed: {
    ...mapGetters(["getItems"])
  }
};
</script>

<style lang="scss">
* {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

#app {
  height: 100vh;
}

.add-button {
  display: flex;
  padding: 5px 10px;
  width: 120px;
  cursor: pointer;
  justify-content: space-between;
  border: 1px solid gray {
    radius: 5px;
  }
  &__icon {
    max-width: 18px;
    max-height: 18px;
  }
}

.header {
  background-color: darkcyan;
  color: #ffffff;
  font-size: 20px;
  font-weight: 700;
  &__title {
    padding: 10px;
    max-width: 1200px;
    margin: auto;
  }
}

.main {
  display: flex;
  flex-direction: column;
  &__section {
    display: flex;
    flex-direction: column;
    max-width: 1200px;
    margin: auto;
    width: 100%;
    &--add {
      padding: 10px 20px;
      align-items: flex-start;
      flex-direction: row;
    }
  }
}

.table {
  display: flex;
  flex-direction: column;
  &__header {
    display: flex;
    background-color: darkcyan;
    color: #ffffff;
    font-weight: 700;
    font-size: 20px;
  }
  &__column {
    border: 1px solid darkgray;
    display: flex;
    justify-content: space-between;
    align-items: center;
    > p {
      margin: 10px 15px;
    }
    &--name {
      flex: 6;
    }
    &--count,
    &--actions {
      width: 12vw;
    }
    &--city {
      &-name,
      &-childs {
        border: none;
        margin: 10px 15px;
      }
    }
    &--actions {
      justify-content: space-evenly;
      &-edit,
      &-remove {
        margin: 10px 15px;
        border: none;
      }
    }
  }
  &__content {
    display: flex;
    flex-direction: column;
  }
  &__row {
    display: flex;
    flex-wrap: wrap;
  }
}
</style>
