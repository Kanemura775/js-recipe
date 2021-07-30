new Vue({
  el: "#ATM",
  data: {
    nyuuryokugaku: 0,
    zandaka: 0,
    logs: [
      {
        date: new Date("2021-07-23T12:00:00"),
        type: "入金",
        money: 1000,
      },
      {
        date: new Date("2021-07-23T13:00:00"),
        type: "入金",
        money: 1000,
      },
    ],
  },
  methods: {
    nyukin: function() {
      this.zandaka += Number(this.nyuryokugaku)
      this.logs.push({
        date: new Date(),
        type: "入金",
        money: Number(this.nyuryokugaku),
      })
    },
    syukin: function() {
      this.zandaka -= Number(this.nyuuryokugaku)
      this.logs.push({
        date: new Date(),
        type: "出金",
        money: Number(this.nyuryokugaku),
      })
    },
  },
  computed: {
    hasZandaka: function() {
      return !(this.zandaka > 0)
    },
  },
})
