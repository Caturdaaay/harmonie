<template>
  <audio controls :src="this.src" style="width: 100%"></audio>
</template>


<script>
export default {
  name: "audio-file",
  props: ["src"],
};
</script>
