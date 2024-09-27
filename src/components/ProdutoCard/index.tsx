import './styles.css'
import BtnEletronico from '../BtnEletronico';
import { ProductDTO } from '../../models/product';

type Props = {
  product: ProductDTO;

}
export default function ProdutoCard({ product }: Props) {
  return (
    <div className="dsc-card dsc-mb20">
      <div className="dsc-product-details-top dsc-line-bottom">
        <img src={product.imgUrl} alt={product.description} />
      </div>
      <div className="dsc-product-details-bottom">
        <h3>R$ {product.price.toLocaleString('pt-BR')}</h3>
        <h4>{product.name}</h4>
        <p>{product.description}</p>
        <div className="dsc-category-container">
          <BtnEletronico name="Eletrônicos" />
          <BtnEletronico name="Computadores" />
        </div>
      </div>
    </div>
  );
}