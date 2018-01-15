<template>
  <conf-main-component :mocked="mocked"></conf-main-component>
</template>

<script>
export default {
  data () {
    return {
      mocked: {
        conf: {
          name: {val:"i1", type: "string"},
          type: {val:"", type:"enum"},
          dir: {val:"", type:"enum", label: "Direction"},
          timeout: {val:"", type:"string", pattern: "(([1-9]+[0-9]*)|WAIT|NO_WAIT|HALF_WAIT)" },
          buffer: {val:"", type:"string", pattern: "(on|off)", cond: "conf.dir == 'OUT'"},
          autoflush: {val:"", type:"string", pattern: "(off|[1-9][0-9]*)", cond: "conf.dir == 'OUT'"},
          host: {val:"", type:"string", cond: "conf.dir == 'IN'"}
        },
        headers: [],
        listItems: [],
        addNewConf: [
          {},
          // TODO
        ],
        tabs: {
          labels: {
            children: null,
            addNew: null,
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
