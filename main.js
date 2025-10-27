
// Modal and form handling
document.addEventListener('DOMContentLoaded', function(){
  const modal = document.getElementById('orderModal');
  const closeBtn = document.querySelectorAll('.modal .close');
  const buyBtns = document.querySelectorAll('.buy-btn');
  const productNameInput = document.getElementById('productName');
  const orderForm = document.getElementById('orderForm');
  const waLink = document.getElementById('waLink');

  function openModal(name, price){
    productNameInput.value = name + " - ₹" + price;
    waLink.href = "https://wa.me/919999999999?text=" + encodeURIComponent("I'd like to order: " + name + " (₹"+price+")");
    modal.style.display = 'flex';
  }
  closeBtn.forEach(btn=>btn.addEventListener('click', ()=> modal.style.display='none'));
  window.addEventListener('click', (e)=> { if(e.target===modal) modal.style.display='none' });

  buyBtns.forEach(b=> b.addEventListener('click', function(){
    const name = this.getAttribute('data-name');
    const price = this.getAttribute('data-price');
    openModal(name, price);
  }));

  orderForm?.addEventListener('submit', function(e){
    e.preventDefault();
    // simple client-side thank you
    alert('Thank you for your order! We\'ll contact you soon.');
    modal.style.display='none';
    orderForm.reset();
  });

  // contact form handler
  document.getElementById('contactForm')?.addEventListener('submit', function(e){
    e.preventDefault();
    alert('Thank you for contacting us! We\'ll get back to you soon.');
    this.reset();
  });
});
