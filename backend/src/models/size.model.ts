import { model, Schema } from "mongoose";

interface ISize {
  name: string;
}

const sizeSchema = new Schema<ISize>({
  name: {
    type: String,
    required: true,
  },
});

const Size = model<ISize>("size", sizeSchema);

export default Size;
