Page({
  data: {
    inmoney:3000,
    row1: ""
  },
  
  onLoad: function () {
    var list5 = this.data.inmoney;
    var max = this.data.inmoney;
    console.log(max)
    var unit =  max/100000;
    console.log(unit)
    if (unit>1){
      this.setData({
        row1: 200 * unit,
      })
    }else{
      this.setData({
        row1: 400 * unit,
      })
    }
  }
})