<template>
  <div id="app">
    <div class="page-container">
      <md-app md-waterfall md-mode="fixed-last">
        <md-app-toolbar class="md-large md-dense md-primary">
          <div class="md-toolbar-row">
            <div class="md-toolbar-section-start">
              <md-button class="md-icon-button" @click="menuVisible = !menuVisible">
                <md-icon>menu</md-icon>
              </md-button>

              <span class="md-title">Money Flow</span>
            </div>

            <div class="md-toolbar-section-end">
              <md-button class="md-icon-button">
                <md-icon>more_vert</md-icon>
              </md-button>
            </div>
          </div>

          <div class="md-toolbar-row">
            <md-tabs md-sync-route class="md-primary">
              <md-tab id="tab-home" md-label="Home" to="/"></md-tab>
              <md-tab id="tab-lancar" md-label="Lançar" to="/lancamento"></md-tab>
            </md-tabs>
          </div>
        </md-app-toolbar>

        <md-app-drawer :md-active.sync="menuVisible">
          <md-toolbar class="md-transparent" md-elevation="0">
            <span class="md-title">Menu</span>
          </md-toolbar>

          <md-list>
            <md-list-item>
              <md-icon>move_to_inbox</md-icon>
              <span class="md-list-item-text">Inbox</span>
            </md-list-item>

            <md-list-item>
              <md-icon>send</md-icon>
              <span class="md-list-item-text">Sent Mail</span>
            </md-list-item>

            <md-list-item>
              <md-icon>delete</md-icon>
              <span class="md-list-item-text">Trash</span>
            </md-list-item>

            <md-list-item>
              <md-icon>error</md-icon>
              <span class="md-list-item-text">Spam</span>
            </md-list-item>
          </md-list>
        </md-app-drawer>

        <md-app-content>
          <div class="app-content">
            <routerView :key="$route.fullPath"/>
          </div>
          <div v-show="showAddButton" class="button-fixed">
            <router-link class="md-raised md-primary" to="/lancamento" tag="md-button">
              NOVO LANÇAMENTO
            </router-link>
          </div>
        </md-app-content>
      </md-app>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      menuVisible: false,
      showAddButton: true
    };
  },
  components: {}
};
</script>

<style>
body,
#app,
.page-container,
.md-app {
  padding: 0;
  margin: 0;
  height: 100%;
}

.button-fixed {
  position: fixed;
  bottom: 0;
  right: 0;
  margin: 20px;
}
</style>
