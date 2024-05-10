import {
  createProduct,
  CreateProduct,
  Product,
  massageArray,
  exampleInputArray,
  findTotal,
} from "../index";
global.score = 1;

describe("Object properties and expected return", function () {
  let eo1 = [
    {
      productId: "8TH GEN CORE I7",
      productTitle: "ASUS ZENBOOK FLIP 13 UX362FA LAPTOP",
      Category: "ASUS",
      MadeInArea: "USA",
      Specifications: [
        { Specification: "Processor", detail: "Intel" },
        { Specification: "Generation", detail: "8th Gen" },
        { Specification: "Cache", detail: "8 MB" },
        { Specification: "Core", detail: "Quad Core" },
        { Specification: "Model", detail: "8565U" },
        { Specification: "Brand", detail: "Intel" },
        { Specification: "Series", detail: "Core i7" },
        { Specification: "Speed", detail: "1.8 GHz" },
        { Specification: "Boost upto", detail: "4.6 GHz" },
      ],
    },
    {
      productId: "8TH GEN CORE I5",
      productTitle: "HP ELITEBook X360 (4SU65UT) LAPTOP",
      Category: "HP",
      MadeInArea: "India",
      Specifications: [
        { Specification: "Processor", detail: "Intel" },
        { Specification: "Generation", detail: "8th Gen" },
        { Specification: "Cache", detail: "6 MB" },
        { Specification: "Core", detail: "Quad Core" },
        { Specification: "Model", detail: "8250U" },
        { Specification: "Brand", detail: "Intel" },
        { Specification: "Series", detail: "Core i5" },
        { Specification: "Speed", detail: "1.6 GHz" },
        { Specification: "Boost upto", detail: "3.4 GHz" },
      ],
    },
    {
      productId: "7TH GEN PENTIUM GOLD",
      productTitle: "DELL INSPIRON 15 3583 LAPTOP",
      Category: "Dell",
      MadeInArea: "India",
      Specifications: [
        { Specification: "Processor", detail: "Intel" },
        { Specification: "Generation", detail: "7th Gen" },
        { Specification: "Cache", detail: "2 MB" },
        { Specification: "Core", detail: "Dual Core" },
        { Specification: "Model", detail: "5405U" },
        { Specification: "Brand", detail: "Intel" },
        { Specification: "Series", detail: "Pentium Gold" },
        { Specification: "Speed", detail: "1.6 GHz" },
        { Specification: "Boost upto", detail: "2.3 GHz" },
      ],
    },
  ];

  let eo2 = [
    {
      productId: "9TH GEN CORE I7",
      productTitle: "ASUS ROG STRIX SCAR III G531GU-ES016T GAMING LAPTOP",
      Category: "ASUS",
      MadeInArea: "India",
      Specifications: [
        { Specification: "Processor", detail: "Intel" },
        { Specification: "Generation", detail: "9th Gen" },
        { Specification: "Cache", detail: "12 MB" },
        { Specification: "Core", detail: "Hexa Core" },
        { Specification: "Model", detail: "9750H" },
      ],
    },
    {
      productId: "10TH GEN CORE I3",
      productTitle: "HP PAVILION X360 14-DH1008TU LAPTOP",
      Category: "HP",
      MadeInArea: "USA",
      Specifications: [
        { Specification: "Series", detail: "Core i3" },
        { Specification: "Speed", detail: "2.1 GHz" },
        { Specification: "Cache", detail: "4 MB" },
      ],
    },
    {
      productId: "9TH GEN CORE I5",
      productTitle: "DELL INSPIRON G3 3590 GAMING LAPTOP",
      Category: "Dell",
      MadeInArea: "India",
      Specifications: [
        { Specification: "Processor", detail: "Intel Core i5" },
        { Specification: "Generation", detail: "9th Gen" },
        { Specification: "Brand", detail: "NVIDIA" },
        { Specification: "Series", detail: "Core i5" },
        { Specification: "Speed", detail: "2.4 GHz" },
        { Specification: "Boost upto", detail: "4.1 GHz" },
      ],
    },
  ];

  let exampleInputArray2 = [
    {
      idProduct: "9TH GEN CORE I7",
      strProduct: "ASUS ROG STRIX SCAR III G531GU-ES016T GAMING LAPTOP",
      Category: 1,
      Area: 1,
      strSpecification1: "Processor",
      strSpecification2: "Generation",
      strSpecification3: "Cache",
      strSpecification4: "Core",
      strSpecification5: "Model",
      strSpecification6: "",
      strSpecification7: "",
      strSpecification8: "",
      strSpecification9: "",
      strSpecification10: "",
      strSpecification11: "",
      strSpecification12: "",
      strSpecification13: "",
      strSpecification14: "",
      strSpecification15: "",
      strSpecification16: null,
      strSpecification17: null,
      strSpecification18: null,
      strSpecification19: null,
      strSpecification20: null,
      strDetail1: "Intel",
      strDetail2: "9th Gen",
      strDetail3: "12 MB",
      strDetail4: "Hexa Core",
      strDetail5: "9750H",
      strDetail6: "",
      strDetail7: "",
      strDetail8: "",
      strDetail9: "",
      strDetail10: "",
      strDetail11: "",
      strDetail12: "",
      strDetail13: "",
      strDetail14: "",
      strDetail15: "",
      strDetail16: null,
      strDetail17: null,
      strDetail18: null,
      strDetail19: null,
      strDetail20: null,
    },

    {
      idProduct: "10TH GEN CORE I3",
      strProduct: "HP PAVILION X360 14-DH1008TU LAPTOP",
      Category: 2,
      Area: 2,
      strSpecification1: "",
      strSpecification2: "",
      strSpecification3: "",
      strSpecification4: "",
      strSpecification5: "",
      strSpecification6: "",
      strSpecification7: "Series",
      strSpecification8: "Speed",
      strSpecification9: "Cache",
      strSpecification10: "",
      strSpecification11: "",
      strSpecification12: "",
      strSpecification13: "",
      strSpecification14: "",
      strSpecification15: "",
      strSpecification16: null,
      strSpecification17: null,
      strSpecification18: null,
      strSpecification19: null,
      strSpecification20: null,
      strDetail1: "",
      strDetail2: "",
      strDetail3: "",
      strDetail4: "",
      strDetail5: "",
      strDetail6: "",
      strDetail7: "Core i3",
      strDetail8: "2.1 GHz",
      strDetail9: "4 MB",
      strDetail10: "",
      strDetail11: "",
      strDetail12: "",
      strDetail13: "",
      strDetail14: "",
      strDetail15: "",
      strDetail16: null,
      strDetail17: null,
      strDetail18: null,
      strDetail19: null,
      strDetail20: null,
    },
    {
      idProduct: "9TH GEN CORE I5",
      strProduct: "DELL INSPIRON G3 3590 GAMING LAPTOP",
      Category: 3,
      Area: 1,
      strSpecification1: "Processor",
      strSpecification2: "Generation",
      strSpecification3: "",
      strSpecification4: "",
      strSpecification5: "",
      strSpecification6: "Brand",
      strSpecification7: "Series",
      strSpecification8: "Speed",
      strSpecification9: "Boost upto",
      strSpecification10: "",
      strSpecification11: "",
      strSpecification12: "",
      strSpecification13: "",
      strSpecification14: "",
      strSpecification15: "",
      strSpecification16: null,
      strSpecification17: null,
      strSpecification18: null,
      strSpecification19: null,
      strSpecification20: null,
      strDetail1: "Intel Core i5",
      strDetail2: "9th Gen",
      strDetail3: "",
      strDetail4: "",
      strDetail5: "",
      strDetail6: "NVIDIA",
      strDetail7: "Core i5",
      strDetail8: "2.4 GHz",
      strDetail9: "4.1 GHz",
      strDetail10: "",
      strDetail11: "",
      strDetail12: "",
      strDetail13: "",
      strDetail14: "",
      strDetail15: "",
      strDetail16: null,
      strDetail17: null,
      strDetail18: null,
      strDetail19: null,
      strDetail20: null,
    },
  ];

  const product1 = createProduct(
    "SMARTBEATS N5 TABLET",
    "i MAX",
    561,
    350.0,
    "4.1"
  );
  const product2 = createProduct(
    "XIAOMI MI NOTE 10 PRO",
    "XIAOMI",
    677,
    225.0,
    "3.2"
  );

  const arr1 = findTotal([
    {
      name: "student1",
      subjects: [
        { Maths: 60 },
        { History: 780 },
        { English: "50" },
        { Biology: "20" },
      ],
      total: "",
    },
    {
      name: "student2",
      subjects: [
        { Maths: "95" },
        { History: "26" },
        { English: "43" },
        { Biology: "50" },
      ],
      total: "",
    },
    {
      name: "student2",
      subjects: [
        { Maths: "67" },
        { History: "276" },
        { English: "453" },
        { Biology: "420" },
      ],
      total: "",
    },
  ]);

  test("objects created by createProduct has correct properties", () => {
    // const checkthis = createProduct.toString();
    // expect(checkthis).not.toContain("this");
    expect(typeof product2).toBe("object");
    expect(product2.product_name).toBe("XIAOMI MI NOTE 10 PRO");
    expect(product2.brand).toBe("XIAOMI");
    expect(product2.reviews).toBe(677);
    expect(product2.price).toBe(225.0);
    expect(product2.rating).toBe("3.2");

    expect(typeof product1).toBe("object");
    expect(product1.product_name).toBe("SMARTBEATS N5 TABLET");
    expect(product1.brand).toBe("i MAX");
    expect(product1.reviews).toBe(561);
    expect(product1.price).toBe(350.0);
    expect(product1.rating).toBe("4.1");
    global.score += 1;
  });

  test("objects created by createProduct has correct methods", () => {
    // const checkthis = createProduct.toString();
    // expect(checkthis).not.toContain("this");
    expect(product1.getPrice()).toBe(350.0);
    expect(product1.increasePrice(300)).toBe(650.0);
    expect(product1.getPrice()).toBe(650.0);
    expect(product1.decreasePrice(400)).toBe(250.0);
    expect(product1.getPrice()).toBe(250.0);
    expect(product1.isExpensive()).toBe(false);
    product1.increasePrice(1300);
    expect(product1.isExpensive()).toBe(true);

    expect(product2.getPrice()).toBe(225.0);
    expect(product2.increasePrice(50)).toBe(275.0);
    expect(product2.getPrice()).toBe(275.0);
    expect(product2.decreasePrice(100)).toBe(175.0);
    expect(product2.getPrice()).toBe(175.0);
    expect(product2.isExpensive()).toBe(false);
    product2.increasePrice(300);
    expect(product2.isExpensive()).toBe(false);
    global.score += 2;
  });

  test("objects created using CreateProduct are working as expected", () => {
    const product = new CreateProduct(
      "SMARTBEATS N5 TABLET",
      "i MAX",
      561,
      350.0,
      "4.1"
    );
    // const checkthis = CreateProduct.toString();
    // expect(checkthis).toContain("this");
    expect(product.product_name).toBe("SMARTBEATS N5 TABLET");
    expect(product.brand).toBe("i MAX");
    expect(product.reviews).toBe(561);
    expect(product.price).toBe(350.0);
    expect(product.rating).toBe("4.1");
    expect(product.getPrice()).toBe(350.0);
    expect(product.decreasePrice(50)).toBe(300.0);
    expect(product.isExpensive()).toBe(false);
    expect(product.increasePrice(1300)).toBe(1600.0);
    expect(product.isExpensive()).toBe(true);

    global.score += 1;
  });

  test("objects created using Product are working as expected", () => {
    const product = new Product(
      "SMARTBEATS N5 TABLET",
      "i MAX",
      561,
      350.0,
      "4.1"
    );
    // const checkthis = CreateProduct.toString();
    // expect(checkthis).toContain("this");
    expect(product.product_name).toBe("SMARTBEATS N5 TABLET");
    expect(product.brand).toBe("i MAX");
    expect(product.reviews).toBe(561);
    expect(product.price).toBe(350.0);
    expect(product.rating).toBe("4.1");
    expect(product.getPrice()).toBe(350.0);
    expect(product.decreasePrice(50)).toBe(300.0);
    expect(product.isExpensive()).toBe(false);
    expect(product.increasePrice(1300)).toBe(1600.0);
    expect(product.isExpensive()).toBe(true);

    global.score += 1;
  });

  test("checking total amount in array", () => {
    expect(Array.isArray(arr1)).toBe(true);
    expect(arr1[0].total).toBe(910);
    expect(arr1[1].total).toBe(214);
    expect(arr1[2].total).toBe(1216);
    global.score += 2;
  });

  test("array returned by massageArray to have property-value as expected", function () {
    let o1 = massageArray(exampleInputArray);
    let o2 = massageArray(exampleInputArray2);

    expect(o1[0].productId).toBe("8TH GEN CORE I7");
    expect(o1[0].productTitle).toBe("ASUS ZENBOOK FLIP 13 UX362FA LAPTOP");
    expect(o1[0].Category).toBe("ASUS");
    expect(o1[0].MadeInArea).toBe("USA");

    expect(o2[1].productId).toBe("10TH GEN CORE I3");
    expect(o2[1].productTitle).toBe("HP PAVILION X360 14-DH1008TU LAPTOP");
    expect(o2[1].Category).toBe("HP");
    expect(o2[1].MadeInArea).toBe("USA");

    global.score += 2;
  });

  test("array returned by massageArray to be as expected", function () {
    let o1 = massageArray(exampleInputArray);
    expect(o1).toMatchObject(eo1);

    // let o2 = massageArray(exampleInputArray2);
    // expect(o2).toMatchObject(eo2);

    global.score += 2;
  });

  afterAll(() => {
    console.log("Final Score is", global.score);
  });
});
