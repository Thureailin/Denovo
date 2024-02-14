<template>
  <div>
    <section class="flex justify-center mb-3">
      <img src="@/assets/img/asthetic/hero.png" class="w-[1000px]" alt="">
    </section>

    <section class="container my-12">
      <div class="mx-auto text-center border shadow-sm p-6">
        <h3 class="capitalize mb-3 font-bold cus-heading !text-2xl">contact us</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil quisquam dolorum officiis modi culpa veniam
          quos
          repellendus deleniti dolore, eum deserunt odit aut? Natus saepe enim quae accusantium illum excepturi!</p>
      </div>
    </section>

    <section class="container px-6 my-12">
      <div class="grid grid-cols-2 gap-3">
        <div class="bg-[url('@/assets/img/asthetic/hero.png')] bg-no-repeat bg-cover bg-right min-h-[550px]"></div>
        <div class="text-center w-full mx-auto bg-white shadow p-12 border">
          <h3 class="text-cus-primary cus-subheading mb-12">Please select a center</h3>
          <form>
            <div class="space-y-6">
              <div class="flex justify-between space-x-6">
                <div class="flex items-center space-x-3">
                  <input type="radio" class="form-radio" id="aestheticCenter" name="drone" value="aesthetic-center"
                    checked>
                  <label for="aestheticCenter">Aesthetic Center</label>
                </div>

                <div class="flex items-center space-x-3">
                  <input type="radio" class="form-radio" id="dewey" name="drone" value="dewey">
                  <label for="dewey">Plastic Surgery Center</label>
                </div>
              </div>

              <div class="flex justify-between space-x-6">
                <div class="flex flex-col">
                  <label for="username" class="text-left mb-3">Name</label>
                  <input type="text" name="username" class="form-input p-3">
                </div>
                <div class="flex flex-col">
                  <label for="phone" class="text-left mb-3">Phone</label>
                  <input type="tel" name="phone" class="form-input p-3">
                </div>
              </div>

              <div class="flex flex-col">
                <label for="email" class="text-left mb-3">Email</label>
                <input type="email" name="email" class="form-input p-3">
              </div>

              <div class="flex flex-col">
                <label for="message" class="text-left mb-3">Message</label>
                <textarea id="message" name="message" rows="5" cols="33">
            </textarea>
              </div>
              <div class="">
                <button type="submit"
                  class="text-xl font-semibold capitalize p-3 border-t-2 border-b-2 border-black transition hover:bg-black hover:text-white">submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>

    <section class="container px-6 my-12">
      <div class="grid grid-cols-2 gap-3">
        <div class="bg-white p-12 text-center font-secondary border-r-2">
          <h4 class="mb-6 font-bold cus-subheading !text-3xl">OPENING HOURS</h4>
          <ul class="space-y-3 text-lg">
            <li>
              <span class="font-semibold">Monday:</span> 10:00 AM - 7:00 PM
            </li>
            <li>
              <span class="font-semibold ">Tuesday:</span> Closed
            </li>
            <li>
              <span class="font-semibold">Wednesday:</span> 10:00 AM - 7:00 PM
            </li>
            <li>
              <span class="font-semibold">Thursday:</span> 10:00 AM - 7:00 PM
            </li>
            <li>
              <span class="font-semibold">Friday:</span> 10:00 AM - 7:00 PM
            </li>
            <li>
              <span class="font-semibold">Saturday:</span> 10:00 AM - 7:00 PM
            </li>
            <li>
              <span class="font-semibold">Sunday:</span> 10:00 AM - 7:00 PM
            </li>
          </ul>
        </div>
        <div class="bg-white p-12 text-center font-secondary">
          <h4 class="mb-6 font-bold cus-subheading !text-3xl">CONTACT</h4>
          <ul class="space-y-6 text-lg">
            <li>
              <span class="font-semibold">Aesthetic Center:</span> 09-968 119 995, 09-400 779995
            </li>
            <li>
              <span class="font-semibold">Plastic Surgery Center:</span> 09-456 996 990
            </li>
            <li>
              <span class="font-semibold">Email:</span> info@theclinicdenovo.com
            </li>
            <li>
              <span class="font-semibold">Website:</span> www.theclinicdenovo.com
            </li>
          </ul>
        </div>
      </div>
    </section>

    <section class="container px-6 my-24">
      <h3 class="text-center mb-12 cus-heading !font-secondary font-bold">Our Location (How to Find us) with Map</h3>

      <div class="grid grid-cols-2 gap-6 text-gray-100">
        <div class="bg-cus-primary p-6 font-secondary">
          <h4 class="mb-6 font-bold cus-subheading">Aesthetic Center</h4>
          <div class="flex items-center gap-3">
            <MapPinIcon class="w-16 h-16" />
            <div>
              <p class="text-lg">
                Block A-1, No-001, Corner of Hanthawaddy Road and Hnin Si Street, Yuzana Hi-way Complex, Kamayut Township,
                Yangon, Myanmar.
              </p>
            </div>
          </div>
        </div>
        <div class="bg-cus-primary p-6 font-secondary">
          <h4 class="mb-6 font-bold cus-subheading">Plastic Surgery Center</h4>
          <div class="flex items-center gap-3">
            <MapPinIcon class="w-16 h-16" />
            <div>
              <p class="text-lg">
                Block A-1, No-006, Hain Si Street, Yuzana Hi-way
                Complex, Kamayut Township, Yangon,
                Myanmar.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-2 gap-6 my-12">
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d76992.17979410828!2d96.1402656922084!3d16.81167428456293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c1eb32e3dd7657%3A0xd516a10d09993a84!2sThe%20Clinic%20De%20Novo!5e0!3m2!1sen!2smm!4v1685076646614!5m2!1sen!2smm"
            height="450" class="w-full" style="border:0;" allowfullscreen="" loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d244455.57716101976!2d96.118943010332!3d16.7956508639454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c1eb9725254217%3A0xe0a037885d79f99f!2sThe%20Clinic%20De%20Novo%20Luxury%20Wellness%20Center!5e0!3m2!1sen!2smm!4v1685076696584!5m2!1sen!2smm"
            class="w-full" height="450" style="border:0;" allowfullscreen="" loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { MapPinIcon } from '@heroicons/vue/24/solid'
</script>

<style lang="scss" scoped></style>