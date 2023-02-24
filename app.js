 document.getElementById('kitkat-buy-btn').addEventListener('click', function(){
   const quantity = getInputvalue('kitkat-quantity');
   const kitkatCost = quantity * 200;
   setInnerText('chocolate', kitkatCost)

   document.getElementById('kitkat-quantity').value = '';
   total();
 })
 document.getElementById('rose-buy-btn').addEventListener('click',function(){
   const quantity = getInputvalue('rose-quantity');
   const roseCost = quantity * 100;
   setInnerText('rose', roseCost)
   document.getElementById('rose-quantity').value = '';
   total();
 })
 document.getElementById('diary-buy-btn').addEventListener('click',function(){
  const quantity = getInputvalue('diary-quantity');
  const diaryCost = quantity * 100;
  setInnerText('diary', diaryCost)
  document.getElementById('diary-quantity').value = '';
  total();
 })

 function setInnerText(id, value){
  document.getElementById(id).innerText = value;
 }
 function getInputvalue(id){
  const value = document.getElementById(id).value;
  return parseInt(value);
 }
function total(){
  const chocolate = document.getElementById('chocolate').innerText;
  const rose = document.getElementById('rose').innerText;
  const diary = document.getElementById('diary').innerText;
  const totalsum = parseInt(chocolate) + parseInt( rose) + parseInt( diary);
  // document.getElementById('total').innerText = totalsum; or you can follow the next line
  setInnerText('total', totalsum);
}
document.getElementById('promo-btn').addEventListener('click', function(){
  const promoCode = getInputvalue('promo-code');
  if(promoCode === 101){
    const total = document.getElementById('total').innerText;
    const sum = total - parseInt(total) * 0.1;
    setInnerText('all-total', sum)
  }else{
    alert('wrong promo code, Try again with valid code');
  }
  getInputvalue('promo-code') = ''
})
