const express=require('express')
const { deleteItem, updateItem,getItems,confirmOrder } = require('../controllers/cartController')

const router=express.Router()
const{getFools,postFools,updateFools,deleteFools,getCat,getOcc, addtoCart,getCatn,getFoolsn,getOccn} =require('../controllers/phulelController')
const { getReview, postReview } = require('../controllers/reviewController')

module.exports = router


const {protect} =require('../middleware/authMiddleware')
router.get('/products',getFools)

router.post('/create',postFools)

router.put('/test/:id',updateFools)
router.delete('/test/:id',deleteFools)


router.get('/categories/:category',protect,getCat)
router.get('/occasions/:occasion',protect,getOcc)
router.get('/cart',protect,getItems)
router.post('/cart/:pid',protect,addtoCart)
router.put('/cart/update/:pid',protect,updateItem)
router.delete('/cart/delete/:pid',protect,deleteItem)
router.post('/cart/confirm/order',protect,confirmOrder)
router.post('/engage', protect,postReview)
router.get('/engage', protect,getReview)

//not user

/* router.get('/notuser/products', protect,getFoolsn)
router.get('/notuser/categories/:category',protect,getCatn)
router.get('/notuser/occasions/:occasion',protect,getOccn) */



router.get('/homepage',(req,res)=>{
    res.json({message:'Homepage created!'})
}
)
