import { stripe } from "@/lib/stripe";
import { ImageContainer } from "@/styles/pages/product";
import { SucessContainer } from "@/styles/pages/sucess";
import { GetServerSideProps } from "next";
import Image from "next/image";
import Link from "next/link";
import Stripe from "stripe";

interface SucessProps {
  customerName: string;
  product: {
    name: string;
    imageUrl: string;
  }
}

export default function Sucess({customerName, product}: SucessProps){
  return(
    <SucessContainer>
      <h1>Compra Efetuada</h1>
      <ImageContainer>
        <Image src={product.imageUrl} width={120} height={110} alt="" />
      </ImageContainer>

      <p>
        Uhuuuuu <strong>{customerName}</strong>, sua <strong>{product.name}</strong> já está a caminho de sua casa
      </p>

      <Link href="/">
        Voltar ao Catálogo
      </Link>
    </SucessContainer>
  )
}

export const getServerSideProps: GetServerSideProps = async({ query, params }) => {
  if (!query.session_id) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      }
    }
  }

  const session_id = String(query.session_id);

  const session = await stripe.checkout.sessions.retrieve(session_id, {
    expand: ['line_items', 'line_items.data.price.product']
  })

  const customerName = session.customer_details.name;
  const product = session.line_items.data[0].price.product as Stripe.Product;

  return {
    props: {
      customerName,
      product: {
        name: product.name,
        imageUrl: product.images[0],
      }
    }
  }
}