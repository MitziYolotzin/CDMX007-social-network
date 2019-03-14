(function (window, document) {
    
  _.controler('registerp', {
    usuario : {},
    usuarios : [],

    create: function (form) {
    this.user.email = form.email.value; 
    this. user.email = form.password.value; 
    this.user.sent = form.sent.checked; 
    },
    delete: function () {},
    reload: function () {},
  });
})(window, document);