import React,{useState} from "react";
import { Form, Button,ListGroup,Table,Image, Row, Alert} from "react-bootstrap";
export default function AddNameFunc() {
    let state={
        product:[]
    },

    formData = React.createRef(),
        [products, setProduct] = useState(state.product),
        
        creatProduct = (event)=>{
        event.preventDefault()
        let newProduct={
            name : formData.current.name.value,
            price:formData.current.price.value,
            photo:formData.current.photo.value,
            qty:Number(formData.current.qty.value)
        }
        setProduct([...products,newProduct])
        },
    incremant=(index)=>{
        products[index].qty= products[index].qty+1
        setProduct([...products])
    },
    decremant=(index)=>{
        if(products[index].qty>0)
        {
            products[index].qty= products[index].qty -1
            if(products[index].qty===0){
                products.splice(index,1)} 
            setProduct([...products])
        
        }
        else return  products
    }

    return(
        <div>
            
            <Form onSubmit={creatProduct} ref={formData}>
                <Form.Group controlId="formBasicName">
                    <Form.Label>Name Of Product</Form.Label>
                    <Form.Control type="text"  name="name"/>
                </Form.Group>
                <Form.Group controlId="formBasicPrice">
                    <Form.Label>Price</Form.Label>
                    <Form.Control type="number" name="price"/>
                </Form.Group>
                <Form.Group controlId="formBasicQty">
                    <Form.Label>Quantity</Form.Label>
                    <Form.Control type="number" name="qty"/>
                </Form.Group>
                <Form.Group controlId="formBasicPhoto">
                    <Form.Label>Photo</Form.Label>
                    <Form.Control type="text"  name="photo"/>
                </Form.Group>
                <Button variant="success" type="submit">Creat</Button>
            </Form>
            
                {
                products.length>=1?
                    <ListGroup>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>Product Name</th>
                                    <th>Price</th>
                                    <th>Photo</th>
                                    <th>Quantity</th>
                                </tr>
                            </thead>
                            <tbody>
                                {products.map((product, index) => {
                                    return (
            
                                        <tr key={index}>
                                            <td>{product.name}</td>
                                            <td>{product.price}</td>
                                            <td><Image src={product.photo} roundedCircle className="productPhoto"/></td>
                                            <td>
                                                <Row>
                                                    <p className="col-2">{product.qty}</p>
                                                    <button type="button" className="btn btn-danger col-2 mr-2" onClick={()=>incremant(index)}>
                                                        ^
                                                    </button>
                                                    <br/>
                                                    <button type="button" className="btn btn-primary col-2" onClick={()=>decremant(index)}>
                                                        v
                                                    </button>
                                                </Row>    
                                            </td>
                                        </tr>
                                    )
                                })}
                            
                                
                            </tbody>
                        </Table>
        
                    </ListGroup>
                :
                <Alert variant='info'> No Products found</Alert>    
                }
        </div>
    )
}

//  {/* <tr className="text-center">
//                             <td>{products.name}</td>
//                             <td>{products.price}</td>
//                             <td><Image src={products.photo} rounded className="productPhoto"/></td>
//                             <td>
//                                 <Row>
//                                     <p className="col-2">{products.qty}</p>
//                                     <button type="button" className="btn btn-danger col-2 mr-2" onClick={incremant}>
//                                         ^
//                                     </button>
//                                     <br/>
//                                     <button type="button" className="btn btn-primary col-2" onClick={decremant}>
//                                         v
//                                     </button>
//                                 </Row>
//                             </td>
//                         </tr> */}