

<template>

<p>{{ answer }}</p><br><br>
  <input type="text" v-model="question" name="" id="">

<button @click="configring">Generate Text</button>
</template>

<script>

import { Configuration, OpenAIApi } from "openai";

export default {
  data() {
    return {
      question: "",
      answer: ''
    }
  },
  methods: {
    async configring() {
      const configuration = new Configuration({
        apiKey: "git",
      });
      const openai = new OpenAIApi(configuration);

      const completion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{role: "user", content: "Hello"},
        {role: "assistant", content: "how can i help you"},
        {role: "user", content: this.question}
      ],
        
      });
      console.log(completion.data.choices[0].message.content);
      this.answer = completion.data.choices[0].message.content
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