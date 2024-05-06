<template>
  <div id="donate-page" class="py-2 md:py-8 px-2 md:px-36">
    <el-card class="p-2">
      <div
        class="flex-col md:flex-row flex justify-between items-start space-x-0 space-y-10 md:space-y-0 md:space-x-10"
      >
        <div class="w-full md:w-2/3">
          <div class="dark:text-white text-3xl font-bold mb-5 border-l-8 border-orange-400 pl-4">
            Contact Form
          </div>
          <form>
            <input
              type="text"
              placeholder="Name"
              class="outline-none w-full my-2 border-2 border-gray-300 p-2"
            />
            <input
              type="email"
              placeholder="Email"
              class="outline-none w-full my-2 border-2 border-gray-300 p-2"
            /><input
              type="text"
              placeholder="Subject"
              class="outline-none w-full my-2 border-2 border-gray-300 p-2"
            /><textarea
              placeholder="Message"
              class="outline-none ring-0 w-full my-2 border-2 border-gray-300 p-2"
              rows="5"
            ></textarea
            ><button
              type="submit"
              class="py-3 px-6 bg-orange-400 hover:bg-opacity-85 hover:shadow-xl hover:dark:shadow-xl hover:dark:shadow-white hover:shadow-gray-400 text-white font-semibold uppercase"
            >
              Submit
            </button>
          </form>
        </div>
        <div class="text-black dark:text-white tracking-normal w-full md:w-1/3">
          <div class="w-full my-3">
            <div
              class="flex space-x-3 justify-start items-center py-3 border-b-4 border-orange-400"
            >
              <FAI class="text-orange-400 text-xl" icon="phone" />
              <h1 class="font-bold uppercase text-2xl tracking-widest">Phone</h1>
            </div>
            <div class="mt-2">फोन: +91 9717190919<br />कस्टमर केयर: 84 11 08 02 00</div>
          </div>
          <div class="w-full my-3">
            <div
              class="flex space-x-3 justify-start items-center py-3 border-b-4 border-orange-400"
            >
              <FAI class="text-orange-400 text-xl" icon="map-location-dot" />
              <h1 class="font-bold uppercase text-2xl tracking-widest">Address</h1>
            </div>
            <div class="mt-2">
              श्री कृष्ण सेवा गौशाला ट्रस्ट (रजि.),<br />एच. कार्यालय: सेक्टर 8ए, वसुंधरा, गाजियाबाद
              (यूपी)
            </div>
          </div>
          <div class="w-full my-3">
            <div
              class="flex space-x-3 justify-start items-center py-3 border-b-4 border-orange-400"
            >
              <FAI class="text-orange-400 text-xl" icon="envelope" />
              <h1 class="font-bold uppercase text-2xl tracking-widest">Email</h1>
            </div>
            <div class="mt-2">
              <a href="mailto:president@sks-gaushala-trust.org.in"
                >President@sks-gaushala-trust.org.in</a
              >
              <br />
              <a href="mailto:customercare@sks-gaushala-trust.org.in"
                >Customercare@sks-gaushala-trust.org.in</a
              >
              <br />
              <a href="mailto:account@sks-gaushala-trust.org.in"
                >Account@sks-gaushala-trust.org.in</a
              >
            </div>
          </div>
        </div>
      </div>
    </el-card>
    <el-card class="mt-4">
      <h1 class="text-3xl font-bold mb-4 border-l-8 border-orange-400 pl-2">Directions</h1>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.692696099467!2d77.38689111508339!3d28.668918682403515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf071f070a06d%3A0x14a2c232e4202cc0!2s43%2C%20Sector%202A%2C%20Vasundhara%2C%20Ghaziabad%2C%20Uttar%20Pradesh%20201012!5e0!3m2!1sen!2sin!4v1593418164101!5m2!1sen!2sin"
        class="rounded-xl border-2 w-full h-72 md:h-96 border-orange-300"
        title="directions"
      ></iframe>
    </el-card>
  </div>
</template>
<style lang="scss">
#donate-page {
  min-height: calc(100vh - 129px);
}
</style>
