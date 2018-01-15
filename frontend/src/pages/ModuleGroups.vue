<template>
  <v-container grid-list-md class="mt-0 ml-0 mr-0">
    <v-toolbar color="deep-purple darken-3">
      <v-toolbar-title>{{ secondHeader }}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-side-icon class="hidden-md-and-up"></v-toolbar-side-icon>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat>Add new</v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <v-card>
      <v-data-table
        v-bind:headers="headers"
        :items="items"
        hide-actions
      >
        <template slot="items" slot-scope="props">
          <td>{{ props.item.name }}</td>
          <td class="text-xs-right">{{ enabledToString(props.item.enabled) }}</td>
          <td class="text-xs-right"><v-btn>Export</v-btn></td>
          <td class="text-xs-right"><v-btn color="primary" :to="props.item.path">View/Edit</v-btn></td>
        </template>
      </v-data-table>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      items: [
        {name: "Group 1", enabled: true, path: "/conf/Group 1"},
        {name: "Group 3", enabled: true, path: "/conf/Group 3"},
        {name: "Group r", enabled: false, path: "/conf/Group r"},
        {name: "Group 4", enabled: true, path: "/conf/Group 4"},
      ],
      secondHeader: "Module Groups - Configuration"
    }
  },
  methods: { 
  },
  mounted () {},
  created () {
  }
}
</script>
