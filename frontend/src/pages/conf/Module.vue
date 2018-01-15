<template>
  <conf-main-component :mocked="mocked"></conf-main-component>
</template>

<script>
export default {
  data () {
    return {
      mocked: {
        conf: [
          {val: "Module 1", label: 'Name', key: 'confName'},
          {val: "/path/to/exe", label: 'Executable path', key: 'confPath'},
          {val: true, label: 'Enabled', key: 'confEnabled'},
        ],
        headers: [
          {text: "Name", sortable: true, value: "name", align: "left"},
          {sortable: true, value: "enabled"},
        ],
        listItems: [
          {name: "Instance 1", enabled: true, path: "/conf/Group 1/Module 3/Instance 1"},
          {name: "inst_y", enabled: true, path: "/conf/Group 1/Module 4/inst_y"},
        ],
        addNewConf: [
          {val: "", label: 'Name', key: 'confName'},
          {val: true, label: 'Enabled', key: 'confEnabled'},
          {val: -1, label: 'Maximum of restarts per minute', key: 'confRestarts'},
          {val: false, label: 'Is sysrepo ready', key: 'confSysrepoReady'},
          {val: "", label: 'CLI params', key: 'confParams'},
        ],
        tabs: {
          labels: {
            children: "Instances",
            addNew: "Add new instance",
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
