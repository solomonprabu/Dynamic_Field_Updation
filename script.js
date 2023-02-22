var counter = 1;
function add_more_field(){
    counter+=1
    html = '<div>\
    <label>Product name</label>\
    <input type="text" name="product'+counter+'" class="form-control">\
</div>\
    <div>\
    <label>Price</label>\
    <input type="text" name="price'+counter+'" class="form-control">\
</div>'

var form = document.getElementById('form')
form.innerHTML += html
}