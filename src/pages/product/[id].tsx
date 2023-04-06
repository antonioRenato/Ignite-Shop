import { ImageContainer, ProductContainer, ProductDetails } from "@/styles/pages/product"
import { useRouter } from "next/router"

export default function Product() {
  const { query } = useRouter()

  return(
    <ProductContainer>
      <ImageContainer>
        
      </ImageContainer>
      <ProductDetails>
        <h1>Camiseta X</h1>
        <span>R$ 79,90</span>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate explicabo odit quas quae eaque est, aspernatur ab error, dolorum doloremque veritatis amet soluta repellat iste dolores accusantium sed nihil laborum?</p>

        <button>
          Comprar agora
        </button>
      </ProductDetails>
    </ProductContainer>
  )
}