<template>
  <conf-main-component :mocked="mocked"></conf-main-component>
</template>

<script>
export default {
  data () {
    return {
      mocked: {
        conf: [
          {val: "Module 3", label: 'Name', key: 'confName'},
          {val: true, label: 'Enabled', key: 'confEnabled'},
          {val: 3, label: 'Maximum of restarts per minute', key: 'confRestarts'},
          {val: false, label: 'Is sysrepo ready', key: 'confSysrepoReady'},
          {val: "-v 3 -rt", label: 'CLI params', key: 'confParams'},
        ],
        headers: [
          {text: "Name", sortable: true, value: "name", align: "left"},
          {text: "Direction", sortable: true, value: "dir", align: "left"},
          {text: "Type", sortable: true, value: "type", align: "left"},
        ],
        listItems: [
          {name: "i1", dir: "IN", type: "UNIX",     path: "/conf/Group 1/Module 1/Instance 1/i1"},
          {name: "i2", dir: "IN", type: "TCP",      path: "/conf/Group 1/Module 1/Instance 1/i2"},
          {name: "i3", dir: "OUT", type: "TCP-TLS", path: "/conf/Group 1/Module 1/Instance 1/i3"},
        ],
        addNewConf: [],
        tabs: {
          labels: {
            children: "Interfaces",
            addNew: "Add new interface",
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
  },
  mounted () {},
  created () {
  }
}
</script>
