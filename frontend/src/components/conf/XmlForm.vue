<template>
  <v-card class="pa-3">
    <v-layout row>
      <v-flex xs-6>
        <v-text-field label="Configuration" v-model="conf" textarea>
        </v-text-field>
      </v-flex>
      <v-flex xs-6>
        <v-text-field :label="schemaLabel" v-model="schema" textarea readonly>
        </v-text-field>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs8></v-flex>
      <v-flex xs4>
        <v-btn>Export configuration</v-btn>
        <v-btn>Save</v-btn>
      </v-flex>
    </v-layout>
  </v-card>
</template>

<script>
export default {
  // 'data' expected to be passed from parent including this component
  // however can't be mutated from here, so i use it to mock initial values only
  props: ['mocked'],
  data () {
    return {
      // TODO endpoint to fetch data/validations should be here
      //      + endpoint to update data
      conf: this.mocked.conf,
      schema: this.mocked.schema,
      schemaType: "yin",
      schemaLabel: "YIN schema"
    }
  },
  computed: {
  },
  methods: { 
  },
  mounted () {},
  created () {
  }
}
</script>
