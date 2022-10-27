<template>
  <div class="header__MessageContainer">
    <h1 class="title">{{ title }}</h1>
    <h2 class="subtitle">{{ subtitle }}</h2>
    <h2 class="secondSubtitle">{{secondSubtitle}}</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'Hello',
      subtitle: 'My name is Masha Moroz',
      secondSubtitle: 'I\'m photographer'
    }
  }
}
</script>
<style scoped>
.header__MessageContainer {
  width: 100vw;
  height: 100vh;
  padding: 40px 90px;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 30px auto 1fr;
  justify-content: flex-end;
  text-align: right;

  color: #f2f2f2;
}
.title {
  font-size: 80px;
  grid-column: -1;
  grid-row: 1;
  animation: photoAppear 0.8s forwards;
  animation-delay: 0.8s;
  opacity: 0;
}
.subtitle {
  font-size: 60px;
  grid-row: 3;
  grid-column: -1;
  animation: photoAppear 0.8s forwards;
  animation-delay: 1.6s;
  opacity: 0;
}
.secondSubtitle {
  font-size: 100px;
  grid-row: 4;
  grid-column: -1;
  animation: photoAppear 0.8s forwards;
  animation-delay: 2.4s;
  opacity: 0;
}

@keyframes photoAppear {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
