<template>
  <v-row>
    <v-dialog v-model="dialog" scrollable max-width="850px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn class="mr-4" color="grey lighten-1" x-large rounded v-bind="attrs" v-on="on">
          <v-icon large class="mr-2">mdi-upload</v-icon>
          Upload Plan
        </v-btn>
      </template>
      <v-card>
        <v-card-title class="text-lg-h5">Upload Study Plan</v-card-title>
        <v-divider></v-divider>
        <v-card-text class="text-left" max-height="850px">
          <v-list-item-content>
            <v-list-item>
              <v-text-field
                label="Name of Study Plan"
                placeholder="Computer Science Major..."
                v-model="uploadName"
                outlined
              ></v-text-field>
            </v-list-item>
            <v-list-item>
              <v-text-field
                label="Name of Author"
                placeholder="Your name here..."
                v-model="authorName"
                outlined
              ></v-text-field>
            </v-list-item>
            <v-list-item>
              <v-text-field
                label="Study Plan Description"
                placeholder="Provide details here..."
                v-model="details"
                outlined
              ></v-text-field>
            </v-list-item>
            <v-list-item-title class="headline mb-2">{{"Study Plan Summary"}}</v-list-item-title>
            <v-list-item-subtitle class="font-weight-regular text-lg-body-1">{{"Y1S1: " + y1s1Plan}}</v-list-item-subtitle>
            <v-list-item-subtitle class="font-weight-regular text-lg-body-1">{{"Y1S2: " + y1s2Plan}}</v-list-item-subtitle>
            <v-list-item-subtitle class="font-weight-regular text-lg-body-1">{{"Y2S1: " + y2s1Plan}}</v-list-item-subtitle>
            <v-list-item-subtitle class="font-weight-regular text-lg-body-1">{{"Y2S2: " + y2s2Plan}}</v-list-item-subtitle>
            <v-list-item-subtitle class="font-weight-regular text-lg-body-1">{{"Y3S1: " + y3s1Plan}}</v-list-item-subtitle>
            <v-list-item-subtitle class="font-weight-regular text-lg-body-1">{{"Y3S2: " + y3s2Plan}}</v-list-item-subtitle>
            <v-list-item-subtitle class="font-weight-regular text-lg-body-1">{{"Y4S1: " + y4s1Plan}}</v-list-item-subtitle>
            <v-list-item-subtitle class="font-weight-regular text-lg-body-1">{{"Y4S2: " + y4s2Plan}}</v-list-item-subtitle>
            <v-btn class="mx-2" color="green darken-2" outlined x-large rounded @click="dialog = false; uploadPlan()" max-width="380px">
              <v-icon class="mr-2">mdi-cloud-upload</v-icon>
              Confirm Upload
            </v-btn>
          </v-list-item-content>
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
import { db } from '@/firebase';

export default {
  data () {
    return {
      plan: '',
      dialog: false,
      uploadName: '',
      details: '',
      authorName: ''
    }
  },
  props: ['y1s1Plan', 'y1s2Plan', 'y2s1Plan', 'y2s2Plan', 'y3s1Plan', 'y3s2Plan', 'y4s1Plan', 'y4s2Plan'],
  methods: {
    uploadPlan: function() {
      if (this.authorName === '') {
        this.authorName = 'Anonymous'
      }
      this.$firestore.plans.add(
        {
          name: this.uploadName,
          description: this.details,
          author: this.authorName,
          y1s1: this.y1s1Plan,
          y1s2: this.y1s2Plan,
          y2s1: this.y2s1Plan,
          y2s2: this.y2s2Plan,
          y3s1: this.y3s1Plan,
          y3s2: this.y3s2Plan,
          y4s1: this.y4s1Plan,
          y4s2: this.y4s2Plan,
        }
      );
      this.uploadName = '';
      this.details = '';
      this.authorName = '';
    }
  },
  firestore() {
    return {
      plans: db.collection('plans'),
    }
  }
}
</script>

<style>
</style>
