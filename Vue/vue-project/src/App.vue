<template>
  <div class="flex justify-center items-center h-screen">
    <div class="rounded-lg bg-gray-100 p-8">
      <form class="w-full max-w-sm">

      <div class="md:flex md:items-center mb-6">
        <div class="md:w-1/3">
          <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
            Email
          </label>
        </div>
        <div class="md:w-2/3">
          <input v-bind:class="inputClass" id="inline-full-name" type="text" placeholder="JuanDeLaCruz@gmail.com" v-model="email">          
          <span class="text-red-500 text-xs italic" v-if="!validEmail">Please enter a valid email address.</span>
        </div>
      </div>

      <div class="md:flex md:items-center mb-6">
        <div class="md:w-1/3">
          <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-first-name">
            First Name
          </label>
        </div>
        <div class="md:w-2/3">
          <input v-bind:class="inputFNameClass" id="inline-first-name" type="text" placeholder="Juan" v-model="firstName">
          <p class="text-red-500 text-xs italic" v-if="!validFirstName">Please enter a valid first name.</p>
        </div>
      </div>

      <div class="md:flex md:items-center mb-6">
        <div class="md:w-1/3">
          <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-last-name">
            Last Name
          </label>
        </div>
        <div class="md:w-2/3">
          <input v-bind:class="inputLNameClass" id="inline-last-name" type="text" placeholder="Dela Cruz" v-model="lastName">
          <p class="text-red-500 text-xs italic" v-if="!validLastName">Please enter a valid last name.</p>
        </div>
      </div>

      <div class="md:flex md:items-center mb-6">
        <div class="md:w-1/3">
          <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-phone-number">
            Phone Number
          </label>
        </div>
        <div class="md:w-2/3">
          <input v-bind:class="inputPhoneClass" id="inline-phone-number" type="text" placeholder="09XX-XXX-XXXX" v-model="phoneNumber">
          <p class="text-red-500 text-xs italic" v-if="!validPhone">Please enter a valid phone number.</p>
        </div>
      </div>

      <div class="md:flex md:items-center">
        <div class="md:w-1/3"></div>
        <div class="md:w-2/3">
          <button class="shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit" :disabled="!validForm" @click="say('Form Successfully Submitted!')">
            Submit
          </button>
        </div>
      </div>

      </form>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      firstName: '',
      lastName: '',
      phoneNumber: ''
    }
  },
  computed: {
    validEmail() {
      const emailRegex = /^\S+@\S+\.\S+$/
      return emailRegex.test(this.email)
    },
    validFirstName() {
      const firstNameRegex = /^[a-zA-Z\s]+$/
      return firstNameRegex.test(this.firstName)
    },
    validLastName() {
      const lastNameRegex = /^[a-zA-Z\s]+$/
      return lastNameRegex.test(this.lastName)
    },
    validPhone() {
      const phoneRegex = /^(09\d{2}-\d{3}-\d{4})$/
      return phoneRegex.test(this.phoneNumber)
    },
    validForm() {
      return this.validEmail && this.validFirstName && this.validLastName && this.validPhone
    },

    inputClass() {
    if (!this.validEmail) {
      return "bg-gray-200 appearance-none border-2 border-red-500 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-red-500";
    } else {
      return "bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500";
    }
    },
    inputFNameClass(){
    if (!this.validFirstName) {
      return "bg-gray-200 appearance-none border-2 border-red-500 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-red-500";
    }
    else {
      return "bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500";
    }
    },
    inputLNameClass(){
    if (!this.validLastName) {
      return "bg-gray-200 appearance-none border-2 border-red-500 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-red-500";
    }
    else {
      return "bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500";
    }
    },
    inputPhoneClass(){
    if (!this.validPhone) {
      return "bg-gray-200 appearance-none border-2 border-red-500 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-red-500";
    }
    else {
      return "bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500";
    }
    },
  },
  methods: {
    say(message){
      alert(message)
    }
  },
}
</script>

<style scoped>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>

