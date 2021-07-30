new Vue({
  el: "#ATM",
  data: {
    inputValue: "",
    zandaka:0,
  },
  methods:{
    IN:function(){
      this.zandaka += Number(this.inputValue)
    }
    OUT:function(){
      this.zandaka -= Number(this.inputValue)
    }
  }
})

// new Vue({
//   el: "#ATM",
//   data: {
//     nyuuryokugaku: 0,
//     zandaka: 0,
//     log: ["date","type","money",],
//   },
//   methods: {
//   nyuukin:function () {
//   this.zandaka += Number(this.nyuuryokugaku)
//   const now = new Date();
//   this.logs.push({
//     date: now,
//     type:"入金",
// money: this.nyuuryokugaku,
//   }),
//   },
// },
//   syukkin:function(){
//   this.zandaka -= Number(this.nyuuryokugaku)
//   const now = new Date();
//   this.logs.push({
//     date:now,
//     type:"出金",
//     money:this.nyuuryokugaku,
//   }),
