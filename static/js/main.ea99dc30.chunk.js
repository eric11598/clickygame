(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(e){e.exports=[{id:1,name:"Rosalina",image:"https://www.mariowiki.com/images/thumb/0/05/Rosalina_-_Mario_Party_10.png/457px-Rosalina_-_Mario_Party_10.png"},{id:2,name:"Bowser",image:"https://www.mariowiki.com/images/thumb/7/7e/Bowser_-_Mario_Party_10.png/548px-Bowser_-_Mario_Party_10.png"},{id:3,name:"Waluigi",image:"https://www.mariowiki.com/images/thumb/2/27/SuperMarioParty_Waluigi.png/420px-SuperMarioParty_Waluigi.png"},{id:4,name:"Luigi",image:"https://www.mariowiki.com/images/thumb/b/bb/SuperMarioParty_Luigi.png/354px-SuperMarioParty_Luigi.png"},{id:5,name:"Peach",image:"https://www.mariowiki.com/images/thumb/b/b7/SuperMarioParty_Peach_2.png/300px-SuperMarioParty_Peach_2.png"},{id:6,name:"Daisy",image:"https://www.mariowiki.com/images/thumb/a/a9/SuperMarioParty_Daisy.png/387px-SuperMarioParty_Daisy.png"},{id:7,name:"Wario",image:"https://www.mariowiki.com/images/2/29/SMPWario.png"},{id:8,name:"Mario",image:"https://www.mariowiki.com/images/thumb/6/64/SMP_Mario_with_Dice.png/600px-SMP_Mario_with_Dice.png"},{id:9,name:"Yoshi",image:"https://www.mariowiki.com/images/thumb/4/4d/Yoshi_-_Mario_Party_10.png/392px-Yoshi_-_Mario_Party_10.png"},{id:10,name:"Shyguy",image:"https://www.mariowiki.com/images/thumb/a/a1/Shyguy_MP9.png/493px-Shyguy_MP9.png"},{id:11,name:"KoopaTroopa",image:"https://www.mariowiki.com/images/thumb/5/5c/SuperMarioParty_KoopaTroopa.png/600px-SuperMarioParty_KoopaTroopa.png"},{id:12,name:"Boo",image:"https://www.mariowiki.com/images/thumb/5/54/BooNSMBWii.png/603px-BooNSMBWii.png"}]},,,,,,,,function(e,a,t){e.exports=t(26)},,,,,function(e,a,t){},,function(e,a,t){},,function(e,a,t){},,function(e,a,t){},,function(e,a,t){},,function(e,a,t){},,function(e,a,t){"use strict";t.r(a);var i=t(0),r=t.n(i),n=t(3),o=t.n(n),c=t(4),s=t(5),m=t(7),h=t(6),g=t(8),p=(t(14),function(e){return r.a.createElement("div",{className:"card",onClick:function(){return e.selectCharacter(e.id)}},r.a.createElement("div",{className:"img-container"},r.a.createElement("img",{alt:e.name,src:e.image})))}),u=(t(16),function(e){return r.a.createElement("div",{className:"wrapper"},e.children)}),l=(t(18),function(e){return r.a.createElement("nav",{className:"navbar"},r.a.createElement("ul",null,r.a.createElement("li",{className:"brand"},r.a.createElement("a",{href:"/"},"Clicky Game!")),e.message,r.a.createElement("li",null,"Score: ",e.score," | Top Score: ",e.highScore)))}),w=(t(20),function(e){return r.a.createElement("h1",{className:"title"},e.children,r.a.createElement("p",{className:"message"},"Select a character to earn points, but do not click more than once!"))}),_=t(1),d=(t(22),function(e){function a(){var e,t;Object(c.a)(this,a);for(var i=arguments.length,r=new Array(i),n=0;n<i;n++)r[n]=arguments[n];return(t=Object(m.a)(this,(e=Object(h.a)(a)).call.apply(e,[this].concat(r)))).state={characters:_,message:"",score:0,highScore:0,clickedArray:[]},t.selectCharacter=function(e){for(var a=[],i=0;i<12;i++){for(var r=Math.floor(12*Math.random());a.includes(r);)r=Math.floor(12*Math.random());a.push(r)}var n=t.state.score,o=t.state.highScore,c=t.state.message;t.state.clickedArray.includes(e)?(n>o&&(o=n),c="You guessed incorrectly!",t.state.clickedArray.length=0,n=0):(c="You guessed correctly!",t.state.clickedArray.push(e),n++);var s=a.map(function(e){return _[e]});t.setState({score:n,characters:s,highScore:o,message:c})},t}return Object(g.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){this.setState({message:"Select a character!",characters:_})}},{key:"render",value:function(){var e=this;return r.a.createElement(u,null,r.a.createElement(l,{score:this.state.score,highScore:this.state.highScore,message:this.state.message}),r.a.createElement(w,{score:this.state.score,highScore:this.state.highScore,message:this.state.message}),this.state.characters.map(function(a){return r.a.createElement(p,{selectCharacter:e.selectCharacter,id:a.id,key:a.id,name:a.name,image:a.image})}))}}]),a}(i.Component));t(24);o.a.render(r.a.createElement(d,null),document.getElementById("root"))}],[[9,2,1]]]);
//# sourceMappingURL=main.ea99dc30.chunk.js.map