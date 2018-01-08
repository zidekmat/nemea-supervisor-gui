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
        <v-tabs-item :href="'#tabChildren'" >
          {{ childrenList }}
        </v-tabs-item>
        <v-tabs-item :href="'#tabAddNew'" >
          {{ addNewLabel }}
        </v-tabs-item>
        <v-tabs-slider color="yellow"></v-tabs-slider>
      </v-tabs-bar>

      <v-tabs-items>
        <v-tabs-content :id="'tabConf'">
          <v-layout row>
            <v-flex xs-4>
              <v-text-field name="Name" label="Name" id="name" v-model="conf.name">
              </v-text-field>
            </v-flex>
            <v-flex xs-8></v-flex>
          </v-layout row>
          <v-layout row>
            <v-flex xs-6>
              <v-switch v-bind:label="'Enabled'" v-model="conf.enabled"></v-switch>
            </v-flex>

          </v-layout>
          <v-card flat>
          </v-card>
        </v-tabs-content>
        <v-tabs-content :id="'tabChildren'">
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
      conf: {
        name: "Group 1",
        enabled: true,
      },
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
      childrenList: "Modules",
      addNewLabel: "Add new module",
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
