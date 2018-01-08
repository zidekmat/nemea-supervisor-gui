<template>
  <v-container grid-list-md class="mt-0 ml-0 mr-0">
    <v-toolbar color="deep-purple darken-3">
      <v-breadcrumbs>
        <v-icon slot="divider">chevron_right</v-icon>
        <v-breadcrumbs-item 
          v-for="node in treePath" :key="node.text" :to="node.path" :disabled="false"
        >
          <v-toolbar-title>
            {{ node.text }}
          </v-toolbar-title>
      </v-breadcrumbs-item>
    </v-breadcrumbs>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <!-- conditional based on component state -->
        <v-btn flat >{{ controlAction }}</v-btn>
      </v-toolbar-items>
    </v-toolbar>
<!--
    <template>
  <v-container>
    <v-layout row wrap>
      <v-flex md4>
        <v-btn>config
      </v-flex>
    </v-layout row wrap>
    <v-layout row wrap>
    <v-layout
  </v-container>
    </template>

-->
    <v-tabs v-model="active" :scrollable="false">
      <v-tabs-bar class="deep-purple darken-3">
        <v-tabs-item :href="'#tabConf'" >
          Configuration
        </v-tabs-item>
        <v-tabs-item :href="'#tabChildren'" v-if="childrenList != null">
          {{ childrenList }}
        </v-tabs-item>
        <v-tabs-slider color="yellow"></v-tabs-slider>
      </v-tabs-bar>

      <v-tabs-items>
        <v-tabs-content id="tabConf">
          <v-card flat>
            <v-layout row v-for="row in conf" :key="row.key">
              <v-flex xs-4>
                <v-switch
                  v-if="typeof row.val == 'boolean'"
                  :label="row.label"
                  v-model="row.val">
                </v-switch>
                <v-text-field
                  v-else-if="typeof row.val == 'number'"
                  :label="row.label"
                  :id="row.key"
                  type="number"
                  v-model="row.val">
                </v-text-field>

                <v-text-field
                  v-else
                  :label="row.label"
                  :id="row.key"
                  v-model="row.val">
                </v-text-field>
              </v-flex>
              <v-flex xs-8></v-flex>
            </v-layout row>
          </v-card flat>
        </v-tabs-content>
        <v-tabs-content v-if="childrenList != null" :id="'tabChildren'">
          <v-card flat>
            <v-data-table v-bind:headers="headers" :items="items" hide-actions>
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
        </v-tabs-content>
      </v-tabs-items>
    </v-tabs>

  </v-container>
</template>

<script>
export default {
  data () {
    return {
      active: null,
      conf: [
        {val: "Module 3", label: 'Name', key: 'confName'},
        {val: true, label: 'Enabled', key: 'confEnabled'},
        {val: 3, label: 'Maximum of restarts per minute', key: 'confRestarts'},
        {val: false, label: 'Is sysrepo ready', key: 'confSysrepoReady'},
        {val: "-v 3 -rt", label: 'CLI params', key: 'confParams'},
      ],
      headers: [
        {text: "Name", sortable: true, value: "name", align: "left"},
        {sortable: true, value: "enabled"},
      ],
      items: [
      ],
      childrenList: null
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
