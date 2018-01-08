<template>
  <conf-component :mocked="mocked"></conf-component>
</template>

<script>
export default {
  data () {
    return {
      mocked: {
        conf: [
          {val: "Group 1", label: 'Name', key: 'confName'},
          {val: true, label: 'Enabled', key: 'confEnabled'},
        ],
        headers: [
          {text: "Name", sortable: true, value: "name", align: "left"},
          {sortable: true, value: "enabled"},
        ],
        items: [
          {name: "Module 3", enabled: true, path: "/conf/Group 1/Module 3"},
          {name: "Module 4", enabled: true, path: "/conf/Group 1/Module 4"},
          {name: "Module 8", enabled: false, path: "/conf/Group 1/Module 8"},
          {name: "Module X", enabled: true, path: "/conf/Group 1/Module 3"},
        ],
        tabs: {
          labels: {
            children: "Modules",
            addNew: "Add new module",
          }
        }
      }
    }
  },
  computed: {
    treePath: function () {
      return [
        {text: this.$route.params.group, path: '/conf/' + this.$route.params.group},
        {text: this.$route.params.module, path: '/conf/' + this.$route.params.group + '/' + this.$route.params.module},
        {text: this.$route.params.instance, path: '/conf/' + this.$route.params.group + '/' + this.$route.params.module + '/' + this.$route.params.instance},
      ].filter(x => x.text != null)
    },
    controlAction: function () {
      return 'start';
    }
  },
  methods: { 
    enabledToString: function (enabled) {
      return enabled ? "Enabled" : "Disabled"
    },
    topHeaderPath: function () {

    }
  },
  mounted () {},
  created () {
  }
}
</script>
