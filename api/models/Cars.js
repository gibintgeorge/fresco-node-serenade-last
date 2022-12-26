module.exports = {
  attributes: {
    id: {
      type: "integer",
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: "string",
      required: true,
    },
    segment: {
      model: "segment",
    },
    manufacturer: {
      model: "manufacturer",
    },
    variants: {
      collection: "Variant",
      via: "cars",
      dominant: true,
    },
    accessories: {
      collection: "Accessories",
      via: "cars",
      dominant: true,
    },
    description: {
      type: "string",
    },
  },
};
