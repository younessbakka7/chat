

<template>
  <form @submit="configring" class="test"  >
<h3>Interface chatGPT By Aitaala</h3>
<div v-for="(answer, index) in answers">
  <p v-if="index%2 == 0" class="msg2">{{ answer }}</p>
  <p v-else class="msg1">{{ answer }}</p>
</div>
<br><br>
  <input type="text" v-model="question" name="" id="" placeholder="Ecrire ici">

<button type="submit">Generate Text</button>
</form>
</template>

<script>

import { Configuration, OpenAIApi } from "openai";

export default {
  data() {
    return {
      question: "",
      answers: []
    }
  },
  methods: {
    async configring(e) {
      e.preventDefault()
      const configuration = new Configuration({
<<<<<<< HEAD
        apiKey: "git",
=======
      /*apikey limite*/  apiKey: "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",
>>>>>>> 87e6047d796be7d5b1987428706064b55ca539f5
      });
      const openai = new OpenAIApi(configuration);
       
      /* push qustion user*/ this.answers.push(this.question)
/*vider input*/      this.question='';
      const completion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{role: "user", content: "Hello"},
        {role: "assistant", content: "how can i help you"},
        {role: "user", content: this.question}  
      ],  
      });

      console.log(completion.data.choices[0].message.content);
      this.answers.push(completion.data.choices[0].message.content)
    }
  
  }

}
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
.msg1{
  color: black;
  background-color:#60b9d6; 
  font-size: 20px;
  text-align: center;
  padding-bottom: 20px;
  padding-top: 20px;
  margin-left: 30px;
  margin-bottom: 20px;
  width: fit-content;
  height: fit-content;
  border-radius:15px 0 15px 0 ;
  box-shadow: 0 0 6px #B2B2B2;
  
  
}
.msg2{
  color: white;
  background-color:#555; 
  font-size: 20px;
  text-align: center;
  padding-bottom: 20px;
  padding-top: 20px;
  margin-left: 30px;
  margin-bottom: 20px;
  width: fit-content;
  height: fit-content;
  border-radius:15px 0 15px 0 ;
  box-shadow: 0 0 6px #B2B2B2;
  text-align: start;
  
  
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