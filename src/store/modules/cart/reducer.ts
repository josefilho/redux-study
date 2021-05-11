import { Reducer } from "react";

import { ICartState } from "./types";

const INITIAL_STATE: ICartState = {
  itens: []
}

const cart: Reducer<ICartState, {}> = () => {

  return INITIAL_STATE;
}

export default cart;