import React from "react"
import dumy from "../../assets/products/dumy.svg"
import { Tr, Img, TdBold, TdRoboto } from "./StyledComponents"

export default function CartProduct({ name, number, price }) {
  return (
    <Tr>
      <td>
        <Img src={dumy} />
      </td>
      <TdBold>
        {name} #{number}
      </TdBold>
      <TdRoboto>${price}</TdRoboto>
    </Tr>
  )
}
