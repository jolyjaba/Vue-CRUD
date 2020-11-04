<template>
  <div class="modal-block" v-if="isModalOpen">
    <div class="modal-block__message" :class="{ 'add-form': !isDeleteBlock }">
      <div class="modal-block__close" @click="onModalOpen">
        <img
          src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTExLjk5NSA1MTEuOTk1IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTEuOTk1IDUxMS45OTU7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxnPg0KCQk8cGF0aCBkPSJNNDM3LjEyNiw3NC45MzljLTk5LjgyNi05OS44MjYtMjYyLjMwNy05OS44MjYtMzYyLjEzMywwQzI2LjYzNywxMjMuMzE0LDAsMTg3LjYxNywwLDI1Ni4wMDUNCgkJCXMyNi42MzcsMTMyLjY5MSw3NC45OTMsMTgxLjA0N2M0OS45MjMsNDkuOTIzLDExNS40OTUsNzQuODc0LDE4MS4wNjYsNzQuODc0czEzMS4xNDQtMjQuOTUxLDE4MS4wNjYtNzQuODc0DQoJCQlDNTM2Ljk1MSwzMzcuMjI2LDUzNi45NTEsMTc0Ljc4NCw0MzcuMTI2LDc0LjkzOXogTTQwOS4wOCw0MDkuMDA2Yy04NC4zNzUsODQuMzc1LTIyMS42NjcsODQuMzc1LTMwNi4wNDIsMA0KCQkJYy00MC44NTgtNDAuODU4LTYzLjM3LTk1LjIwNC02My4zNy0xNTMuMDAxczIyLjUxMi0xMTIuMTQzLDYzLjM3LTE1My4wMjFjODQuMzc1LTg0LjM3NSwyMjEuNjY3LTg0LjM1NSwzMDYuMDQyLDANCgkJCUM0OTMuNDM1LDE4Ny4zNTksNDkzLjQzNSwzMjQuNjUxLDQwOS4wOCw0MDkuMDA2eiIvPg0KCTwvZz4NCjwvZz4NCjxnPg0KCTxnPg0KCQk8cGF0aCBkPSJNMzQxLjUyNSwzMTAuODI3bC01Ni4xNTEtNTYuMDcxbDU2LjE1MS01Ni4wNzFjNy43MzUtNy43MzUsNy43MzUtMjAuMjksMC4wMi0yOC4wNDYNCgkJCWMtNy43NTUtNy43NzUtMjAuMzEtNy43NTUtMjguMDY1LTAuMDJsLTU2LjE5LDU2LjExMWwtNTYuMTktNTYuMTExYy03Ljc1NS03LjczNS0yMC4zMS03Ljc1NS0yOC4wNjUsMC4wMg0KCQkJYy03LjczNSw3Ljc1NS03LjczNSwyMC4zMSwwLjAyLDI4LjA0Nmw1Ni4xNTEsNTYuMDcxbC01Ni4xNTEsNTYuMDcxYy03Ljc1NSw3LjczNS03Ljc1NSwyMC4yOS0wLjAyLDI4LjA0Ng0KCQkJYzMuODY4LDMuODg3LDguOTY1LDUuODExLDE0LjA0Myw1LjgxMXMxMC4xNTUtMS45NDQsMTQuMDIzLTUuNzkybDU2LjE5LTU2LjExMWw1Ni4xOSw1Ni4xMTENCgkJCWMzLjg2OCwzLjg2OCw4Ljk0NSw1Ljc5MiwxNC4wMjMsNS43OTJjNS4wNzgsMCwxMC4xNzUtMS45NDQsMTQuMDQzLTUuODExQzM0OS4yOCwzMzEuMTE3LDM0OS4yOCwzMTguNTYyLDM0MS41MjUsMzEwLjgyN3oiLz4NCgk8L2c+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg=="
        />
      </div>
      <div v-if="isDeleteBlock" class="modal-block__text">
        Вы точно хотите удалить?
      </div>
      <div v-else class="modal-block__text">
        Заполните поля
      </div>
      <div v-if="!isDeleteBlock" class="modal-block__form">
        <div class="modal-block__form modal-block__form--name">
          <label for="name">{{
            isUpdateBlock ? "Название" : "Введите название"
          }}</label>
          <input
            placeholder="Название"
            type="text"
            name="name"
            id="name"
            :value="itemForm.itemName"
            @change="onChangeName"
          />
        </div>
        <div class="modal-block__form modal-block__form--count">
          <label for="count">Количество</label>
          <input
            placeholder="Опционально"
            type="number"
            name="count"
            id="count"
            :value="itemForm.itemCount"
            @change="onChangeCount"
          />
        </div>
      </div>
      <div class="modal-block__buttons">
        <div class="modal-block__cancel" @click="onModalOpen">Отмена</div>
        <div class="modal-block__confirm" @click="onConfirm">
          {{
            isDeleteBlock
              ? "Подтверждаю"
              : isUpdateBlock
              ? "Обновить"
              : "Добавить"
          }}
        </div>
      </div>
    </div>
    <div class="modal-block__overlay" @click="onModalOpen">Overlay</div>
  </div>
</template>

<script>
export default {
  name: "ModalBlock",
  props: {
    isDeleteBlock: { type: Boolean, required: true },
    isUpdateBlock: { type: Boolean, required: false },
    isModalOpen: { type: Boolean, required: true },
    onModalOpen: { type: Function, required: true },
    onConfirm: { type: Function, required: true },
    itemForm: { type: Object, required: false }
  },
  methods: {
    onChangeName($event) {
      this.$emit("input-name", $event.target.value.trim());
    },
    onChangeCount($event) {
      this.$emit("input-count", $event.target.value);
    }
  }
};
</script>

<style lang="scss" scoped>
.modal-block {
  position: absolute;
  top: 0;
  height: 100vh;
  width: 100vw;
  display: flex;
  &__form {
    display: flex;
    flex-direction: column;
    margin: 5px 0;
    &--name,
    &--count {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      > input {
        height: 25px;
        padding: 5px 10px;
        border: 1px solid gray {
          radius: 5px;
        }
      }
    }
  }
  &__message {
    background-color: #fff;
    border-radius: 10px;
    width: 350px;
    height: 200px;
    margin: auto;
    z-index: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 40px 20px 30px;
    position: relative;
    &.add-form {
      padding: 20px;
    }
  }
  &__close {
    position: absolute;
    top: 15px;
    right: 20px;
    cursor: pointer;
    > img {
      display: block;
      width: 20px;
      height: 20px;
    }
  }
  &__text {
    font-size: 18px;
    text-align: center;
  }
  &__buttons {
    display: flex;
    justify-content: space-evenly;
    > div {
      padding: 8px 10px;
      cursor: pointer;
      flex: 1;
      margin: 0 10px;
      text-align: center;
      color: #fff;
      font-weight: 700;
      &:first-of-type {
        background-color: red;
      }
      &:last-of-type {
        background-color: blue;
      }
      border: {
        radius: 5px;
      }
    }
  }
  &__overlay {
    cursor: pointer;
    position: absolute;
    top: 0;
    width: 100vw;
    height: 100vh;
    background-color: black;
    opacity: 0.2;
  }
}
</style>
