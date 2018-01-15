<template>
  <v-card>
  <v-layout row v-for="(key, obj) in conf" :key="row.key">
    <v-flex xs-4>
      <v-switch
        v-if="obj.val == 'boolean'"
        :label="humanLabel(obj, name)"
        v-model="obj.val">
      </v-switch>
      <v-text-field
        v-else-if="typeof row.val == 'number'"
        :label="row.label"
        :id="row.key"
        type="number"
        v-model="row.val">
      </v-text-field>
      <v-text-field
        v-else
        :label="row.label"
        :id="row.key"
        v-model="row.val">
      </v-text-field>
    </v-flex>
    <v-flex xs-8></v-flex>
  </v-layout>
  <v-layout row>
    <v-flex xs-8></v-flex>
    <v-flex xs-4>
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
    }
  },
  computed: {
  },
  methods: { 
    humanLabel: function (obj, key) {
      return ('label' in obj) ? obj.label : (key.charAt(0).toUpperCase() + key.slice(1))
    }
  },
  mounted () {},
  created () {
  }
}
</script>
