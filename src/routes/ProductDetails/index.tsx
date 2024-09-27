import './styles.css';
import BtnAzul from '../../components/BtnAzul';
import BtnBranco from '../../components/BtnBranco';
import HeaderClient from '../../components/HeaderClient';
import ProdutoCard from '../../components/ProdutoCard';
import { ProductDTO } from '../../models/product';

const product: ProductDTO = {
  id: 2,
  name: 'Smart TV',
  description: 'Tv bonita',
  price: 3000.99,
  imgUrl: 'https://eldorado.hubsell.com.br/media/catalog/product/3/5/3583386_LG65QNED80SRA_G1_1.jpg',
  categories: [
    {
      id: 2,
      name: 'Eletrônicos'
    },
    {
      id: 3,
      name: 'Computadores'
    }
  ]
}

export default function ProductDetails() {
  return (
    <>
      <HeaderClient />
      <main>
        <section id="product-details-section" className="dsc-container">
          <ProdutoCard product={product} />
          <div className="dsc-btn-page-container">
            <BtnAzul />
            <BtnBranco />
          </div>
        </section>
      </main>
    </>
  );
}