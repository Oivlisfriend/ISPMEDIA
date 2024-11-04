import { MidiaCompositorAttributes } from "../interface/MidiaCompositor.Interface";
import { ApiBase } from "./ApiBase";

class MidiaCompositorAPI extends ApiBase<MidiaCompositorAttributes> {
  constructor() {
    super("midiaCompositor");
  }
}

export const midiaCompositorAPI = new MidiaCompositorAPI();
