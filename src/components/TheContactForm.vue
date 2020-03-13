<template>
  <form
    name="Contact"
    method="post"
    data-netlify="true"
    data-netlify-honeypot="bot-field"
    @submit.prevent="handleSubmit"
  >
    <input type="hidden" name="form-name" value="contact" />
    <p hidden>
      <label>
        Don’t fill this out:
        <input name="bot-field" />
      </label>
    </p>

    <!-- TODO: Refactore the ContactMeForm.vue component -->
    <!--
      - use 'v-for' to DRY the code
      - find out how to use v-model with v-for and Vuelidate (I have spent a few hours on that already)
    -->
    <BaseInput
      id="name"
      v-model.trim="$v.formResponses.name.$model"
      type="text"
      label="Name*"
      :class="{
        'formField--error': errors && $v.formResponses.name.$invalid,
        'formField--success': errors && !$v.formResponses.name.$invalid
      }"
    >
      <p v-if="errors" class="error">
        <span v-if="!$v.formResponses.name.required">this field is required.</span>
        <span v-if="!$v.formResponses.name.minLength">
          Field must have at least {{ $v.formResponses.name.$params.minLength.min }} characters.
        </span>
      </p>
    </BaseInput>

    <BaseInput
      id="email"
      v-model.trim="$v.formResponses.email.$model"
      type="email"
      label="Email*"
      :class="{
        'formField--error': errors && $v.formResponses.email.$invalid,
        'formField--success': errors && !$v.formResponses.email.$invalid
      }"
    >
      <p v-if="errors" class="error">
        <span v-if="!$v.formResponses.email.required">this field is required.</span>
        <span v-if="!$v.formResponses.email.email">Needs to be a valid email.</span>
      </p>
    </BaseInput>

    <BaseInput
      id="phone"
      v-model.trim="$v.formResponses.phone.$model"
      type="tel"
      label="Phone"
      :class="{
        'formField--error': errors && $v.formResponses.phone.$invalid,
        'formField--success': errors && !$v.formResponses.phone.$invalid
      }"
    >
      <p v-if="errors" class="error">
        <span v-if="!$v.formResponses.phone.numeric">Needs to be a valid phone number.</span>
        <span v-if="!$v.formResponses.phone.minLength">
          Field must have at least {{ $v.formResponses.phone.$params.minLength.min }} characters.
        </span>
      </p>
    </BaseInput>

    <BaseInput
      id="webOrCompanyName"
      v-model.trim="$v.formResponses.webOrCompanyName.$model"
      type="text"
      label="Websit Or Company Name"
      :class="{
        'formField--error': errors && $v.formResponses.webOrCompanyName.$invalid,
        'formField--success': errors && !$v.formResponses.webOrCompanyName.$invalid
      }"
    >
      <p v-if="errors" class="error">
        <span v-if="!$v.formResponses.webOrCompanyName.minLength">
          Field must have at least
          {{ $v.formResponses.webOrCompanyName.$params.minLength.min }} characters.
        </span>
      </p>
    </BaseInput>

    <BaseInput
      id="message"
      v-model.trim="$v.formResponses.message.$model"
      type="textarea"
      label="Message*"
      :class="{
        'formField--error': errors && $v.formResponses.message.$invalid,
        'formField--success': errors && !$v.formResponses.message.$invalid
      }"
    >
      <p v-if="errors" class="error">
        <span v-if="!$v.formResponses.message.required">this field is required.</span>
        <span v-if="!$v.formResponses.message.minLength">
          Field must have at least {{ $v.formResponses.message.$params.minLength.min }} characters.
        </span>
      </p>
    </BaseInput>

    <baseButton class="submitBtn" :disabled="uiState === 'pending'">
      Send Message
    </baseButton>

    <p v-if="errors" class="error">
      The form above has errors!
    </p>
    <p v-else-if="empty && uiState === 'submit clicked'" class="error">
      The form above is empty!
    </p>
    <p v-else-if="uiState === 'pending'" class="success">
      Sending the data! Please wait...
    </p>
    <p v-else-if="uiState === 'form submitted'" class="success">
      Hooray! Your form was submitted!
      <br />
      Check your email for the confirmation message.
    </p>
  </form>
</template>

<script>
import { required, minLength, email, numeric } from "vuelidate/lib/validators"

export default {
  data() {
    return {
      uiState: "submit not clicked",
      errors: false,
      empty: true,
      formResponses: {
        name: null,
        email: null,
        phone: null,
        webOrCompanyName: null,
        message: null
      }
    }
  },
  validations: {
    formResponses: {
      name: {
        required,
        minLength: minLength(2)
      },
      email: {
        required,
        email
      },
      phone: {
        numeric,
        minLength: minLength(8)
      },
      webOrCompanyName: {
        minLength: minLength(2)
      },
      message: {
        required,
        minLength: minLength(12)
      }
    }
  },
  methods: {
    encode(data) {
      return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&")
    },
    handleSubmit(e) {
      this.empty = !this.$v.formResponses.$anyDirty
      this.errors = this.$v.formResponses.$anyError
      this.uiState = "submit clicked"
      if (this.errors === false && this.empty === false) {
        this.uiState = "pending" // Disable the button while the form is submiting

        fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: this.encode({
            "form-name": e.target.getAttribute("name"),
            ...this.formResponses
          })
        })
          .then(() => {
            this.uiState = "form submitted"
            this.formResponses = {
              name: null,
              email: null,
              phone: null,
              webOrCompanyName: null,
              message: null
            }
          })
          .catch(error => alert(error))
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.submitBtn {
  margin: 2rem auto;
  display: block;
  @media (min-width: $breakpoint-lg) {
    margin: 2rem 0;
  }
}

.success,
.error {
  position: absolute;
  margin: $size-input-error-margin;
  font-size: 12px;
  text-transform: uppercase;
}
.success {
  color: $color-green;
}
.error {
  color: $color-red;
}
</style>
