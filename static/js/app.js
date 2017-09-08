let coinMarketApi = 'https://api.coinmarketcap.com'
let update_interval = 60 * 1000

let app = new Vue ({
  el: '#app',
  data: {
    coins: []
  },
  methods: {
    getCoins: () => {
      let self = this;

      axios.get(coinMarketApi + '/v1/ticker/?limit=20')
      .then((response) => {
        this.coins = response.data
      })
      .catch((err) => {
        console.error(err)
      })
    }
  }
  created: () => {
    this.getCoins()
  }
  getColor: (num) => {
    return num > 0 ? 'color: green' : 'color:red'
  }
})

setInterval(() => {
  app.getCoins()
}, update_interval)
