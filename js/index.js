const app = new Vue({
  el: "#app",
  data: {
    ki: 50,
    yi: 40,
    ai: 10,
    incomePercent: 70,
    kiTotal: 5000,
    yiTotal: 4000,
    aiTotal: 1000,
    income: 1000
  },
  computed: {
    iTotal() {
      return (+this.kiTotal + +this.yiTotal + +this.aiTotal)
    },
    kiPercent() {
      if (this.kiTotal > 0) {
        return (this.kiTotal * 100 / this.iTotal).toFixed(2)
      }
      return 0
    },
    yiPercent() {
      if (this.yiTotal > 0) {
        return (this.yiTotal * 100 / this.iTotal).toFixed(2)
      }
      return 0
    },
    aiPercent() {
      if (this.aiTotal > 0) {
        return (this.aiTotal * 100 / this.iTotal).toFixed(2)
      }
      return 0
    },
    iIncome() {
      return this.income*this.incomePercent/100
    },
    kiIncome() {
      if (this.iIncome > 0) {
        return (this.iIncome * this.ki / 100).toFixed(2)
      }
      return 0
    },
    yiIncome() {
      if (this.iIncome > 0) {
        return (this.iIncome * this.yi / 100).toFixed(2)
      }
      return 0
    },
    aiIncome() {
      if (this.iIncome > 0) {
        return (this.iIncome * this.ai / 100).toFixed(2)
      }
      return 0
    },
  }
});
