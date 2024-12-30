import { textSlicer } from "../utils/functions";
import { IProduct } from "./Interface";
import Button from "./UI/Button";
import Image from "./UI/Image";



interface IProps {
    product: IProduct;
}

const Product = ({product}: IProps) => {
    return (
        <div className="max-w-sm md:max-w-lg border p-2 mx-auto rounded-md m-3 flex flex-col flex-grow">
            <Image src={product.imageURL} alt="product"/>
            <h3>{product.title}</h3>
            <p>{textSlicer(product.description)}</p>

            
            <div className="flex space-x-2 mt-2 mb-2 "> 
                <span className="bg-indigo-700 w-5 h-5 rounded-full "/>
                <span className="bg-yellow-500 w-5 h-5 rounded-full"/>
                <span className="bg-red-700 w-5 h-5 rounded-full"/>
            </div>

            <div className="flex justify-between items-center">
                <span>Price: {product.price}</span>
                <Image className="rounded-full" height={35} width={35} src={product.imageURL}/>
            </div>

            <div className="flex justify-around space-x-2 mt-2">      
                <Button onClick={() => {
                    console.log("Edit button clicked");
                }} label="EDIT" className="bg-indigo-600 rounded-md w-6/12 h-9" />
                <Button label="DELETE" className="bg-red-700 rounded-md w-6/12 h-9" />
            </div>

        </div>
    )
}

export default Product;