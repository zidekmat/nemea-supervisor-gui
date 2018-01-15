<template>
  <v-app dark id="app">
    <!-- left menu -->
    <v-navigation-drawer
      app
      fixed
      persistent
      v-model="drawer"
    >
      <div class="pa-3 text-xs-center">
      	<div class="display-2 py-4">Nemea Supervisor</div>
      	<p>GUI</p>
      </div>
      <v-divider></v-divider>
      <v-list dense>
        <v-list-tile :to="{path: '/'}" :exact="true">
          <v-list-tile-action>
            <v-icon>dashboard</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Dashboard</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile >
          <v-list-tile-action>
            <v-icon>settings</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Profiles</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile :to="{path: '/module-groups'}">
          <v-list-tile-action>
            <v-icon>settings</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Module groups</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile :to="{path: '/modules'}">
          <v-list-tile-action>
            <v-icon>settings</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Modules</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile :to="{path: '/instances'}">
          <v-list-tile-action>
            <v-icon>settings</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Instances</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        
        <v-divider></v-divider>

        <v-list-tile>
          <v-list-tile-action>
            <v-icon>info</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>How-to</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar app fixed>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Using profile: {{ profile }}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <!-- conditional based on session -->
        <p class="mt-1 text-">
          You have changes in candidate datastore that would expire in: {{expireTime}}
          <br>
          <v-btn flat >Apply changes</v-btn>
          <v-btn flat >Discard changes</v-btn>
        </p>
      </v-toolbar-items>
    </v-toolbar>

    <v-content>
      <v-container fluid fill-height>
        <!-- component matched by the route will render here -->
        <router-view></router-view>
      </v-container>
    </v-content>
<!--
    <v-footer app fixed>
      <span>&copy; 2017</span>
    </v-footer>
-->
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        profile: "profile 33",
        clipped: false,
        drawer: true,
        fixed: false,
        expireTime: "66 s",
      }
    },
    methods: {
    }
  }
</script>
