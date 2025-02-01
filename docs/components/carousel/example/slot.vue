<script setup lang="ts">
import { VerCarousel, VerCarouselItem } from '@versakit/ui'
</script>

<template>
  <div class="carousel-wrapper">
    <VerCarousel
      :autoplay="true"
      :interval="3000"
      :show-arrows="true"
      :show-indicators="true"
      direction="horizontal"
      trigger="hover"
    >
      <VerCarouselItem width="1200px" height="600px">
        <div class="custom-slide">
          <h3>自定义内容 1</h3>
          <p>这是一个使用 slot 的示例</p>
        </div>
      </VerCarouselItem>
      <VerCarouselItem width="1200px" height="600px">
        <div class="custom-slide">
          <h3>自定义内容 2</h3>
          <p>你可以放置任何内容</p>
        </div>
      </VerCarouselItem>
    </VerCarousel>
  </div>
</template>

<style lang="scss" scoped>
.container {
  padding: 40px;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}

.carousel-wrapper {
  width: 100%;
  height: 600px;
  margin: 40px 0;
  overflow: hidden;
}

h2 {
  text-align: center;
  margin-bottom: 20px;
  color: #333;
  font-size: 2em;
}

.custom-slide {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.custom-slide h3 {
  font-size: 3em;
  margin-bottom: 1em;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
}

.custom-slide p {
  font-size: 1.5em;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
}
</style>
