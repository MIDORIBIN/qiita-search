<template>
  <v-app>
    <slot name="header"></slot>
    <v-content>
      <v-container>
        <slot name="body"></slot>
      </v-container>
    </v-content>
  </v-app>
</template>
