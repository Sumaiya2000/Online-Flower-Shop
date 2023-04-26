
    <div class="latest-products">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="section-heading">
              <h2>Products</h2>
             </div>
          </div>
         @foreach($data as $product)
          <div class="col-md-4">
            <div class="product-item">
              <a href="#"><img src="assets/images/{{$product->image}}" alt=""></a>
              <div class="down-content">
                <a href="#"><h4>{{$product->title}}</h4></a>
                <h6>৳{{$product->price}}</h6>
                <p>{{$product->description}}</p>
                
                <form action="{{url('addcart', $product->id)}}" method="post">
                    <div>
                    @csrf
                    <input type="number" value="1" min="1" name="quantity" style="width:100px" class="form-control">
                </div>
                <br>
                    <div>
                    <input class="signbtn" type="submit" value="Add to cart"></div>
				</form>	


              </div>
            </div>
          </div>
          
          @endforeach
        </div>
      </div>
    </div>
