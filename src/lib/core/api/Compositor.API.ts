import { CompositorAttributes } from "../interface/Compositor.Interface";
import { ApiBase } from "./ApiBase";

class CompositorAPI extends ApiBase<CompositorAttributes> {
  constructor() {
    super("compositor");
  }
}

export const compositorAPI = new CompositorAPI();
