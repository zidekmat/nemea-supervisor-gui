<template>
  <conf-main-component :mocked="mocked"></conf-main-component>
</template>

<script>
export default {
  data () {
    return {
      mocked: {
        conf: {
          name: {val:"i1", type: "string", description: "Lorem ipsum"},
          type: {val:"TCP", type:"enum", enumVals: ["UNIX", "TCP", "TCP-TLS", "File"], description: "Lorem ipsum"},
          dir: {val:"IN", type:"enum", label: "Direction", enumVals: ["IN", "OUT"], description: "Lorem ipsum"},
          timeout: {val:"", type:"string", pattern: "(([1-9]+[0-9]*)|WAIT|NO_WAIT|HALF_WAIT)", description: "Lorem ipsum" },
          buffer: {val:"", type:"string", pattern: "(on|off)", cond: (cfg) => {return cfg.dir.val == 'OUT'}, description: "Lorem ipsum"},
          autoflush: {val:"", type:"string", pattern: "(off|[1-9][0-9]*)", cond: (cfg) => {return cfg.dir.val == "OUT"}, description: "Lorem ipsum"},
          host: {val:"", type:"string", cond: (cfg) => {return cfg.dir.val == 'IN'}}

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
