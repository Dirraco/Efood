import estrela from '../../assets/images/estrela.svg'

import hsImg from '../../assets/images/prato1.svg'
import { Button, Card, CardHeader, Descricao, CardGer, Rating } from './styles'

const Product = () => (
  <CardGer>
    <Card>
      <img src={hsImg} alt="" />
      <div>
        <CardHeader>
          <h3>Hioki Sushi</h3>
          <Rating>
            <h3>4.6</h3>
            <img src={estrela} alt="avaliação" />
          </Rating>
        </CardHeader>
        <Descricao>
          Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis
          frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega
          rápida, embalagens cuidadosas e qualidade garantida.
        </Descricao>
      </div>
      <Button>Saiba mais</Button>
    </Card>
  </CardGer>
)

export default Product
