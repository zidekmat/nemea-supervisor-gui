<template>
  <conf-main-component :mocked="mocked"></conf-main-component>
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
        addNewConf: [
          {val: "", label: 'Name', key: 'confName'},
          {val: "", label: 'Executable path', key: 'confPath'},
          {val: true, label: 'Enabled', key: 'confEnabled'},
        ],
        headers: [
          {text: "Name", sortable: true, value: "name", align: "left"},
          {sortable: true, value: "enabled"},
        ],
        listItems: [
          {name: "Module 3", enabled: true,  path: "/conf/Group 1/Module 3"},
          {name: "Module 4", enabled: true,  path: "/conf/Group 1/Module 4"},
          {name: "Module 8", enabled: false, path: "/conf/Group 1/Module 8"},
          {name: "Module X", enabled: true,  path: "/conf/Group 1/Module X"},
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
    controlAction: function () {
      return 'start';
    }
  },
  methods: { 
    topHeaderPath: function () {

    }
  },
  mounted () {},
  created () {
  }
}
</script>
