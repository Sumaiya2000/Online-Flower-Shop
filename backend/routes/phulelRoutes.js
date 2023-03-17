const express=require('express')
const { deleteItem, updateItem,getItems,confirmOrder } = require('../controllers/cartController')

const router=express.Router()
const{getFools,postFools,updateFools,deleteFools,getCat,getOcc, addtoCart,getCatn,getFoolsn,getOccn} =require('../controllers/phulelController')

module.exports = router


const {protect} =require('../middleware/authMiddleware')
router.get('/products', protect,getFools)

router.post('/create',protect,postFools)

router.put('/test/:id',protect,updateFools)
router.delete('/test/:id',protect,deleteFools)


router.get('/Categories/:category',protect,getCat)
router.get('/Occasions/:occasion',protect,getOcc)
router.get('/Cart',protect,getItems)
router.post('/Cart/:pid',protect,addtoCart)
router.put('/Cart/update/:pid',protect,updateItem)
router.delete('/Cart/delete/:pid',protect,deleteItem)
router.post('/Cart/confirm/order',protect,confirmOrder)

//not user

router.get('/notuser/products', protect,getFoolsn)
router.get('/notuser/Categories/:category',protect,getCatn)
router.get('/notuser/Occasions/:occasion',protect,getOccn)



router.get('/homepage',(req,res)=>{
    res.json({message:'Homepage created!'})
}
)
