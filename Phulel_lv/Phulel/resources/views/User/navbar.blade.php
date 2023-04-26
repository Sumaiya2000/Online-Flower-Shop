  <!-- Header -->
  <header class="">
      <nav class="navbar navbar-expand-lg">
        <div class="container">
          <a class="navbar-brand" href="/"><h2> <em>Phulel</em></h2></a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <a class="nav-link" href="/">Home
                  <span class="sr-only">(current)</span>
                </a>
              </li> 
              
              <li class="nav-item">
            <div class="dropdown">
                <ul>
                    <li class="dropdown">
                    <a class="nav-link" href="#">Categories</a>
                    <ul class="dropdown-menu">
                        <li><a href="cascade">Cascade Style Bouquets</a></li>
                        <li><a href="other">Other</a></li>
                    </ul>
                    </li>
                </ul>
            </div>
            </li>
            <li class="nav-item">
            <div class="dropdown">
                <ul>
                    <li class="dropdown">
                    <a class="nav-link" href="#">Occasions</a>
                    <ul class="dropdown-menu">
                        <li><a href="wedding">Wedding Bouquets</a></li>
                        <li><a href="other">Other</a></li>
                    </ul>
                    </li>
                </ul>
            </div>
            </li>

            
              
            <li class="nav-item">
              @if (Route::has('login'))
                    @auth
                        
            <li class="nav-item">
            <a class="nav-link" href="showcart"><i class="fa fa-shopping-cart" aria-hidden="true"></i>Cart<sup>[{{$count_item}}]</a>
            </li>

            <li class="nav-item">
            <a class="nav-link" href="profile">Profile</a>
            </li>
                  
                        <x-app-layout>
                        </x-app-layout>
                    @else
                        <li ><a class="nav-link" href="{{ route('login') }}">Log in</a></li>

                        @if (Route::has('register'))
                            <li><a class="nav-link" href="{{ route('register') }}">Register</a></li>
                        @endif
                    @endauth
                
            @endif

            </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>