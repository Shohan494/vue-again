function getRandomValue(min, max){
  return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
  data() {
    return {
      playerHealth : 100,
      monsterHealth : 100,
      currentRound: 0
    };
  },
  methods: {
    attackMonster(){
      const attackValue = getRandomValue(5, 12);
      this.monsterHealth -= attackValue;
      this.attackPlayerByMonster();
      this.currentRound++;
    },
    specialAttackMonster(){
      const attackValue = getRandomValue(10, 25);
      this.monsterHealth -= attackValue;
      this.attackPlayerByMonster();
      this.currentRound++;
    },
    attackPlayerByMonster(){
      const attackValue = getRandomValue(8, 15);
      this.playerHealth -= attackValue;
    }
  },
  computed: {
    monsterBarStyles(){
      return { width: this.monsterHealth + '%'};
    },
    playerBarStyles(){
      return { width: this.playerHealth + '%'};
    },
  }
});


app.mount('#game');
 
