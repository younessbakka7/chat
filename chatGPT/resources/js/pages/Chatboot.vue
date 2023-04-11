<script>

import axios from "axios";
import { Configuration, OpenAIApi } from "openai";

export default {
  data() {
    return {
      question: "",
      answers: [],
      chats: [],
    }
  },
  mounted() {
    this.getChats()
  },
  methods: {
    getChats() {
      axios.get("/api/chat",{
      headers: {
        Authorization : `Bearer ${localStorage.getItem("access_token")}`
        }
    })
    },
    async configring(e) {
      e.preventDefault()
      const configuration = new Configuration({
      /*apikey limite*/  apiKey: "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",
      });
      const openai = new OpenAIApi(configuration);
       
      this.answers.push(this.question)
      
      const completion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{role: "user", content: "Hello"},
        {role: "assistant", content: "how can i help you"},
        {role: "user", content: this.question}  
      ],  
      });
      console.log(completion.data.choices[0].message.content);
      this.answers.push(completion.data.choices[0].message.content)
      var answer = completion.data.choices[0].message.content
      axios.post("/api/chat",{question:this.question,answer:answer,category: 0},{
      headers: {
        Authorization : `Bearer ${localStorage.getItem("access_token")}`
        }
    })
      this.question='';
    }
  
  }

}

</script>

<template>
  <div class="containner">
  <div class="login-info">
  <div class="text">
    <div class="newchat">
    <i class="fa-solid fa-plus"></i><p class="new">New chat</p>
  </div>
  </div>
  </div>
    
 
 <div class="form">
  <form @submit="configring" class="test"  >
    <div  class="answer">
  <div v-for="(answer, index) in answers">
    <div v-if="index%2 == 0">
      <p  class="msg1">{{ answer }}</p>
    </div>
    <div class="response" v-else-if="index%1 == 0">
       <img src="chat.png" class="user" alt="Profile Picture" /><p class="msg2">{{ answer }}</p>
    </div>
  </div>

    </div>
  <div class="question">
    <input type="text" v-model="question" placeholder="Ecrire ici..."><img class="ig" src="Vector.png" alt="">
  </div>
    
  </form>
 </div>

 </div>
</template>



<style scoped>
.ig{
   
    margin-left: -32px;
    height: 15px;
    margin-top: 12px;
}
.containner{
background-color: white;
background-image: url("gbvvq 1.png");
background-position: left top;
height: fit-content;
border: 2px solid black;
border-radius: 18px;
margin-left: 20px;
margin-right: 40px;
margin-top: 20px;
display: flex;

}
.login-info{

  
width: 50%;
}
.newchat {
  border: 1px solid black;
  text-align: center;
  margin-top: -180px;
  margin-left: 5px;
  width: 30%;
  margin-left: 30px;
  padding-top: 10px;
  padding-bottom: 10px;

}
.new{
  margin-top: -27px;
  margin-left: 50px;
}
.fa-solid{
  margin-left: -150px;
}
.login-info p{
  margin-left: 10px;
font-size: 20px;
font-weight: bold;

}
.login-info{
  padding-top:15%; 
  width: 45%;
}
.form{
border-left: 2px solid gray;
  padding-top: 4px;
  width: 117%;
  height: 33rem;
}

input[type=text] {
  
    color: black;
    margin-left: -15px;
    width: 806px;
    padding-top: 10px;
    padding-bottom: 10px;
    box-sizing: border-box;
    background: linear-gradient(90.44deg, #487DC4 -67.12%, #3567A9 130.06%);
    border-radius: 3px;

}
input[type=text] {
  
    color: black;
    margin-left: -15px;
    width: 806px;
    padding-top: 10px;
    padding-bottom: 10px;
    box-sizing: border-box;
    background: linear-gradient(90.44deg, #487DC4 -67.12%, #3567A9 130.06%);
    border-radius: 3px;

}
input[type=text]::placeholder {
  
    color: black;
    
}
.user {

height:80px ;
}
.msg1{
  color: black;

  font-size: 20px;
  text-align: center;
  padding-bottom: 20px;
  padding-top: 20px;
  margin-left: 3.2em;
  width: fit-content;
  height: fit-content;
  
}

.msg2{
  border-radius: 5px;
  color: white;
  background-color:#555; 
  font-size: 20px;
  text-align: center;
  padding-block: 20px;
  width: fit-content;
  height: fit-content;
  box-shadow: 0 0 6px #B2B2B2;
}
.answer {
  height: 30rem;
  overflow: scroll;
}
.question {
  display: flex;
  justify-content: center;
  
}
.response {
  display: flex;
  flex-direction: row;
}



















</style>
