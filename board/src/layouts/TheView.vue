<template>
  <!-- 
    -> root (/) 로 요청이 들어왔을 때 HomeView를 보여줘야함
 -->
  <TheHeader />
  <main>
    <div class="container py-4 mx-15">
      <RouterView></RouterView>
    </div>
  </main>
</template>

<script setup></script>

<style lang="scss" scoped></style>
