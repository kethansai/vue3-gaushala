<template>
  <div id="home-page" class="p-4">
    <el-carousel :interval="5000" arrow="always">
      <el-carousel-item
        class="bg-cover bg-center bg-no-repeat"
        v-for="item of images"
        :key="item"
        :style="`background-image: url(${item})`"
      >
      </el-carousel-item>
    </el-carousel>
    <div class="flex flex-col md:flex-row py-4 gap-2">
      <div class="w-full md:w-3/4">
        <el-card class="bg-orange-300 p-3 mb-4 text-xl">
          <p>
            <span class="text-orange-400 font-bold text-2xl">Swami Shri Mrigannath Dada</span>
            Gaushala was established in the year 2005 in a lush green environment surrounded by
            three hills and currently houses over 300 cows of different species.
          </p>
          <ul class="list-disc py-4 px-8">
            <li class="mb-2">
              The purpose of this Gaushala is to shelter, care and protect the old and abandoned
              cows and also to enhance and nurtur the species with outmost care and attention and
              love.
            </li>
            <li class="mb-2">
              Gaumata is an adobe of 33 crore hindu dieties and is sacred in Hindu Dharma. She is a
              symbol of compassion and piosners.
            </li>
            <li class="mb-2">4 Vedas consider cow as Universal symbol</li>
          </ul>
          <p class="mb-4">
            <span class="text-orange-400 font-bold mr-2">Rigveda:</span>Cow is like a mother for all
            those who are bachelors till the age of 25 years, a daughter for those who are 26 years
            old and a sister for those who are 48 years old - ऋग्वेद |१0१|
          </p>
          <p class="mb-4">
            <span class="text-orange-400 font-bold mr-2">Yajurveda:</span>Cow is like a mother for
            all those who are bachelors till the age of 25 years, a daughter for those who are 26
            years old and a sister for those who are 48 years old - ऋग्वेद |१0१|
          </p>
          <p class="mb-4">
            <span class="text-orange-400 font-bold mr-2">Atharvaveda:</span>33 crore dieties reside
            inside the cow. while describing devine form of cow, Bhagavan Sri Krishna said
          </p>
        </el-card>

        <el-card class="bg-orange-300 p-3">
          <h1 class="text-3xl font-bold mb-4 border-l-8 border-orange-400 pl-2">Mission</h1>
          <p>
            We aim to provide shelter to abandoned and aged cows. We take care of them by arranging
            hay, fodder, medical attention, etc.
          </p>
          <ul class="list-disc p-4">
            <li>To practice and emphasize the spirit and need of non-violence among peolple.</li>
            <li>To propagate love for the cow and its virtues.</li>
            <li>To manufacture and promote usage of panchgarya.</li>
            <li>
              To promote Organic farming. To generate employment oppurtunities for the local
              community.
            </li>
            <li>To promote maximum production of unaldulterated pure milk and products.</li>
            <li>
              To create cow-based economic model and cow centre which will inspire many farmers to
              take up cow-raising again.
            </li>
          </ul>
        </el-card>
      </div>
      <div class="w-full md:w-1/4">
        <el-card class="bg-orange-300 p-3">
          <h1 class="text-3xl font-bold mb-4 border-l-8 border-orange-400 pl-2">Location</h1>
          <p>
            <span class="text-orange-400 font-semibold">Swami Shri Mrigannath Dada</span> Gaushala
            is situated 40 kms away from Jabalpur (M.O.P), in the village Koni(Khurd), Majholi. It
            is easily accessible through roadways.
          </p>
        </el-card>
      </div>
    </div>
  </div>
</template>
<script setup>
import slider1 from '@/assets/images/slider1.jpg'
import slider2 from '@/assets/images/slider2.jpg'
import slider3 from '@/assets/images/slider3.jpg'
import slider4 from '@/assets/images/slider4.jpg'
import slider5 from '@/assets/images/slider5.jpg'
const images = [slider1, slider2, slider3, slider4, slider5]
</script>
<style lang="scss">
#home-page {
  min-height: calc(100vh - 128px);
  .el-carousel__container {
    height: calc(100vh - 128px);
  }
}
</style>
