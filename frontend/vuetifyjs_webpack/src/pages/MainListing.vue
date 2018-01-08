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

    <conf-listing-component :mocked="mocked"></conf-listing-component>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      items: [],
      mocked: {listItems: this.items}
    }
  },
  methods: { 
    refetchItems: function () {
      console.log(`refetching for route ${this.$route.path}`)
       if (this.$route.path == '/module-groups') {
        this.mocked.listItems= [
          {name: "Group 1", enabled: true, path: "/conf/Group 1"},
          {name: "Group 3", enabled: true, path: "/conf/Group 3"},
          {name: "Group r", enabled: false, path: "/conf/Group r"},
          {name: "Group 4", enabled: true, path: "/conf/Group 4"},
        ];
      } else if (this.$route.path == '/modules') {
        this.mocked.listItems= [
          {name: "Module 1", enabled: true, path: "/conf/Group 1/Module 1"},
          {name: "Module 3", enabled: true, path: "/conf/Group 3/Module 3"},
          {name: "Module r", enabled: false, path: "/conf/Group r/Module r"},
          {name: "Module 4", enabled: true, path: "/conf/Group 4/Module 4"},
        ];
      } else if (this.$route.path == '/instances') {
        this.mocked.listItems= [
          {name: "Instance 1", enabled: true, path: "/conf/Group 1/Module 1/Instance 1"},
          {name: "Instance 3", enabled: true, path: "/conf/Group 3/Module 3/Instance 3"},
          {name: "Instance r", enabled: false, path: "/conf/Group r/Module r/Instance r"},
          {name: "Instance 4", enabled: true, path: "/conf/Group 4/Module 4/Instance 4"},
        ];
      }
      console.log(this.mocked.items[0].name);
    }
  },
  computed: {
    secondHeader: function () {
      if (this.$route.path == '/module-groups') {
        return "Module Groups - Configuration";
      } else if (this.$route.path == '/modules') {
        return "Modules - Configuration";
      } else if (this.$route.path == '/instances') {
        return "Instances - Configuration";
      }
    },
  },
  watch: {
    '$route' (to, from) {
    console.log('routing!!!' + `from: ${from.path} to: ${to.path}`);
      this.refetchItems();
      // react to route changes...
    }
  },
  mounted () {

  },
  created () {
    this.refetchItems()
  }
}
</script>
