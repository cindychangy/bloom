---
title: Fullscreen Images and Videos
---

# Fullscreen Images and Videos

Nowadays can use flexbox or object-fit:

`object-fit: fill | contain | cover | none | scale-down`

## Images
We can use a couple of different ways: flexbox, object-fit...

<style>
.fs-image {
  width: 100%;
  height: 300px;
  background: url('https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&') no-repeat center;
  background-size: cover;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}

.fs-image h3 {
  color: #fff;
  font-size: 35px;
  font-weight: 700;
}
</style>

<div class="fs-image">
<h3>I am the ocean</h3>
</div>

``` css
.fs-image {
  width: 100%;
  height: 300px;
  background: url('https://some-image.jpg') no-repeat center;
  background-size: cover;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
```

## Videos

<style>
.example {
  height: 300px;
}

.video-container {
  overflow: hidden;
  position: absolute;
  top: 0px;
  left: 0px;
  height: 100%;
  width: 100%;

  /* Center the content */
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.video-container video {
    object-fit: cover;
    /* Center the video */
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
}

.video-container h3 {
  position: relative;
  z-index: 2;
  color: #fff;
}
</style>

<div class="example" style="position:relative;">
  <div class="video-container">
      <video loop muted autoplay class="fs-video">
          <source src="https://csslayout.io/assets/video-background-demo.mp4" type="video/mp4">
      </video>
      <h3>I am some text</h3>
  </div>
</div>

``` scss
.video-container {
  overflow: hidden;
  position: absolute;
  top: 0px;
  left: 0px;
  height: 100%;
  width: 100%;

  /* Center the content */
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.video-container video {
  object-fit: cover;
  /* Center the video */
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
}

.video-text {
  position: relative;
  z-index: 2;
}

```

``` html
<div class="video-container">
    <video loop muted autoplay poster="img/video-poster.jpg" class="fs-video">
        <source src="https://static.pexels.com/lib/videos/free-videos.webm" type="video/webm">
        <source src="https://static.pexels.com/lib/videos/free-videos.mp4" type="video/mp4">
        <!-- <source src="video/big_buck_bunny.ogv" type="video/ogg"> -->
    <h3 class="video-text">Video overlay text</h3>
</div>
```