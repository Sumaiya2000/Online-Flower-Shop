

<!DOCTYPE html>
<html lang="en">

  <head>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">
    <link href="https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900&display=swap" rel="stylesheet">

    <title>Profile</title>

    <!-- Bootstrap core CSS -->
    <link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">


    <!-- Additional CSS Files -->
    <link rel="stylesheet" href="assets/css/fontawesome.css">
    <link rel="stylesheet" href="assets/css/templatemo-sixteen.css">
    <link rel="stylesheet" href="assets/css/owl.css">
  <!--  <link rel="stylesheet" href="assets/css/index.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"/>
    
    <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>

-->
  </head>

  <body>
  
      <!-- ***** Preloader Start ***** -->
      <div id="preloader">
        <div class="jumper">
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>  
    <!-- ***** Preloader End ***** -->
  @include('User.navbar')
        <!-- Page Content -->
    <!-- Banner Starts Here -->
    <div class="banner header-text">
      <div class="owl-banner owl-carousel">
        <div>
          <div class="text-content">
            <h4></h4>
            <h2>
            </h2>
          </div>
        </div>
     </div>
    </div>
    <!-- Banner Ends Here -->
    <div class="cart-page">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="section-heading">
              <h2 style="text-align: center">Profile</h2>
             </div>
          </div>

          <div class="cart-page">
          <table>
          <tr>
            <th style="width:100px">Name: </th>
            <td> {{$user->name}}</td>
          </tr>
          
          </table></div>
          <div class="cart-page">
          <table>
          <tr>
          <tr><form action="{{url('updateprofilename', $user->id)}}" method="post">
                    
                    <div class="txtb">
                      
                    <input type="text" name="name" class="form-control">
                    <span data-placeholder="Name"></span>
                    <input class="updatebtn" type="submit" value="Update Name">
                    </div>
                </form>	</tr>
          
                </table></div>

          <div class="cart-page">
          <table>
          <tr>
            <th style="width:150px">Address:</th>
            <td>{{$user->address}}</td>
          </tr>
          </table></div>
          <div class="cart-page">
          <table>
          <tr>
            <th style="width:150px">Phone:</th>
            <td>{{$user->phone}}</td>
          </tr>
          </table></div>
          <div class="cart-page">
          <table>
          <tr>
          <th style="width:100px">Email:</th>
            <td>{{$user->email}}</td>
          </tr>
        </table>
        </div>
        
        
        
    </div>

   <div class="cart-page">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="section-heading">
              <h2 style="text-align: center">Orders</h2>
             </div>
          </div>


        <table>
        <thead>
            <tr>
            <th>Product Title</th>
            <th>Unit Price</th>
            <th>Quantity</th>
            <th>Price</th>
            </tr>
        </thead>
        <tbody>
        <?php $sum=0 ?>
        @foreach($data as $product)
            <tr>
            <td>{{$product->product_title}}</td>
            <td>৳{{$product->price}}</td>
            <td>{{$product->quantity}}</td>
            <td>৳{{(int)$product->price*(int)$product->quantity}}</td>
            </tr>
            <?php $sum=$sum+ (int)$product->price*(int)$product->quantity?>
        @endforeach
        <tr style="border-top:3px solid #292929">
                <td>Order Summary:</td>
                <td>Total Price</td>
                <td> ৳<?php echo $sum ?></td>
                <td>Status: {{$product->status}}</td>
                </tr>
        </tbody>
        </table>
        
        
        
    </div>

     
    <footer>
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="inner-content">
              <p>Copyright &copy; 2023 Phulel.
            
      </div>
          </div>
        </div>
      </div>
    </footer>


    <!-- Bootstrap core JavaScript -->
    <script src="vendor/jquery/jquery.min.js"></script>
    <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>


    <!-- Additional Scripts -->
    <script src="assets/js/custom.js"></script>
    <script src="assets/js/owl.js"></script>
    <script src="assets/js/slick.js"></script>
    <script src="assets/js/isotope.js"></script>
    <script src="assets/js/accordions.js"></script>


    <script language = "text/Javascript"> 
      cleared[0] = cleared[1] = cleared[2] = 0; //set a cleared flag for each field
      function clearField(t){                   //declaring the array outside of the
      if(! cleared[t.id]){                      // function makes it static and global
          cleared[t.id] = 1;  // you could use true and false, but that's more typing
          t.value='';         // with more chance of typos
          t.style.color='#fff';
          }
      }
    </script>


  </body>

</html>
