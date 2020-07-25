<template>
  <v-row>
    <v-dialog v-model="dialog" scrollable max-width="850px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn class="mr-4" color="grey lighten-1" x-large rounded v-bind="attrs" v-on="on">
          Upload Plan
        </v-btn>
      </template>
      <v-card>
        <v-card-title>Upload Study Plan</v-card-title>
        <v-divider></v-divider>
        <v-card-text class="text-left" style="height: 500px;">
            {{y4s2Plan}}
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
  props: ['y1s1Plan', 'y1s2Plan', 'y2s1Plan', 'y2s2Plan', 'y3s1Plan', 'y3s2Plan', 'y4s1Plan', 'y4s2Plan']
}
</script>

<style>
</style>
