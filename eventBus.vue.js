import { reactive } from "vue"

const eventBus = reactive({
  events: new Map(),

  on(event, callback) {
    let callbacks = this.events.get(event)
    if (!callbacks) {
      callbacks = new Set()
      this.events.set(event, callbacks)
    }
    callbacks.add(callback)
  },

  off(event, callback) {
    const callbacks = this.events.get(event)
    if (callbacks) {
      callbacks.delete(callback)
      if (callbacks.size === 0) {
        this.events.delete(event)
      }
    }
  },

  emit(event, ...args) {
    const callbacks = this.events.get(event)
    if (callbacks) {
      for (const callback of callbacks) {
        callback(...args)
      }
    }
  },
})

export default eventBus
