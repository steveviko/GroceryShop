import { Component } from '@angular/core';

@Component({
  selector:'pm-products',
  template: `
  <div class="col-sm-6 col-md-4 col-lg-3 mb-2">
  <div class="card-deck">
      <div class="card p-2 boarder-secodary mb-2">
          <img [src]="product.imageUrl"
          [style.width.px]='imageWidth'
          [style.height.px]='imageHeight'
          class="card-img-top" >

      </div>
      <div class="card-body p-1">
          <h4 class="card-title text-center text-info">{{ product.name }}</h4>
          <h5 class="card-text text-center text-danger">{{ product.price}}</h5>
      </div>
      <div class="card-footer p-1">
      <form action="" class="form_submit">

      <button class="btn btn-info btn-block addItemBtn"><i class="fa fa-cart-plus"></i>&nbsp;Add to Cart</button>
      </form>

      </div>
  </div>
</div>



  `
})

export class ProductListComponent{
  imageWidth:number =200
  imageHeight:number =200
product =
{
  name:'shoes',
  price:400,
  catergory:'footwear',
  created:'10/2/2020',
  imageUrl:'/assets/images/image.jpg'

}

}
