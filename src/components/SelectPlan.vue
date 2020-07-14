<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" scrollable max-width="900px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn class="button-style" color="primary" dark v-bind="attrs" v-on="on">
          Load Plan
        </v-btn>
      </template>
      <v-card>
        <v-card-title>Select Study Plan</v-card-title>
        <v-divider></v-divider>
        {{'Bachelor of Computer Science'}}
        <v-card-text style="height: 500px;">
                <div>
                No exemptions from CS1010, ES1103, MA1301
                <v-btn>Select</v-btn>
                </div><br>
                <div>
                Exemptions from CS1010, but not ES1103, MA1301
                <v-btn>Select</v-btn>
                </div><br>
                <div>
                Exemptions from CS1010 and MA1301, but not ES1103
                <v-btn>Select</v-btn>
                </div><br>
                <div>
                Holy trinity of CS mods (Difficult Plan)
                <v-btn>Select</v-btn>
                </div><br>
                <div>
                All the math mods in one semester
                <v-btn>Select</v-btn>
                </div><br>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  data () {
    return {
      plan: '',
      dialog: false
    }
  },
  methods: {
  }
}
</script>

<style>
  .button-style {
    border-radius: 20px;
    font-size:22px;
    font-family: Avenir;
    font-weight: bold;
    color: rgb(0, 0, 0);
    background: #9a9a9a;
    border:1px solid #000;
    width: 88px;
    height: 100px;
    margin: 5px;
  }
  .button-style:hover {
    border-radius: 20px;
    font-size:24px;
    font-family: Avenir;
    font-weight: bold;
    color: rgb(0, 0, 0);
    background: #787878;
    border:1px solid #000;
    width: 92px;
    height: 108px;
    margin: 5px;
  }
</style>
