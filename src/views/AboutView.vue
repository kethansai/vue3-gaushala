<template>
  <div id="about-page" class="py-2 md:py-8 px-2 md:px-36">
    <el-card class="p-2">
      <div class="flex flex-col md:flex-row gap-4 justify-between items-center p-4">
        <el-image class="w-full md:w-1/3" alt="founder" :src="founder" fit="cover" />
        <div class="p-2 w-full md:w-2/3">
          <h1 class="text-3xl font-bold mb-4 border-l-8 border-orange-400 pl-2">Founder</h1>
          <p class="text-xl">
            Shri Swami Mrigannath Dada Gaushala samiti manages and run the Gaushala under the
            inspiration and guidance of Aathepurohit swami Shri Dutt Ji Maharaj Teachings and
            preachings of Maharaj Shri has always kept the committee extact to their goals of Goseva
            and Gopalan. Maharaj Shri has always been the guiding light for the committee to achieve
            excellence and to also embark their journeys towards cruelty free unaldulterated and
            clean environment.
          </p>
        </div>
      </div>
    </el-card>
    <el-card class="p-2 mt-4">
      <h1 class="text-3xl font-bold mb-4 border-l-8 border-orange-400 pl-2">Committee Members</h1>
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column prop="id" label="S.No" width="60" />
        <el-table-column prop="name" label="Full Name" />
        <el-table-column prop="designation" label="Desifnation" />
      </el-table>
    </el-card>
  </div>
</template>
<script setup>
import founder from '@/assets/images/founder.webp'

const tableData = [
  {
    id: 1,
    name: 'Shri Vipin Mehra',
    designation: 'President'
  },
  {
    id: 2,
    name: 'Shri Brij Kumar Soni',
    designation: 'Vice-President'
  },
  {
    id: 3,
    name: 'Shri Himanshu Dubey',
    designation: 'Secretary'
  },
  {
    id: 4,
    name: 'Shri Pushpendra Singh',
    designation: 'Joint Secretary'
  },
  {
    id: 5,
    name: 'Shri Sushil Vishwakarma',
    designation: 'Treasury'
  },
  {
    id: 6,
    name: 'Shri Sunjay Asali',
    designation: 'Member'
  },
  {
    id: 7,
    name: 'Shri Muraliya Dhurve',
    designation: 'Member'
  },
  {
    id: 8,
    name: 'Shri Pankaj Agrawal',
    designation: 'Member'
  },
  {
    id: 9,
    name: 'Shri Chandhrabushan Tiwari',
    designation: 'Member'
  },
  {
    id: 10,
    name: 'Shri Brijesh Kumar Sahu',
    designation: 'Member'
  }
]
</script>
<style lang="scss">
#about-page {
  min-height: calc(100vh - 129px);
}
</style>
