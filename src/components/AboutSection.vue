<template>
  <section id="about" ref="aboutSection">
    <div :class="['about-wrapper', { 'is-visible': isVisible }]">
      <img class="about-image" src="/undraw_programming_65t2.svg" alt="avatar" />
      <div class="about-content">
        <h1 class="headings">About me</h1>
        <p class="about-text">
          Hello, my name is Ray.
          I've been passionate about computers and software from a young age — ever since I was 11 years old,
          I've been fascinated by how technology works and how it can be used to build, solve, and create.
          I started coding in my teenage years and quickly fell in love with the process of turning ideas into real, working applications.
          Since then, I've been dedicated to continuously learning and improving my skills,
          exploring everything from front-end design to back-end development. Whether it's mastering a new framework, working on a team project,
          or building something from scratch, I'm always eager to expand my knowledge and grow as a developer.
          For me, software development isn't just a career path — it's a lifelong passion.
        </p>
        <br />
        <button type="button" class="btn btn-info">Download CV</button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const aboutSection = ref(null)
const isVisible = ref(false)

let observer = null

onMounted(() => {
  observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        isVisible.value = true
        // Stop observing once it has animated into view
        observer.unobserve(entry.target)
      }
    },
    { threshold: 0.4 } // Triggers when 20% of the section is visible
  )

  if (aboutSection.value) {
    observer.observe(aboutSection.value)
  }
})

onUnmounted(() => {
  if (observer) observer.disconnect()
})
</script>

<style scoped>
#about {
  font-family: "Poppins", sans-serif;
  max-width: 75rem;
  margin: 0 auto;
  padding: 5rem 1.25rem;
  color: #ffffff;
}

/* --- Scroll Entrance Animation --- */
.about-wrapper {
  display: flex;
  align-items: flex-start;
  gap: 2.5rem;
  opacity: 0;
  transform: translateX(-30px);
  transition: opacity 1s ease-out, transform 2s ease-out;
}

.about-wrapper.is-visible {
  opacity: 1;
  transform: translateX(0);
}

.btn-info {
  background: transparent;
  color: #fff;
  border: 2px solid rgba(13, 202, 240, 0.4);
  padding: 0.5rem 1.25rem;
  border-radius: 2rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-block;
}

.btn-info:hover {
  background: #0dcaf0;
  color: #000;
  box-shadow: 0 0 1rem rgba(13, 202, 240, 0.6);
  transform: translateY(-0.1875rem);
}

.about-image {
  width: 21.875rem;
  height: 25rem;
  border-radius: 1.25rem;
}

.about-content {
  flex: 1;
  margin: 0;
  padding: 0;
}

.about-content h1 {
  margin: 0 0 0.9375rem 0;
  position: relative;
}

.about-content h1::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -0.625rem;
  width: 3.125rem;
  height: 0.1875rem;
  background: #34d4ec;
}

.about-text {
  font-size: 1rem;
  line-height: 1.7;
  margin: 1.25rem 0 0 0;
  padding: 0;
}

@media (max-width: 48rem) {
  .about-wrapper {
    flex-direction: column;
    gap: 1.875rem;
  }
  .about-image {
    width: 100%;
    max-width: 21.875rem;
  }
}
</style>