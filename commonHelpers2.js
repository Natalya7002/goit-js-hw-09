import"./assets/styles-a9d1411f.js";const m=document.querySelector('form.feedback-form input[name="email"]'),o=document.querySelector('form.feedback-form textarea[name="message"]'),r=document.querySelector("form.feedback-form");r.addEventListener("submit",function(e){e.preventDefault();const a=JSON.parse(t());if(a.email===""||a.message===""){alert("Please fill in all the fields!");return}else alert(`Thank you for your feedback! Email: ${a.email}, Message: ${a.message}`),console.log(a),l(),m.value="",o.value=""});function t(){return localStorage.getItem("feedback-form-state")}function l(){localStorage.setItem("feedback-form-state",JSON.stringify({email:"",message:""}))}const s=t();if(s==null)l();else{let e=JSON.parse(s);m.value=e.email,o.value=e.message}r.addEventListener("input",e=>{e.target.name==="email"?n(e.target.value):e.target.name==="message"&&f(e.target.value)});function n(e){const a=JSON.parse(t());localStorage.setItem("feedback-form-state",JSON.stringify({email:e,message:a.message}))}function f(e){const a=JSON.parse(t());localStorage.setItem("feedback-form-state",JSON.stringify({message:e,email:a.email}))}
//# sourceMappingURL=commonHelpers2.js.map