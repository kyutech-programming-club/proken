<template>
  <div>
    <h1>Home</h1>
    <div class="lists pa-5">
      <v-tabs
        v-model="tab"
        grow
        centered
        slider-color="red"
        slider-size="4"
      >
        <v-tab style="background-color: #FFECB3; color: black;">
          プロ研とは？
        </v-tab>
        <v-tab style="background-color: #80DEEA; color: black;">
          NEWS
        </v-tab>
        <v-tab style="background-color: #E0E0E0; color: black;">
          活動内容
        </v-tab>
        <v-tab style="background-color: #1FEAAA; color: black;">
          活動実績
        </v-tab>
        <v-tab style="background-color: #AABBCC; color: black;">
          プロダクト
        </v-tab>
      </v-tabs>
      <v-tabs-items v-model="tab"> <!--なんかtabがいる-->
        <v-tab-item eager>
          <v-sheet
            class="pb-5"
            color="#FFECB3">
            <h1>プロ研とは？コンポーネント</h1>
          </v-sheet>
        </v-tab-item>
        <v-tab-item eager>
          <v-sheet
            class="pb-5"
            color="#80DEEA">
            <h1>ニュースコンポーネント</h1>
          </v-sheet>
        </v-tab-item>
        <v-tab-item eager>
          <v-sheet
            class="pb-5"
            color="#E0E0E0">
            <h1>内容コンポーネント</h1>
          </v-sheet>
        </v-tab-item>
        <v-tab-item eager>
          <v-sheet
            class="pb-5"
            color="#1FEAAA">
            <h1>実績コンポーネント</h1>
          </v-sheet>
        </v-tab-item>
        <v-tab-item eager>
          <v-sheet
            class="pb-5"
            color="#AABBCC">
            <h1>プロダクトコンポーネント</h1>
          </v-sheet>
        </v-tab-item>
      </v-tabs-items>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Home",
    data() {
      return {
        tab: null,
      }
    }
  }
</script>

<style scoped>

</style>
