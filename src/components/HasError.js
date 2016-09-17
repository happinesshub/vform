export default {
  props: {
    form: {
      type: Object,
      required: true
    },

    field: {
      type: String,
      required: true
    }
  },

  template: `
    <div class="help-block" v-if="form.errors.has(field)" v-html="form.errors.get(field)"></div>
  `
}
