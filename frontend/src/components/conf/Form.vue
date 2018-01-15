<template>
  <v-card>
  <v-layout
    row
    v-show="('cond' in obj) ? obj.cond(conf) : true"
    v-for="(obj, key) in conf"
    :key="key"
  >
    <v-flex xs-4>
      <v-tooltip 
        bottom 
      >
        <v-switch
          v-if="obj.type == 'boolean'"
          :label="humanLabel(obj, key)"
          slot="activator"
          v-model="obj.val">
        </v-switch>
        <v-text-field
          v-else-if="obj.type == 'integer'"
          :label="humanLabel(obj, key)"
          type="number"
          slot="activator"
          v-model="obj.val">
        </v-text-field>
        <v-text-field
          v-else-if="obj.type == 'string'"
          :label="humanLabel(obj, key)"
          :rules="[
            () => { return (new RegExp(obj.pattern)).test(obj.val) || `Value not matching pattern ${obj.pattern}` }
          ]"
          slot="activator"
          v-model="obj.val">
        </v-text-field>
        <v-select
          v-else-if="obj.type == 'enum'"
          :items="obj.enumVals"
          v-model="obj.val"
          :label="humanLabel(obj, key)"
          slot="activator"
          single-line
          bottom
        ></v-select>
        <span>{{ obj.description }}</span>
      </v-tooltip>
    </v-flex>
    <v-flex xs-8 mt-4>
      <v-tooltip 
        right 
      >
        <v-icon medium>info</v-icon>        
      </v-tooltip>
    </v-flex>
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
      rules: {
        pattern: (obj) => {
          console.log(obj)
          //if ( !('pattern' in obj)) {
          //  return true;          
          //}
          const regex = new RegExp(obj.pattern)
          return (new RegExp(obj.pattern)).test(obj.val) || `Value not matching pattern ${obj.pattern}`
        },
      },
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
