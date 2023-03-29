



<template>
  <div class="chatbot">
    <div class="chatbot-header">
      <h3>interface chatGPT</h3>
    </div>
    <div class="chatbot-messages">
      <div class="chatbot-message" v-for="message in messages" :key="message.id">
        <p v-if="message.isBot">{{ message.text }}</p>
        <p v-else>{{ message.text }}</p>
      </div>
    </div>
    <div class="chatbot-input">
      <input type="text" v-model="inputValue" @keydown.enter="sendMessage" placeholder="Type a message...">
      <button @click="sendMessage">Send</button>
    </div>
  </div>
</template>

<script>
//import '../js/Interface.css';
export default {
  name: 'Chatbot',
  props: {
    title: String,
    botName: String,
    messages: Array
  },
  data() {
    return {
      inputValue: ''
    }
  },
  methods: {
     async sendMessage() {
      const message = {
        id: this.messages.length + 1,
        text: this.inputValue,
        isBot: false
      }
      this.messages.push(message)
      this.inputValue = ''
      
    }
  }
}
</script>
