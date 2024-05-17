<template>
  <v-dialog v-model="dialog" width="800">
    <div class="bg-white rounded-xl p-5 sm:flex justify-center">
      <div class="mt-4 w-full">
        <div class="">
          <span class="text-2xl text-black">Configurar</span>
        </div>
        <v-form class="mt-3" fast-fail @submit.prevent>
          <v-text-field v-model="text" label="Texto"></v-text-field>

          <v-text-field v-model="description" label="Descrição"></v-text-field>

          <div>
            <v-btn @click="saveUser()" class="mt-2" type="submit" block>{{
              isEdit ? "Editar" : "Salvar"
            }}</v-btn>
          </div>
        </v-form>
      </div>
      <div class="w-[1px] mx-3 bg-gray-300 h-full"></div>
      <div class="overflow-y-auto w-full max-h-[500px]">
        <v-card
          v-for="user of users"
          :key="user.id"
          class="mx-auto bg-slate-300 mb-3"
          max-width="350"
          flat
          variant="outlined"
        >
          <v-card-item>
            <v-card-title>
              <div class="flex justify-between">
                <div>{{ user.text }}</div>
                <div class="flex gap-1">
                  <div
                    class="cursor-pointer hover:opacity-60"
                    @click="editUser(user)"
                  >
                    <v-icon
                      size="small-xl"
                      icon="fa-regular fa-pen-to-square"
                    ></v-icon>
                  </div>
                  <div
                    class="cursor-pointer hover:opacity-60"
                    @click="removeUser(user.id)"
                  >
                    <v-icon
                      size="small-xl"
                      icon="fa-solid fa-trash-can"
                    ></v-icon>
                  </div>
                </div>
              </div>
            </v-card-title>

            <v-card-subtitle> {{ user.id }} </v-card-subtitle>
          </v-card-item>

          <v-card-text> {{ user.description }} </v-card-text>
        </v-card>
      </div>
    </div>
  </v-dialog>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { ActionTypes } from "../../store/modules/Users/actions";
import { User } from "../../types/User";

export default defineComponent({
  name: "settings-dialog",

  props: ["dialogProp"],

  setup() {
    return {
      dialog: ref(false),
      text: ref(""),
      description: ref(""),
      idEdit: ref(""),
      isEdit: ref(false),
    };
  },

  mounted() {
    this.$store.dispatch(ActionTypes.GET_USERS);
  },

  methods: {
    saveUser() {
      if (this.text) {
        if (this.isEdit) {
          this.$store.dispatch(ActionTypes.UPDATE_BY_ID, {
            id: this.idEdit,
            text: this.text,
            description: this.description,
          });
          this.isEdit = false;
        } else {
          this.$store.dispatch(ActionTypes.ADD_USER, {
            text: this.text,
            description: this.description,
          });
        }

        this.text = "";
        this.description = "";
      }
    },

    editUser(user: User) {
      this.idEdit = user.id;
      this.text = user.text;
      this.description = user.description;
      this.isEdit = true;
    },

    removeUser(id: string) {
      this.$store.dispatch(ActionTypes.DELETE_BY_ID, id);
    },
  },

  watch: {
    dialogProp(newVal) {
      this.dialog = newVal;
      if (newVal === false) {
        this.$emit("closeDialog");
      }
    },

    dialog(newVal) {
      if (newVal === false) {
        this.$emit("closeDialog");
      }
    },
  },

  computed: {
    users() {
      console.log("asdf", this.$store.state);
      return this.$store.state?.UsersModule?.userList;
    },
  },
});
</script>