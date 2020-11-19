<template>
  <main>
    <h1 id="about" class="text-xl black">About me</h1>
    <hr />
    <div class="grid xl-3 lg-2 sm-1 center">
      <section v-for="(card, index) in cards" :key="index">
        <input type="checkbox" :id="card.id" hidden />
        <label :for="card.id">
          <div class="card">
            <div :class="card.class1">
              <h2 style="text-align: center">{{ card.title }}</h2>
              <br />
              <div>
                <img :src="card.img" width="200" />
              </div>
            </div>
            <div :class="card.class2">
              <h2 class="bold">{{ card.title }}</h2>
              <h5 class="text-md">
                {{ card.desc }}
              </h5>
              <router-link to="#" :class="card.class3">
                <span></span>
                <span></span>
                <span style="max-height: 1px !important"></span>
                <span></span>
                get in touch
              </router-link>
            </div>
          </div>
        </label>
      </section>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      cards: [
        {
          id: "flipping_card-1",
          title: "Who Am I?",
          img: "./images/face.svg",
          class1: "card-front bg-dpink",
          class2: "card-back bg-orange",
          class3: "btn neon-btn-lblack neon-btn bold text-md",
          desc:
            "My name is ali and I am a full-stack web developer with more than 3 years of experience as a developer. I really enjoy create Outsanding,creative and interactive apps for you",
        },
        {
          id: "flipping_card-2",
          title: "what can I build for you?",
          img: "./images/penguin.svg",
          class1: "card-front bg-dblue",
          class2: "card-back bg-brown",
          class3: "btn neon-btn-lgreen neon-btn bold text-lg",
          desc:
            "within these 3 years I've worked with many technologies but my specialities are vuejs,nodejs,mongodb,php,flutter. with these tech stacks I can build anything that you want me to build as well as small projects like bug fixing and etc",
        },
        {
          id: "flipping_card-3",
          title: "why You Should Work with Me?",
          img: "./images/why.svg",
          class1: "card-front bg-dgray",
          class2: "card-back bg-lred",
          class3: "btn neon-btn-dblue neon-btn bold text-lg",
          desc:
            "I am patient developer that you can easily tell me about your idea and get the best. your satisfaction is the most important thing for me so be sure that you will get the best result",
        },
      ],
    };
  },
};
</script>

<style lang='scss' scoped>
main {
  width: 100%;
  margin: 4rem 0 0rem 0;
  .card {
    max-width: 300px;
    height: 500px;
    margin: 35px auto 0;
    .card-front {
      flex-direction: column;
    }
  }
  #about {
    text-align: center;
  }
}
.grid div span {
  padding: 1px;
}
</style>