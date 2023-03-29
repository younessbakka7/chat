

<template>

  <div class="test">
    
    <h3>Interface chatGPT by Aitala Banding</h3><br><br>
    <div class="msg" v-for="message in messages" :key="message.id">
      {{ message.text }}
    </div>
  
    <form @submit.prevent="sendMessage">
      <input class="inp" type="text" v-model="newMessage" placeholder="type Ecrire..." />
      <button  type="submit">Send</button>
    </form>
  </div>
</template>

<script>
//import '../js/test.css';
export default {
  data() {
    return {
      messages: [],
      newMessage: "",
    };
  },
  methods: {
    async sendMessage() {
      if (this.newMessage !== "") {
        this.messages.push({ text: this.newMessage });
        this.newMessage = "";

        const response = await fetch("https://api.chatbot.com/send", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            message: this.newMessage,
          }),
        });

        const data = await response.json();

        this.messages.push({ text: data.response });
      }
    },
  },
};
</script>