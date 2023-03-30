

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
<style scoped>
.test{
  

  border: 1px solid black;
  margin-top: 10%;
  margin-left: 10%;
  width:80vw;
  height:fit-content ;


}
h3{
  

  font-size: 40px;
  margin-bottom: 5%;
  color: #ADD8E6;
  text-align: center;

}
.msg{
  color: black;
  background-color:#60b9d6; 
  font-size: 20px;
  text-align: center;
  padding-bottom: 20px;
  padding-top: 20px;
  margin-left: 30px;
  width: fit-content;
  height: fit-content;
  border-radius:15px 0 15px 0 ;
  box-shadow: 0 0 6px #B2B2B2;
  
  
}
input[type=text] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
}
input[type=text]:focus {
  border: 2px solid #555;
  border-radius: 5px;
  
}
button{
  background-color: #53b8da;
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  transition: 0.5s;
}
input:hover{
  border-radius: 30px;


}
button:hover{
  background-color:  #ADD8E6;
  border-radius: 30px;
}



</style>