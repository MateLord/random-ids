<template>
  <div>
    <GeneratorTemplate
      ref="commonTemplate"
      :generate-next-value="nextValue"
    >
      <template v-slot:generatorName>
        <p class="headline">
          Paszport
        </p>
      </template>
    </GeneratorTemplate>
  </div>
</template>

<script>
import GeneratorTemplate from '@/components/generators/GeneratorTemplate.vue'
import passportService from '@/services/generators/passport.js'

export default {
  name: 'PASSPORT',
  placeholder: 'passport',

  components: {
    GeneratorTemplate
  },

  methods: {
    nextValue () {
      return passportService.passport()
    }
  }
}
</script>

<style>
</style>
