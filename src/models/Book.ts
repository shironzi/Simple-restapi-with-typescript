// models/Book.ts

import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../db/database";

export interface UpdateBookRequest {
  title?: string;
  author?: string;
  description?: string;
}

// Define the attributes interface
interface BookAttributes {
  id: number;
  title: string;
  author: string;
  description: string;
  createdAt?: Date;
  updatedAt?: Date;
}

// Define creation attributes interface
interface BookCreationAttributes extends Optional<BookAttributes, "id"> {}

// Define the model
export class Book
  extends Model<BookAttributes, BookCreationAttributes>
  implements BookAttributes
{
  public id!: number;
  public title!: string;
  public author!: string;
  public description!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

// Initialize the model
Book.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING(128),
      allowNull: false,
    },
    author: {
      type: DataTypes.STRING(128),
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    tableName: "books",
    sequelize,
    timestamps: true,
  }
);

(async () => {
  await sequelize.sync();
})();

export default Book;
