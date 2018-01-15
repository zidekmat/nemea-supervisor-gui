<template>
  <v-card flat>
    <v-data-table v-bind:headers="headers" :items="mocked.listItems" hide-actions>
      <template slot="items" slot-scope="props">
        <td>{{ props.item.name }}</td>
        <td class="text-xs-right">{{ enabledToString(props.item.enabled) }}</td>
        <td class="text-xs-right"><v-btn>Export</v-btn></td>
        <td class="text-xs-right">
          <v-btn color="primary" :to="props.item.path">View/Edit</v-btn>
        </td>
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
      headers: [
        {text: "Name", sortable: true, value: "name", align: "left"},
        {sortable: true, value: "enabled"},
      ],
    }
  },
  watch: {
    mocked: function (val) {console.log(val)}
  },
  computed: {
  },
  methods: { 
    enabledToString: function (enabled) {
      return enabled ? "Enabled" : "Disabled"
    },
  },
  mounted () {},
  created () {
  }
}
</script>
