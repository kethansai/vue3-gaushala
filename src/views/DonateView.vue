<template>
  <div id="donate-page" class="py-2 md:py-8 px-2 md:px-36">
    <el-card class="p-2">
      <div class="flex flex-col md:flex-row gap-4 justify-between items-center p-2 md:p-4">
        <el-image class="w-full md:w-1/3" alt="founder" :src="QRCode" fit="cover" />
        <div class="p-0 md:p-2 w-full md:w-2/3">
          <h1 class="text-3xl font-bold mb-4 border-l-8 border-orange-400 pl-2">DONATE</h1>
          <ul class="list-disc p-4 text-xl">
            <li>Become a Parent : Adapt a calf - ₹5000/-</li>
            <li>Gau Grass seva : Donate fodder - ₹5000/-</li>
            <li>Shelter : Donate for Shelter - ₹5000/-</li>
            <li>Medical Care : Donate for Vaccination & Drugs - ₹5000/-</li>
            <li>Gau daan : Donate for a cow - ₹5000/-</li>
            <li>Adopt a cow for a month(inclusive all) - ₹5000/-</li>
          </ul>
        </div>
      </div>
      <div>
        <span class="font-bold mr-2">Note:</span>Section 80(G)(S) of the Income Tax Act get a 50%
        tax deduction on the amount paid by them, If the donated amount does not exceed 10% their
        Gross Total Income.NRI donates are also eligible.
      </div>
    </el-card>
  </div>
</template>
<script setup>
import QRCode from '@/assets/images/QRcode.webp'
</script>
<style lang="scss">
#donate-page {
  min-height: calc(100vh - 129px);
}
</style>
