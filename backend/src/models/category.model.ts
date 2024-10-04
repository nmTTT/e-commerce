import { model, Schema } from "mongoose";

interface ICategory {
  name: string;
  description: string;
}

const categorySchema = new Schema<ICategory>({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: "category comment",
  },
});

const Category = model<ICategory>("categories", categorySchema);

export default Category;
