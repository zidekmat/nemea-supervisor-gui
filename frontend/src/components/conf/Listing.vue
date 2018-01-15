<template>
  <v-card flat>
    <v-data-table :headers="mocked.headers" :items="mocked.listItems" hide-actions>
      <template slot="items" slot-scope="props">
        <tr @click="$router.push(props.item.path)">
          <td v-for="(val, key) in objWithoutPath(props.item)">
            {{ typeof val == 'boolean' ? enabledToString(val) : val }}
          </td>
          <td class="text-xs-right">
            <v-btn color="primary" :to="props.item.path">View/Edit</v-btn>
            <v-btn>Export</v-btn>
            <v-btn color="error">Remove</v-btn>
          </td>
        </tr>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
export default {
  // 'data' expected to be passed from parent including this component
  // however can't be mutated from here, so i use it to mock initial values only
  props: ['mocked'],
  data () {
    return {
    }
  },
  watch: {
    mocked: function (val) {console.log(val)}
  },
  computed: {
  },
  methods: {
    objWithoutPath: function (items) {
      let copy = Object.assign({}, items)
      delete copy.path
      return copy
    },
    enabledToString: function (enabled) {
      return enabled ? "Enabled" : "Disabled"
    },
  },
  mounted () {},
  created () {
  }
}
</script>
