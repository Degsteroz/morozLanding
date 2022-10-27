<template>
  <div class="headerImageContainer">
    <img
      loading="lazy"
      src="../assets/images/headerPictures.jpeg"
      class="headerImage"
      alt="header picture"
    />
  </div>
</template>
<style>
.headerImageContainer {
  position: fixed;
  top: 0;
  left: 0;
  overflow: hidden;
  height: 100vh;
  z-index: -1;
}
.headerImage {
  width: 100vw;
}
</style>
