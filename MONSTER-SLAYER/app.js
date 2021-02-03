function getRandomValue(min, max){
  return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
  data() {
    return {
      playerHealth : 100,
      monsterHealth : 100,
      currentRound: 0,
      winner: ''
    };
  },
  watch: {
    playerHealth(value){
      if(value < 0 && value < this.monsterHealth){
        this.winner = 'Monster';
      }
    },
    monsterHealth(value){
      if(value < 0 && value < this.playerHealth){
        this.winner = 'Player';
      }      
    },
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
    },
    playerHeal(){
      const healValue = getRandomValue(8, 20);
      if(this.playerHealth + healValue > 100){
        this.playerHealth = 100;
      } else{
        this.playerHealth += healValue;
      }
      this.currentRound++;
      this.attackPlayerByMonster();
    }
  },
  computed: {
    monsterBarStyles(){
      return { width: this.monsterHealth + '%'};
    },
    playerBarStyles(){
      return { width: this.playerHealth + '%'};
    },
    mayUseSpecialAttack(){
      return this.currentRound % 3 !== 0;
    }
  }
});


app.mount('#game');
 
