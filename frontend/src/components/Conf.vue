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
        <v-btn flat >export configuration</v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <v-tabs :scrollable="false">
      <v-tabs-bar class="deep-purple darken-3">
        <v-tabs-item href="#tabConf" >
          Configuration
        </v-tabs-item>
        <v-tabs-item href="#tabChildren" v-if="tabs.labels.children != null">
          {{ tabs.labels.children }}
        </v-tabs-item>
        <v-tabs-item href="#tabAddNew" v-if="tabs.labels.addNew != null">
          {{ tabs.labels.addNew }}
        </v-tabs-item>
        <v-tabs-slider color="yellow"></v-tabs-slider>
      </v-tabs-bar>

      <v-tabs-items>
        <v-tabs-content id="tabConf">
          <conf-form-component :mocked="{conf: conf}"></conf-form-component>
        </v-tabs-content>

        <v-tabs-content v-if="tabs.labels.children != null" id="tabChildren">
          <conf-listing-component :mocked="{items:items}"></conf-listing-component>
        </v-tabs-content>

        <v-tabs-content v-if="tabs.labels.addNew != null" id="tabAddNew">
          <v-card flat>
            <!--
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
            -->
          </v-card>
        </v-tabs-content>

      </v-tabs-items>
    </v-tabs>
  </v-container>
</template>

<script>
export default {
  // 'data' expected to be passed from parent including this component
  // however can't be mutated from here, so i use it to mock initial values only
  props: ['mocked'],
  data () {
    return {
      conf: this.mocked.conf,
      items: this.mocked.items,
      tabs: {
        labels: {
          children: this.mocked.tabs.labels.children,
          addNew: this.mocked.tabs.labels.addNew,
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
      // TODO
      return 'start';
    }
  },
  methods: { 
    enabledToString: function (enabled) {
      return enabled ? "Enabled" : "Disabled"
    },
  },
  mounted () {},
  created () {
  }
}
</script>
