<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Product;
use App\Models\Order;

use App\Models\Cart;
class HomeController extends Controller
{
    public function redirect()
    {    
        $user=auth()->user();
        $count_item=cart::where('phone', $user->phone)->count();



        $data=product::all();
        return view('User.home', compact('data','count_item'));
    }

    public function index()
    {
        if(Auth::id()){
            return redirect('redirect');
        }
        else{
            $data=product::all();
            return view('User.home', compact('data'));
        }
        
    }

    public function addcart(Request $request, $id)
    {
        if(Auth::id()){
            $product=product::find($id);

            $user=auth()->user();

            $cart=new cart;

            $cart->name = $user->name;
            $cart->phone = $user->phone;
            $cart->address = $user->address;
            $cart->product_title = $product->title;
            $cart->price = $product->price;
            $cart->quantity = $request->quantity;
            $cart->save();





            return redirect()->back();
        }
        else{
            return redirect('login');
        }
    }


    public function cascade()
    {
    
        if(Auth::id()){
            $user=auth()->user();
            $count_item=cart::where('phone', $user->phone)->count();
            $data=product::where('category', 'Cascade')->get();
            return view('User.cascade', compact('data','count_item'));
        }
        else{
            $data=product::where('category', 'Cascade')->get();
            return view('User.cascade', compact('data'));
        }
    
        
        
    }
    public function wedding()
    {
        if(Auth::id()){
            $user=auth()->user();
            $count_item=cart::where('phone', $user->phone)->count();
            $data=product::where('occassion', 'Wedding')->get();
            return view('User.wedding', compact('data','count_item'));
        }
        else{
            $data=product::where('occassion', 'Wedding')->get();
            return view('User.wedding', compact('data'));
        }
        
        
    }
    public function other()
    {
        if(Auth::id()){
            $user=auth()->user();
            $count_item=cart::where('phone', $user->phone)->count();
            $data=product::where('category', 'Other')->orWhere('occassion', 'Other')->get();
            return view('User.other', compact('data','count_item'));
        }
        else{
            $data=product::where('category', 'Other')->orWhere('occassion', 'Other')->get();
            return view('User.other', compact('data'));
        }
        
        
    }
    public function cart()
    {
    
    $user=auth()->user();
    $count_item=cart::where('phone', $user->phone)->count();

    $data=cart::where('phone', $user->phone)->get();
    return view('User.cart', compact('data','count_item'));
        
    }

    public function deletefromcart($id)
    {
        
    $data=cart::find($id);
    $data->delete();
    return redirect()->back();
        
    }

    public function updatecart(Request $request, $id)
    {
      
            $item=cart::find($id);
            $item->quantity = $request->quantity;
            $item->save();


            return redirect()->back();
        
    }
    public function confirmcart()
    {

            $user=auth()->user();
            $data=cart::where('phone', $user->phone)->get();

            foreach($data as $product){
                $order=new order;
                $order->name = $user->name;
                $order->phone = $user->phone;
                $order->address = $user->address;
                $order->product_title = $product->product_title;
                $order->price = $product->price;
                $order->quantity = $product->quantity;
                $order->status = 'Order Confirmed';
                $order->save();
            }
            DB::table('carts')->where('phone', $user->phone)->delete();
            return redirect('profile');
    }
    public function profile()
    {
    
    $user=auth()->user();
    $data=order::where([
        ['phone', $user->phone],
        ['status','Order Confirmed'],
    ])->get();
    $count_item=cart::where('phone', $user->phone)->count();
    return view('User.profile', compact('data', 'user','count_item'));
        
    }
    public function updateprofilename(Request $request, $id)
    {
      
            $user=user::find($id);
            $user->name = $request->name;
            $user->save();


            return redirect('profile');
        
    }
}
