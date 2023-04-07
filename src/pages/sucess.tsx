import { ImageContainer } from "@/styles/pages/product";
import { SucessContainer } from "@/styles/pages/sucess";
import Link from "next/link";

export default function Sucess(){
  return(
    <SucessContainer>
      <h1>Compra Efetuada</h1>
      <ImageContainer>
        
      </ImageContainer>

      <p>
        Uhuuuuu <strong>Antonio Renato</strong>, sua <strong>Cmisa</strong> já está a caminho de sua casa
      </p>

      <Link href="/">
        Voltar ao Catálogo
      </Link>
    </SucessContainer>
  )
}